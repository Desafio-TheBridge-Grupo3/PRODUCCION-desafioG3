import React from "react";
import { shallow } from "enzyme";
import UserView from "./UserView";

describe("UserView", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<UserView />);
    expect(wrapper).toMatchSnapshot();
  });
});
