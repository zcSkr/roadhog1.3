import path from 'path';

const svgDirs = [
  require.resolve('antd-mobile').replace(/warn\.js$/, ''), // 1. 属于 antd-mobile 内置 svg 文件
  path.resolve(__dirname, 'src/assets'), // 2. 自己私人的 svg 存放目录
];

export default {
  "entry": "src/index.js",
  "publicPath": "/",
  "extraBabelPlugins": [
    "transform-runtime",
    "transform-decorators-legacy",
    "transform-class-properties",
    ["import", { "libraryName": "antd-mobile", "libraryDirectory": "es", "style": true }],
  ],
  "svgSpriteLoaderDirs": svgDirs,
  "env": {
    "development": {
      "extraBabelPlugins": [
        "dva-hmr"
      ]
    }
  },
  "disableCSSModules": false
}
