<script context="module">
  console.log('loading module');
  import { inspect } from "@xstate/inspect";
  
  inspect({
    url: "https://statecharts.io/inspect",
    iframe: false
  });
</script>

<script>
  console.log('loading app');
  import { useMachine } from "xstate-svelte";
  import { machine } from "./machine";

  const { state, send } = useMachine(machine, { devTools: true });
</script>

<main>
	<h1>Hello word</h1>
  <button on:click={() => send("TOGGLE")}>toggle</button>
	<span>{$state.value}</span>
</main>