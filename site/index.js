const js = import("../pkg/hello_rust_wasm.js");

window.logger = str => { console.log(">", str) }

js.then(js => {
  js.greet("WebAssembly");
});
