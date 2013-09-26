Package.describe({
  summary: "support for sibilant: javascript with a lisp"
});

Package._transitional_registerBuildPlugin({
  name: "sibilant",
  use: [],
  sources: ['sibilant.js'],
  npmDependencies: {
    "sibilant": "0.1.5"
  }
});

Package.on_use(function (api) {
});
