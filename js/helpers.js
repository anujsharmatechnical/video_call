export default {
  generateRandomString() {
    const crypto = window.crypto || window.msCrypto;
    let array = new Uint32Array(1);
    return crypto.getRandomValues(array);
  },
};
