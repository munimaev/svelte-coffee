<script lang="ts">
  import { fade, fly } from "svelte/transition";
  import type { Coffee } from "../stores/coffeesStore";
  import CoffeeNotes from "./CoffeeNotes.svelte";
  export let data: Coffee;
  let imageLoaded = false;
</script>

<div class="card">
  <div class="image-container">
  {#if !imageLoaded}
      <div class="image-placeholder" />
      <img
        src={data.img}
        alt="Coffee beans"
        on:load={() => (imageLoaded = true)}
      />
  {/if}

  {#if imageLoaded}
      <img src={data.img} alt="Coffee beans" in:fade={{ duration: 500 }}/>
  {/if}
  <div class="intensifier">
    {data.intensifier}
  </div>
</div>

  <div class="info" in:fade={{ duration: 500 }}>
    <h5 class="origin" in:fly={{ x: 50 }}>
      {data.origin}
    </h5>
    <h3 class="blend_name" in:fly={{ x: 50, delay: 200 }}>
      {data.blend_name}
    </h3>
    <p class="variety" in:fly={{ x: 50, delay: 400 }}>
      {data.variety}
    </p>
  </div>
  <CoffeeNotes notes={data.notes} />
</div>

<style lang="less">
  @import "../styles/common.less";

  .card {
    width: 300px;
    height: 400px;
    background-color: @cardColor;
    border-radius: @cardInfoPadding;
    
    transition: all 0.25s ease;
    .shadow();

    &:hover{
      transform: translate(0, -0.5rem);

      box-shadow: 0px calc(5px + 0.5rem) 6px 2px rgba(0, 0, 0, 0.2);
      -webkit-box-shadow: 0px calc(5px + 0.5rem) 6px 2px rgba(0, 0, 0, 0.2);
      -moz-box-shadow: 0px calc(5px + 0.5rem) 6px 2px rgba(0, 0, 0, 0.2)
    }
  }
  .image-container {
    aspect-ratio: 4/3;
    background-color: #f1d2ab;
    border-radius: @cardInfoPadding @cardInfoPadding 0 0;
    overflow: hidden;
    position: relative;

    .image-placeholder {
      aspect-ratio: 4/3;

      .spinner();
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .intensifier {
    color: rgb(50, 19, 18);
    background-color: #eae8e9;
    border: 1px solid rgb(50, 19, 18);
    height: 2em;
    line-height: 1.8em;
    border-radius: 1em;
    padding: 0 1em;
    position: absolute;
    top: @cardInfoPadding;
    right: @cardInfoPadding;
    
  }
  .info {
    padding: @cardInfoPadding;
  }
  .origin {
    margin: 0.5em 0;
    color: @colorCoffeeLight;
  }
  .blend_name {
    margin: 0.5em 0;
    color: @colorCoffee;
  }
  .variety {
    margin: 0.5em 0;
  }
</style>
