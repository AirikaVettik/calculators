
import { mount } from "@vue/test-utils";
import Calculator from "@/views/Calculator.vue";

describe("Calculator.vue", () => {
  it("should divide properly", () => {
    const wrapper = mount(Calculator);

    const btnSix = '.btn-6';
    const btnDivide = '.btn-divide';
    const btnTwo = '.btn-2';
    const btnEquals = '.btn-equals';
    const resultsExpected = 3;

    wrapper.find(btnSix).trigger('click');
    wrapper.find(btnDivide).trigger('click');
    wrapper.find(btnTwo).trigger('click');
    wrapper.find(btnEquals).trigger('click');

    // Get result in data
    const result = wrapper.vm.$data.results;

    // Expected is 10, because 5 * 2 = 10
    expect(result).toBe(resultsExpected)
  })
  })

