<script lang="ts">
  import CoffeeList from "./components/CoffeeList.svelte";
  import RoundButton from "./components/Footer.svelte";
  import { fetchCoffee } from "./stores/coffeesStore";
  import { onMount } from "svelte";
  import Header from "./components/Header.svelte";

  export let name;

  onMount( () => {
		fetchCoffee(true);
	});

</script>

<main>
  {name}
  <Header />
  <CoffeeList />
  <RoundButton />
</main>

<style lang="less">
  
</style>
