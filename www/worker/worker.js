import("../../crate-wasm/pkg").then(wasm => {
  wasm.init();
  self.addEventListener("message", ev => {
    const num = Number(ev.data);
    if (!num) {
      self.postMessage({ allGood: false, error: ev.data + "is not a number!" });
      return;
    }
    try {
      const isPrime = wasm.is_prime(num);
      self.postMessage({ allGood: true, isPrime: isPrime });
    } catch (err) {
      self.postMessage({ allGood: false, error: err.message });
    }
  });
});
