import React from "react";
import { shallow } from "enzyme";
import FormCharts from "./FormCharts";

describe("FormCharts", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<FormCharts />);
    expect(wrapper).toMatchSnapshot();
  });
});
