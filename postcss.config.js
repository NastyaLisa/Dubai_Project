// const path = require('path');

module.exports = {
  plugins: [
    require('autoprefixer'),
    require('css-mqpacker'),
    require('cssnano')({
      preset: [
        'default',
        {
          discardComments: {
            removeAll: true,
          },
        },
      ],
    }),
    // require('postcss-import')({
    //   path: [path.join(__dirname, 'src')],
    // }),
  ],
};
