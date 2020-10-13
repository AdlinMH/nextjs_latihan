module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    standardFontWeights: true,
  },
  purge: {
    layers: ['utilities'],
    content: [
      // Use *.tsx if using TypeScript
      './pages/**/*.js',
      './components/**/*.js',
    ],
  },
  // ...
}
