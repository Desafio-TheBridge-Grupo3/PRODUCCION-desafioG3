import json
from werkzeug.serving import make_server
from flask import Flask, request, jsonify
from flask_limiter import Limiter
from flask_cors import CORS, cross_origin
from cerberus import Validator
import threading
from queue import Queue
import signal

import os
import sys

import ws_app


script_dir = os.getcwd()
my_module_path = os.path.join(script_dir, "..")
sys.path.append(my_module_path)
os.chdir(os.path.dirname(__file__))

queue_info = Queue()

app = Flask(__name__)
cors = CORS(app, resources={r"/cups20": {"origins": "https://client-calculadora-several2.thankfulgrass-02544078.westeurope.azurecontainerapps.io"}})
CORS(app)
app.config["DEBUG"] = True
limiter = Limiter(
    app,
    default_limits=["1000 per day", "50 per hour"]
)

@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization,true')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    return response

@app.route('/', methods=['GET'])
@cross_origin(origin='*', headers=['Content-Type', 'Authorization'])
def home():
   return "API"

@app.route('/shutdown', methods=['POST'])
@cross_origin(origin='*', headers=['Content-Type', 'Authorization'])
def shutdown():
    if request.method == 'POST':
        print("Deteniendo la aplicación...")
        os.kill(os.getpid(), signal.SIGINT)
        return jsonify(message="Server shutting down..."), 200
    else:
        return jsonify(error="Invalid request method"), 405

def ws_candela(cups):
    try:
        info = ws_app.webscraping_chrome_candelas(cups)
        queue_info.put(info)
    except Exception as e:
        queue_info.put(str(e))


@app.route('/cups20', methods=['POST'])
@cross_origin(origin='*', headers=['Content-Type', 'Authorization'])
@limiter.limit("10 per minute")
def calcule_energy_consumption():
    
    schema = {
    'cups20': {'type': 'string', 'minlength': 20, 'maxlength': 22},
    }
    validator = Validator(schema)

    try:
        record = json.loads(request.data)
        if validator.validate(record):
            for c in record:
                cups = record["cups20"]
                thread = threading.Thread(target=ws_candela, args=(cups,))
                thread.start()
            thread.join()
            info = queue_info.get()
            return {"info": info}
        else:
            return {'error': f'Data is invalid {validator.errors}'}
    except Exception as e:
        return {'error': e}
    
if __name__ == '__main__':
  server = make_server('0.0.0.0', 5000, app)
  server.serve_forever()