/**
 * @jest-environment jsdom
 */

import { render, fireEvent } from "@testing-library/svelte";
import { tick } from "svelte";
import "jest-fetch-mock";
import Footer__SvelteComponent_ from "../components/Footer.svelte";
import { coffeeLoading } from "../stores/coffeesStore";

const mockCoffee = {
  id: 3417,
  uid: "9c772363-8362-48a2-b871-cdbbea018b86",
  blend_name: "Blue Enlightenment",
  origin: "Chiriqui, Panama",
  variety: "Ethiopian Heirloom",
  notes: "crisp, coating, black-tea,peanut, tobacco",
  intensifier: "juicy",
};

describe("Footer", () => {
  beforeAll(() => {
    jest.useFakeTimers();
    jest.spyOn(global, "setInterval");
    jest.spyOn(global, "clearInterval");

    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockCoffee),
    });
    jest.spyOn(global, "fetch");
  });

  beforeEach(() => {
    jest.clearAllMocks();
    coffeeLoading.set(false);
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it("should create setInterval after onMount", () => {
    expect(setInterval).not.toHaveBeenCalled();

    render(Footer__SvelteComponent_);

    expect(setInterval).toHaveBeenCalledTimes(1);
  });

  it("should make fetch after each 30 seconds", () => {
    expect(fetch).not.toHaveBeenCalled();

    render(Footer__SvelteComponent_);

    jest.advanceTimersByTime(35000);
    expect(fetch).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(30000);
    expect(fetch).toHaveBeenCalledTimes(2);

    jest.advanceTimersByTime(300000);
    expect(fetch).toHaveBeenCalledTimes(12);
  });

  it("should reset time interval after click on button", async () => {
    expect(clearInterval).not.toHaveBeenCalled();

    const { getByRole } = render(Footer__SvelteComponent_);
    const button = getByRole("button");

    expect(setInterval).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(20000);

    await fireEvent.click(button);
    expect(clearInterval).toHaveBeenCalledTimes(1);
    expect(setInterval).toHaveBeenCalledTimes(2);
    expect(fetch).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(10000);
    expect(fetch).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(10000);
    expect(fetch).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(10000);
    expect(fetch).toHaveBeenCalledTimes(2);
  });

  it("should make no request on after click on button during loading ", async () => {
    const { getByRole } = render(Footer__SvelteComponent_);
    const button = getByRole("button") as HTMLButtonElement;

    expect(button.disabled).toBe(false);

    coffeeLoading.set(true);

    await tick();
    expect(button.disabled).toBe(true);

    await fireEvent.click(button);
    expect(fetch).not.toHaveBeenCalled();
  });
});
