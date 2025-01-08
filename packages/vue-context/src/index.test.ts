import { expect, test } from "vitest";
import { mount } from "@vue/test-utils";

test("Sanity check", () => {
  expect(1 + 2).toBe(3);
});

import ProviderConsumerComponents from "./examples/using-provider-consumer-components/app.vue";

test("Provider and Consumer components", async () => {
  expect(ProviderConsumerComponents).toBeTruthy();
  
  const wrapper = mount(ProviderConsumerComponents);
  expect(wrapper.text()).toContain("Count: 0");
  
  await wrapper.find("button").trigger("click");
  expect(wrapper.text()).toContain("Count: 1");
});

import UseContextComposable from "./examples/using-use-context-composable/app.vue";

test("useContext composable", async () => {
  expect(UseContextComposable).toBeTruthy();
  
  const wrapper = mount(UseContextComposable);
  expect(wrapper.text()).toContain("Count: 0");
  
  await wrapper.find("button").trigger("click");
  expect(wrapper.text()).toContain("Count: 1");
});

import FallbackValue from "./examples/using-fallback-value/app.vue";

test("fallback value", async () => {
  expect(FallbackValue).toBeTruthy();
  
  const wrapper = mount(FallbackValue);
  expect(wrapper.text()).toContain("Count: 42");
});

import CreateContextUtil from "./examples/using-create-context-util/app.vue";

test("createContext Util", async () => {
  expect(CreateContextUtil).toBeTruthy();
  
  const wrapper = mount(CreateContextUtil);
  expect(wrapper.text()).toContain("Count: 0");
  
  await wrapper.find("button").trigger("click");
  expect(wrapper.text()).toContain("Count: 1");
});