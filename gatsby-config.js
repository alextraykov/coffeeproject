module.exports = {
  siteMetadata: {
    title: `Coffee Project`,
    description: `For all things coffee. By Alexander Traykov`,
    author: `@alextraykov`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    `gatsby-plugin-styled-components`,
  ],
  pathPrefix: "/coffeeproject",
};
