module.exports = {
  presets: ['@babel/env'],

  env: {
    production: {
      presets: ['minify'],
    },
  },
};
