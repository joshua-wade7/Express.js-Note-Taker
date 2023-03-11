module.exports = () =>
  Math.floor((1 + Math.random()) * 0x1000)
    .toString(16)
    .substring(1);
