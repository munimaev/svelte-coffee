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
  @import "../styles/variables.less";
  @import "../styles/mixins.less";

  .card {
    background-color: @colorSecondaryLighter;
    border-radius: @commonPadding;
    height: 400px;
    width: 300px;
    .shadow();
    .loading();
    .spinner();
  }
</style>
