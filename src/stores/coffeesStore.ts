import { writable } from "svelte/store";

const imgScr: string = "https://loremflickr.com/500/500/coffee%20bean?random=";

export interface CoffeeCommonFields {
  id: number;
  uid: string;
  blend_name: string;
  origin: string;
  variety: string;
  intensifier: string;
}

export interface CoffeeRaw extends CoffeeCommonFields {
  notes: string;
}

export interface Coffee extends CoffeeCommonFields {
  notes: string[];
  img: string;
}

export interface CofeeStore {
  coffees: Coffee[];
  imageCounter: number;
}

const initialCofeeStore: CofeeStore = {
  coffees: [],
  imageCounter: 1,
};

export const coffeeStore = writable(initialCofeeStore);
export const coffeeLoading = writable(false);
export const coffeeAuto = writable(false);

export function addCoffee(newCoffeeRaw: CoffeeRaw): void {
  coffeeLoading.set(false);
  coffeeAuto.set(false);

  coffeeStore.update(({ coffees, imageCounter }): CofeeStore => {
    const newCoffee: Coffee = {
      ...newCoffeeRaw,
      img: imgScr + imageCounter,
      notes: [...new Set(newCoffeeRaw.notes.split(", "))],
    };

    return {
      coffees: [...coffees, newCoffee],
      imageCounter: imageCounter + 1,
    };
  });
}

export function fetchCoffee(auto: boolean = false): void {
  coffeeLoading.set(true);
  coffeeAuto.set(auto);

  fetch("https://random-data-api.com/api/coffee/random_coffee")
    .then((response) => response.json())
    .then(addCoffee)
    // TODO need to inform the user somehow about the error
    .catch(console.error);
}
