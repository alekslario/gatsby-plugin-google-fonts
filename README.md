# gatsby-plugin-google-fonts-with-attributes

This is a fork of didierfranc/gatsby-plugin-google-fonts + an option to set custom attributes.

## How to use it ?

```js
yarn add gatsby-plugin-google-fonts-with-attributes
// or
npm i gatsby-plugin-google-fonts-with-attributes
```

Add some fonts to your `gatsby-config.js`:

```js
module.exports = {
  siteMetadata: {
    title: `I like Google fonts`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `limelight`,
          `source sans pro\:300,400,400i,700`, // you can also specify font weights and styles
        ],
        display: "swap",
        attributes: {
          rel: "stylesheet preload prefetch",
        },
      },
    },
  ],
};
```

## How to find great ideas ?

- https://fonts.google.com
