<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { fetchCoffee, coffeeLoading } from "../stores/coffeesStore";

  let interval: NodeJS.Timer = null;

  onMount( () => {
    interval = setInterval(() => fetchCoffee(true), 30000)
	});

  onDestroy(() => {
    clearInterval(interval);
  });

  function clickHandler() {
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
    <span class="plus">+</span>
  </button>
</footer>

<style lang="less">
  @import "../styles/common.less";

  footer {
    position: fixed;
    z-index: 200;
    bottom: 0;
    left: calc(50% - 45px);
    width: 90px;
    display: block;
    text-align: center;
    margin: 15px auto 0;
    background-color: @cardColor;
    padding: @cardInfoPadding;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    .shadow();
  }

  @media only screen and (max-width: @thresholdMobile) {
    footer {
      width: auto;
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      border-radius: 0;
    }
  }

  .round {
    color: #fffafd;
    display: block;
    cursor: pointer;
    background-color: @colorCoffee;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    line-height: 47px;

    margin: 0 auto;
    background: rgb(50, 19, 18);
    background-image: radial-gradient(
      circle,
      rgba(50, 19, 18, 1) 56%,
      rgba(255, 255, 255, 0) 56%,
      rgba(255, 255, 255, 0) 64%,
      rgba(50, 19, 18, 1) 64%,
      rgba(50, 19, 18, 1) 100%
    );
    background-color: #fff;

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
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
    line-height: 47px;

    background-image: radial-gradient(
      circle,
      rgba(50, 19, 18, 1) 56%,
      rgba(255, 255, 255, 0) 56%,
      rgba(255, 255, 255, 0) 64%,
      rgba(50, 19, 18, 1) 64%,
      rgba(50, 19, 18, 1) 100%
    );
    background-color: #fff;
  }
}
  
  .plus {
    font-size: 300%;
  }

  
</style>
