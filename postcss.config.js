module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-preset-env')({
      stage: 1,
    }),
    require('precss'),
    require('postcss-import'),
    require('postcss-assets')({
      loadPaths: ['dist/img']
    }),
    require('postcss-pxtorem'),
    require('postcss-responsive-font'),
    // require('cssnano')({
    //   preset: 'default',
    // })
  ]
};