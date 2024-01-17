import React from "react";
import { shallow } from "enzyme";
import ProfileComponent from "./ProfileComponent";

describe("ProfileComponent", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ProfileComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
