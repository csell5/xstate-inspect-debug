// import { inspect } from "@xstate/inspect";
import App from "./App.svelte";

// inspect({
//   url: "https://statecharts.io/inspect",
//   iframe: false
// });

const app = new App({
  target: document.body,
  props: {},
});

export default app;
