import React from "react";
import { shallow } from "enzyme";
import Charts from "./Charts";

describe("Charts", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Charts />);
    expect(wrapper).toMatchSnapshot();
  });
});
