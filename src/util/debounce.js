export default function debounce(callback, timeout=500) {
  let timer;

  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(callback.bind(null, ...args), timeout);
  }
}