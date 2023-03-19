<script lang="ts">
  import { coffeeStore } from "../stores/coffeesStore";
  import CoffeeCard from "./CoffeeCard.svelte";
  import CoffeeCardPlaceholder from "./CoffeeCardPlaceholder.svelte";
  import { coffeeLoading } from "../stores/coffeesStore";

  let coffees;

  const unsubscribe = coffeeStore.subscribe((store) => {
    coffees = store.coffees;
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
  // TODO check if it is needed
  @import "../styles/common.less";

  .cards {
    display: grid;
    margin-left: auto;
    margin-right: auto;
    grid-auto-rows: auto;
    grid-gap: 1rem;
      grid-template-columns: repeat(4, 300px);
      padding-bottom: 120px;
    gap: 30px;
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
