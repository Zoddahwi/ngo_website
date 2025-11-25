const path = require('path');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Disable ESLint plugin completely during development
      if (process.env.NODE_ENV === 'development') {
        webpackConfig.plugins = webpackConfig.plugins.filter(
          plugin => !(plugin.constructor.name === 'ESLintWebpackPlugin')
        );
      }
      
      // Override babel-loader to avoid the plugin issues
      const oneOfRule = webpackConfig.module.rules.find(rule => rule.oneOf);
      if (oneOfRule) {
        const jsRule = oneOfRule.oneOf.find(
          rule => rule.test && rule.test.toString().includes('jsx?')
        );
        if (jsRule && jsRule.use) {
          const babelLoader = jsRule.use.find(
            loader => loader.loader && loader.loader.includes('babel-loader')
          );
          if (babelLoader && babelLoader.options) {
            // Override presets to avoid the problematic plugin
            babelLoader.options.presets = [
              [require.resolve('@babel/preset-env'), { 
                targets: { browsers: ['last 2 versions'] }
              }],
              [require.resolve('@babel/preset-react'), { 
                runtime: 'automatic'
              }]
            ];
            // Clear plugins to avoid conflicts
            babelLoader.options.plugins = [];
          }
        }
      }
      
      return webpackConfig;
    }
  },
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
};