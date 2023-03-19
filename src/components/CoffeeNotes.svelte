<script lang="ts">
  import { fade } from "svelte/transition";
  import CoffeeNote from "./CoffeeNote.svelte";
  export let notes: string[];

  let scrollable: HTMLElement;

  function horizontalScroll(event): void {
    scrollable.scrollLeft += event.deltaY + event.deltaX;
  }
</script>

<div
  class="notes"
  in:fade={{ delay: 500 }}
  on:wheel|preventDefault={horizontalScroll}
  bind:this={scrollable}
>
  <div class="scroll">
    {#each notes as note (note)}
      <CoffeeNote {note} />
    {/each}
  </div>
</div>

<style lang="less">
  @import "../styles/variables.less";

  .notes {
    font-size: small;
    height: calc(1.5em + @commonPadding);
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .scroll {
    display: flex;
    width: fit-content;
  }

  .scroll::before {
    background: linear-gradient(90deg, @colorSecondaryLighter 15%, transparent 100%);
    content: "";
    display: block;
    height: 1.5em;
    left: 0;
    min-width: @commonPadding;
    position: sticky;
    z-index: 10;
  }

  .scroll::after {
    background: linear-gradient(90deg, transparent 0%, @colorSecondaryLighter 85%);
    content: "";
    display: block;
    height: 1.5em;
    min-width: @commonPadding;
    position: sticky;
    right: 0;
    z-index: 10;
  }
</style>
