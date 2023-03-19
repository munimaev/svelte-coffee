<script lang="ts">
  import CoffeeList from "./components/CoffeeList.svelte";
  import RoundButton from "./components/Footer.svelte";
  import { fetchCoffee } from "./stores/coffeesStore";
  import { onMount } from "svelte";
  import Header from "./components/Header.svelte";


  onMount( () => {
		fetchCoffee(true);
	});

</script>

<main>
  <Header />
  <CoffeeList />
  <RoundButton />
</main>

<style lang="less">
  
</style>
