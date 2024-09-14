import { expect, test } from "vitest";
import { mount } from "@vue/test-utils";

test("adds 1 + 2 to equal 3", () => {
  expect(1 + 2).toBe(3);
});


//import your component
import Basic from "./examples/Basic.vue";

test("mount component", async () => {
  expect(Basic).toBeTruthy();

  const wrapper = mount(Basic);
  expect(wrapper.text()).toContain("Basic Example");
});
