/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/svelte";
import Header__SvelteComponent_ from "../components/Header.svelte";

test("should render", () => {
  const results = render(Header__SvelteComponent_, {});
  expect(() => results.getByText("Random Coffee")).not.toThrow();
});
