<script lang="ts">
  import { coffeeStore, type Coffee } from "../stores/coffeesStore";
  import CoffeeCard from "./CoffeeCard.svelte";
  import CoffeeCardPlaceholder from "./CoffeeCardPlaceholder.svelte";
  import { coffeeLoading } from "../stores/coffeesStore";
  import { onDestroy } from "svelte";

  let coffees: Coffee[] = [];

  const unsubCoffeeStore = coffeeStore.subscribe((store) => {
    coffees = store.coffees;
  });

  onDestroy(() => {
    unsubCoffeeStore();
  });
</script>

<div class="cards">
  {#each coffees as data (data.uid)}
    <CoffeeCard {data} />
  {/each}
  {#if $coffeeLoading}
    <CoffeeCardPlaceholder />
  {/if}
</div>

<style lang="less">
  @import "../styles/variables.less";

  .cards {
    display: grid;
    gap: 30px;
    grid-auto-rows: auto;
    grid-gap: 1rem;
    grid-template-columns: repeat(4, 300px);
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 120px;
    width: fit-content;
  }

  @media only screen and (max-width: @thresholdLaptop) {
    .cards {
      grid-template-columns: repeat(3, 300px);
    }
  }

  @media only screen and (max-width: @thresholdTablet) {
    .cards {
      grid-template-columns: repeat(2, 300px);
    }
  }

  @media only screen and (max-width: @thresholdMobile) {
    .cards {
      grid-template-columns: repeat(1, 300px);
    }
  }
</style>
