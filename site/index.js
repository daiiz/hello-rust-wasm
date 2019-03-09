const js = import("../pkg/hello_rust_wasm.js");

window.logger = str => { console.log(">", str) }

js.then(js => {
  js.greet("WebAssembly");
  console.log(js.gcd(3 * 17 * 23, 3 * 19 * 23));
});
