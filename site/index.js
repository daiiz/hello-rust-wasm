const jsPromise = import("../pkg/hello_rust_wasm.js");

window.logger = str => { console.log(">", str) }

const main = async () => {
  window.rs = await jsPromise

  rs.greet("WebAssembly");
  console.log(rs.sum(3 * 17 * 23, 3 * 19 * 23));
  console.log(rs.gcd(3 * 17 * 23, 3 * 19 * 23));
  console.log(rs.gcd(Math.floor(Math.random() * 1000), Math.floor(Math.random() * 1000)));
}

main()
