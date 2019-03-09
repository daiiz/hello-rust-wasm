const js = import("./node_modules/@daiiz/hello-rust-wasm/hello_rust_wasm.js");
js.then(js => {
  js.greet("WebAssembly");
});
