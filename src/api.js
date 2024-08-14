import { cryptoAssets, cryptoData } from "./data";

export function fetchCryptoData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(cryptoData), 3000);
  });
}

export function fetchCryptoAssets() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(cryptoAssets), 3000);
  });
}
