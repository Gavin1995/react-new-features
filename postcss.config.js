module.exports = {
  plugins: [
    require('autoprefixer')({ browsers: ['last 5 versions', 'iOS 7'] }),
    require('postcss-pxtorem')({
      rootValue: 75,
      propList: ['*', '!letter-spacing', '!border*'],
    }),
  ],
};
