// It allows JavaScript to call a Rust API with a string,
// or a Rust function to catch a JavaScript exception.
extern crate wasm_bindgen;

mod math;

use wasm_bindgen::prelude::*;
use math::*;

// Calling external functions in JavaScript from Rust
// The attribute says "wasm-bindgen knows how to find these functions".
#[wasm_bindgen]
extern {
    pub fn logger(s: &str);
}

// Producing Rust functions that JavaScript can call
#[wasm_bindgen]
pub fn greet(name: &str) {
    logger(&format!("Hello, {}", name));
}

#[wasm_bindgen]
pub fn gcd(a: i32, b: i32) -> i32 {
    calc_gcd(a, b)
}

#[wasm_bindgen]
pub fn sum(a: i32, b: i32) -> i32 {
    a + b
}
