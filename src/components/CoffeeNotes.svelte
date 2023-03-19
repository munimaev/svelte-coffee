<script lang="ts">
  import { fade } from "svelte/transition";
  import CoffeeNote from "./CoffeeNote.svelte";
  export let notes: string[];
</script>

<div class="notes"  in:fade="{{delay: 500}}">
  <div class="scroll">
    {#each notes as note (note) }
      <CoffeeNote {note}/>
    {/each}
  </div>
</div>

<style lang="less">
  @import '../styles/common.less';

  .notes {
    font-size: small;
    height: calc(1.5em + @cardInfoPadding);
    overflow: scroll;
    position: relative;
  }
  .scroll {
    display: flex;
    position: relative;
    width: fit-content;
  }
  .scroll::before {
    content: '';
    background: linear-gradient(90deg, @cardColor 15%, transparent 100%);
    position: sticky;
    z-index: 10;
    left: 0;
    display: block;
    height: 1.5em;
    min-width: @cardInfoPadding;
  }
  .scroll::after {
    content: '';
    height: 1.5em;
    background: linear-gradient(90deg, transparent 0%,  @cardColor 85%);
    position: sticky;
    z-index: 10;
    right: 0;
    display: block;
    min-width: @cardInfoPadding;
  }

</style>

