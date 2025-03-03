# tktk-blocks-template

This repository serves as a template for developing multiple custom Gutenberg blocks integrated with TailwindCSS. It provides a structured foundation to streamline the creation of custom blocks for block developers.

## Features

- **TailwindCSS Integration**
- **Custom Block Development**
- **Structured Template**

## Usage

Run the following in the terminal of your choice to create a new plugin using this template:

`npx @wordpress/create-block example-plugin --template @athletics/tktk-blocks-template`

The name of the plugin ( example-plugin in the example above) is used as both the name of the plugin and the name of the block being created. This is due to the current `@wordpress/create-block` tool expecting a single block per plugin.

## Development

To start developing your custom block, navigate to the plugin directory and run the following command:

`npm start`

This will start the development server and open a new tab in your browser with the block editor. You can now start developing your custom block.

### Adding New Blocks

To add a new block, run the following command in the plugin directory:

`npx run create-block`

Note: This command will create a new block in the plugin `src/blocks` directory. It will not create a new plugin. Be sure to change the namespace in the `create-block` command to match the plugin name.
