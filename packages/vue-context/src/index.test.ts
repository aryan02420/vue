import { expect, test } from "vitest";
import { mount } from "@vue/test-utils";

test("Sanity check", () => {
  expect(1 + 2).toBe(3);
});

import ProviderConsumerComponents from "./examples/provider-consumer-components.vue";

test("Provider and Consumer components", async () => {
  expect(ProviderConsumerComponents).toBeTruthy();
  
  const wrapper = mount(ProviderConsumerComponents);
  expect(wrapper.text()).toContain("Count: 0");
  
  await wrapper.find("button").trigger("click");
  expect(wrapper.text()).toContain("Count: 1");
});

import ProviderComponent from "./examples/provider-component.vue";

test("useContext composable", async () => {
  expect(ProviderComponent).toBeTruthy();
  
  const wrapper = mount(ProviderComponent);
  expect(wrapper.text()).toContain("Count: 0");
  
  await wrapper.find("button").trigger("click");
  expect(wrapper.text()).toContain("Count: 1");
});
