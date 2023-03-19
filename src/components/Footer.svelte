<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { fetchCoffee, coffeeLoading } from "../stores/coffeesStore";

  let interval: NodeJS.Timer;

  onMount(() => {
    interval = setInterval(() => fetchCoffee(true), 30000);
  });

  onDestroy(() => {
    clearInterval(interval);
  });

  function clickHandler(): void {
    if ($coffeeLoading) {
      return;
    }
    fetchCoffee();
    clearInterval(interval);
    interval = setInterval(() => fetchCoffee(true), 30000);
  }
</script>

<footer>
  <button class="round" on:click={clickHandler} disabled={$coffeeLoading}>
    <div class="plus" />
  </button>
</footer>

<style lang="less">
  @import "../styles/variables.less";
  @import "../styles/mixins.less";

  footer {
    background-color: @colorSecondaryLighter;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    bottom: 0;
    display: block;
    left: calc(50% - 45px);
    margin: 15px auto 0;
    padding: @commonPadding;
    position: fixed;
    width: 90px;
    z-index: 200;
    .shadow();
  }

  @media only screen and (max-width: @thresholdMobile) {
    footer {
      border-radius: 0;
      bottom: 0;
      left: 0;
      position: fixed;
      width: 100%;
      width: auto;
    }
  }

  .round {
    background-color: @colorBgGrey;
    border-radius: 50%;
    border: 3px solid @colorPrimary;
    cursor: pointer;
    display: block;
    height: 60px;
    padding: 0;
    width: 60px;

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }

  .round:not(:disabled):hover {
    filter: brightness(1.5);
  }

  .round:not(:disabled):active {
    filter: brightness(0.9);
  }

  @media only screen and (max-width: @thresholdMobile) {
    .round {
      height: 60px;
      width: 60px;
    }
  }

  .plus {
    background-color: @colorPrimary;
    border-radius: 50%;
    display: block;
    height: 48px;
    margin: auto;
    position: relative;
    width: 48px;

    &::before {
      background-color: @colorBgGrey;
      content: "";
      display: block;
      height: 24px;
      left: 22px;
      position: absolute;
      top: 12px;
      width: 4px;
    }
    &::after {
      background-color: @colorBgGrey;
      content: "";
      display: block;
      height: 4px;
      left: 12px;
      position: absolute;
      top: 22px;
      width: 24px;
    }
  }
</style>
