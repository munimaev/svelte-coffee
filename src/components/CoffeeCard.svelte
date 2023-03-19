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
      <img src={data.img} alt="Coffee beans" in:fade={{ duration: 500 }} />
    {/if}
    <div class="intensifier" in:fade={{ duration: 200 }}>
      {data.intensifier}
    </div>
  </div>

  <div class="info" in:fade={{ duration: 500 }}>
    <h5 class="origin" in:fly={{ x: 50 }}>
      {data.origin}
    </h5>
    <div class="blend_name" in:fly={{ x: 50, delay: 200 }}>
      <h3>
        {data.blend_name}
      </h3>
    </div>
    <p class="variety" in:fly={{ x: 50, delay: 400 }}>
      {data.variety}
    </p>
  </div>
  <CoffeeNotes notes={data.notes} />
</div>

<style lang="less">
  @import "../styles/variables.less";
  @import "../styles/mixins.less";

  .card {
    background-color: @colorSecondaryLighter;
    border-radius: @commonPadding;
    height: 400px;
    transition: all 0.25s ease;
    width: 300px;
    .shadow();

    &:hover {
      transform: translate(0, -0.5rem);
      box-shadow: 0px calc(5px + 0.5rem) 6px 2px @colorShadow;
      -webkit-box-shadow: 0px calc(5px + 0.5rem) 6px 2px @colorShadow;
      -moz-box-shadow: 0px calc(5px + 0.5rem) 6px 2px @colorShadow;
    }
  }

  .image-container {
    aspect-ratio: 4/3;
    background-color: @colorSecondaryLight;
    border-radius: @commonPadding @commonPadding 0 0;
    overflow: hidden;
    position: relative;

    .image-placeholder {
      aspect-ratio: 4/3;
      .spinner();
    }

    img {
      height: 100%;
      object-fit: cover;
      width: 100%;
    }
  }

  .intensifier {
    background-color: @colorBgGrey;
    border-radius: 1em;
    border: 1px solid @colorPrimaryLight;
    color: @colorPrimary;
    height: 2em;
    line-height: 1.8em;
    padding: 0 1em;
    position: absolute;
    right: @commonPadding;
    top: @commonPadding;
  }

  .info {
    margin: @commonPadding;
  }

  .origin {
    color: @colorPrimaryLight;
    margin: 0.5em 0;
    .ellipsis();
  }

  .blend_name {
    align-items: center;
    display: flex;
    margin: 0.5em 0;
    min-height: 50px;

    & h3 {
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      color: @colorPrimary;
      display: -webkit-box;
      line-height: 1.2em;
      margin: 0.5em 0;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .variety {
    margin: 0.5em 0;
    .ellipsis();
  }
</style>
