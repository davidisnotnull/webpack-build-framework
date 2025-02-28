module.exports = {
    presets: [
      [
        "@babel/preset-env",
        {
          // Target modern browsers (>0.25% market share and not obsolete)
          targets: ">0.25%, not dead",
          // Enables polyfill injection based on your code usage (and your browser targets)
          useBuiltIns: "usage",
          // Specify the version of core-js to use
          corejs: "3.28",
          // Apply bug fixes from Babel's plugin layer
          bugfixes: true
        }
      ]
    ]
  };