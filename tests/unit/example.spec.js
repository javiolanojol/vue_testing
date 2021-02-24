import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
import testComponent from "@/components/testComponent.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});

describe("testComponent.vue", () => {
  it("should be pass when you render slots", () => {
    const title = "<span>Title</span>";
    const wrapper = shallowMount(testComponent, {
      slots: { title }
    });
    expect(wrapper.html()).toMatch(title);
  });
});
