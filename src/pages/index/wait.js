/**
 * wait
 * @param {Number} ms - The number of milliseconds to wait.
 * @example
 * wait(1000).then(() => { console.log('Waited for 1000 ms'); 
 * @returns {Promise<void>}
 */
export default function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}