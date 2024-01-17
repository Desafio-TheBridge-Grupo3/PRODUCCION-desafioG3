import React from "react";
import { shallow } from "enzyme";
import LoginImage from "./LoginImage";

describe("LoginImage", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<LoginImage />);
    expect(wrapper).toMatchSnapshot();
  });
});
