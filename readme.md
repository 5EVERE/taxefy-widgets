# Taxefy Widget

Taxefy Widget is a lightweight widget built with Preact, designed for embedding on external websites. It includes Storybook for component development and Webpack for building.

## Getting Started

To start with development, install dependencies, run Storybook, and build the widget for deployment.

### Prerequisites

- **Node.js** (v14+ recommended)
- **npm**

### Installation

Install the dependencies:

```bash
npm install
```

### Running for Development

To work on the widget during development, follow these steps:

- **Run Storybook:** Storybook is used to view and develop widget components interactively.

```bash
  npm run storybook
```
Storybook will be accessible at [http://localhost:6006](http://localhost:6006), providing an isolated environment to develop and test components.

- **Run Webpack Dev Server (Optional):** If you want to use Webpack’s Dev Server for live reloading, add the following script to your `package.json`:
  
```bash
  webpack serve --config webpack.config.js
```
This command will start the Webpack Dev Server, enabling real-time updates as you modify the code. Access the widget locally for testing and development purposes.

### Building for Production

When you’re ready to deploy the widget, create a production build by running:

```bash
npm run build
```

This will generate optimized output files in the `dist/` directory, which are ready for deployment and embedding on external websites.

## Embedding the Widget

To integrate the Taxefy Widget into an external website, include the following HTML snippet:

```html
<script src="https://widget.taxefy.at/widget.js"></script>
<div id="react-widget"></div>
```

This script loads the widget from the specified URL and renders it within the `taxefy-widget` container on the host website.

## Configuration Options

You can customize the widget’s appearance and functionality by adding `data-*` attributes to the `div` element. For example:

```html
<div id="taxefy-widget" data-theme="dark" data-language="en"></div>
```
