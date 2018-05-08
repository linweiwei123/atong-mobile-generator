// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {
      "`browsers": [
       "iOS >= 7",
        "Android > 4.1",
        "Firefox > 20",
        "last 2 versions",
         "> 5%"
      ]
    },
    "postcss-px2rem":{
      remUnit: 37.5
    }
  }
}
// // https://github.com/michael-ciniawsky/postcss-load-config
// module.exports = {
//   "plugins": {
//     "postcss-import": {},
//     "postcss-url": {},
//     "postcss-aspect-ratio-mini": {},
//     "postcss-write-svg": {
//       utf8: false
//     },
//     "postcss-cssnext": {
//       "browsers": [
//         "iOS >= 7",
//         "Android > 4.1",
//         "Firefox > 20",
//         "last 2 versions",
//         "> 5%"
//       ]
//     },
//     "postcss-px-to-viewport": {
//       viewportWidth: 750,
//       // (Number) The width of the viewport.
//       viewportHeight: 1334,    // (Number) The height of the viewport.
//       unitPrecision: 3,     // (Number) The decimal numbers to allow the REM units to grow to.
//       viewportUnit: 'vw',     // (String) Expected units.
//       selectorBlackList: ['.ignore', '.hairlines'],     // (Array) The selectors to ignore and leave as px.
//       minPixelValue: 1,     // (Number) Set the minimum pixel value to replace.
//       mediaQuery: false     // (Boolean) Allow px to be converted in media queries.
//     },
//     // "postcss-viewport-units":{},
//     "cssnano": {
//       "preset": "advanced",
//       "autoprefixer": false,
//       "postcss-zindex": false,
//       "browserslist": [
//         "> 1%",
//         "IE 10"
//       ]
//     }
//   }
// }
