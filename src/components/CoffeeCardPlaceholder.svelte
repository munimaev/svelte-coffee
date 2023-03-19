<script lang="ts">
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";
  import { coffeeAuto } from "../stores/coffeesStore";
  onMount(() => {
    if (!$coffeeAuto) {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }
  });
</script>

<div class="card loading" in:fly={{ y: 50 }} />

<style lang="less">
  @import "../styles/common.less";

  .card {
    width: 300px;
    height: 400px;
    background-color: @cardColor;
    border-radius: @cardInfoPadding;
    .shadow();
    .loading();
    .spinner();
  }
</style>
