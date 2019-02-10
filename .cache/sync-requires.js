// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/mac10/Documents/GitHub/developersite/src/pages/404.js")),
  "component---src-pages-bam-js": preferDefault(require("/Users/mac10/Documents/GitHub/developersite/src/pages/bam.js")),
  "component---src-pages-imprint-js": preferDefault(require("/Users/mac10/Documents/GitHub/developersite/src/pages/imprint.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/mac10/Documents/GitHub/developersite/src/pages/index.js")),
  "component---src-pages-kellerkind-js": preferDefault(require("/Users/mac10/Documents/GitHub/developersite/src/pages/kellerkind.js")),
  "component---src-pages-lifetime-js": preferDefault(require("/Users/mac10/Documents/GitHub/developersite/src/pages/lifetime.js")),
  "component---src-pages-palettteapp-js": preferDefault(require("/Users/mac10/Documents/GitHub/developersite/src/pages/palettteapp.js"))
}

