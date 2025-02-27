const { join } = require('path');

module.exports = {
  defaultValues: {
    npmDevDependencies: [
      '@svgr/webpack',
      'url-loader',
      'tailwindcss',
      'autoprefixer',
      'postcss',
      '@wordpress/create-block',
      'tailwind-component-classes',
      '@wordpress/scripts@^26.18.0',
    ],
    customScripts: {
      'create-block':
        'cd ./src/blocks && npx @wordpress/create-block --no-plugin --template ../../lib/create-block --namespace tktk-blocks',
    },
  },
  pluginTemplatesPath: join(__dirname, 'templates'),
  blockTemplatesPath: join(__dirname, 'block-templates'),
  // assetsPath: join(__dirname, 'inner-template'),
};
