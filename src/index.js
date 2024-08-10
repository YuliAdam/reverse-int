module.exports = function reverse (n) {
    let numArray = Array.from(String(Math.abs(n)), Number);
  return numArray.reverse().join('');
}

