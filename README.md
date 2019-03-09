# hello-rust-wasm
ref. https://developer.mozilla.org/ja/docs/WebAssembly/Rust_to_wasm

## Create new library
```
$ cargo new --lib hello-rust-wasm
```

## Building the package
```
$ wasm-pack build --scope daiiz
```

## Publishing the package to npm
```
$ cd pkg
$ npm publish --access=public
```
https://www.npmjs.com/package/@daiiz/hello-rust-wasm

## Run web app
```
$ npm install
$ npm run serve
```
http://localhost:8080
