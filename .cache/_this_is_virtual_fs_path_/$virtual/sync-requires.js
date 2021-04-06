
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/angel/projectes/gastby/mi-web-personal/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/home/angel/projectes/gastby/mi-web-personal/src/pages/404.js")),
  "component---src-pages-crypto-js": preferDefault(require("/home/angel/projectes/gastby/mi-web-personal/src/pages/crypto.js")),
  "component---src-pages-dev-js": preferDefault(require("/home/angel/projectes/gastby/mi-web-personal/src/pages/dev.js")),
  "component---src-pages-index-js": preferDefault(require("/home/angel/projectes/gastby/mi-web-personal/src/pages/index.js")),
  "component---src-pages-sport-js": preferDefault(require("/home/angel/projectes/gastby/mi-web-personal/src/pages/sport.js"))
}

