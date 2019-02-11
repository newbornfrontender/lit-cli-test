module.exports = ({ env }) => ({
  syntax: require('postcss-syntax')({
    rules: [
      {
        test: /\.js$/i,
        lang: 'postcss-jsx'
      },
    ],
  }),

  plugins: {
    'postcss-preset-env': {
      stage: 3,

      features: {
        'nesting-rules': {}
      },

      autoprefixer: env === 'production' && {},
    },

    cssnano: env === 'production' && {},
  },
});
