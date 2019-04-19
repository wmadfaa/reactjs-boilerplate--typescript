const path = require("path");
const webpack = require("react-scripts/config/webpack.config.js");

module.exports = {
  serverPort: 4200,
  usageMode: "expand",
  pagePerSection: true,
  exampleMode: "expand",
  webpackConfig: webpack,
  require: [path.join(__dirname, "styleguide.scss")],
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, ".tsx");
    return `import ${name} from 'components/${name}/${name}';`;
  },
  components: path.resolve(__dirname, `./src/components/**/[A-Z]*.tsx`),
  styleguideComponents: {
    Wrapper: path.resolve(__dirname, `src/configs/Wrapper.tsx`)
  },
  template: {
    head: {}
  },
  theme: {
    fontFamily: {
      base: '"Open Sans", sans-serif'
    }
  },
  styles: {
    Playground: {
      preview: {
        paddingLeft: 10,
        paddingRight: 10,
        borderWidth: [[0, 0, 1, 0]],
        borderRadius: 0,
        background: "#fff"
      }
    }
  },
  dangerouslyUpdateWebpackConfig(webpackConfig, env) {
    webpackConfig.output = {
      ...webpackConfig.output,
      publicPath: process.env.PUBLIC_URL || ""
    };
    return webpackConfig;
  }
};
