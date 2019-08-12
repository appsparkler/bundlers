const DEVELOPMENT = {
  OUTPUT_PATH: "dist/dev",
  HTML_PLUGIN: {
    "template": "./index.html",
    "title": "Webpack & Rollup Bundle Integration"
  }
};

const PRODUCTION = {
  OUTPUT_PATH: "dist/prod",
  HTML_PLUGIN: {
    "template": "./index.html",
    "title": "Webpack & Rollup Bundle Integration"
  }
};


exports.default = process.env.NODE_ENV === 'development' ?
  DEVELOPMENT :
  PRODUCTION;
