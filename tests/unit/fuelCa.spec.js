import { shallowMount } from "@vue/test-utils";
import fuelCal from "@/views/fuelCal.vue";

describe("fuelCal.vue", () => {
  it("should calculate fuel with setData", () => {
    const wrapper = shallowMount(fuelCal, {});
    wrapper.setData({ distance: 100, spentFuel: 5, fuelCost: 1.5 });
    wrapper.vm.computeConsumption();
    expect(wrapper.vm.spentFuel).toBe("5.00");
    expect(wrapper.vm.fuelCost ).toBe("7.5");
  })
})