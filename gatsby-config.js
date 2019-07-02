require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Pictures and Paintings`,
    description: `Painting Art Store`
  },
  plugins: [
    `gatsby-plugin-stripe`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: ['Sku'],
        secretKey: process.env.STRIPE_SECRET_KEY,
        downloadFiles: true
      }
    },
    {
      resolve: `gatsby-plugin-stripe-checkout`,
      options: {
        async: true
      }
    }
  ]
}
