import { expect, test } from "vitest";
import { mount } from "@vue/test-utils";

test("sanity check", () => {
  expect(1 + 2).toBe(3);
});

import BasicExample from "./examples/basic-example.vue";

test("basic example", async () => {
  expect(BasicExample).toBeTruthy();
  
  const wrapper = mount(BasicExample);
  expect(wrapper.text()).toContain("Count: 0");
  
  await wrapper.find("button").trigger("click");
  expect(wrapper.text()).toContain("Count: 1");
});
