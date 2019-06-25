const description = require('./content/aboutMe').join(' ')

module.exports = {
  siteMetadata: {
    title: `Joel.Software`,
    author: `Joel Bowen`,
    description,
    siteUrl: `https://joel.software`,
    social: {
      twitter: `JoelSocialized`,
      linkedin: `joelbowen`,
      instagram: `joelbowen`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1024,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `joelbowen`,
      },
    },
    {
      resolve: `gatsby-source-iubenda`,
      options: {
        documentIds: [`72446042`],
      },
    },
    {
      resolve: 'gatsby-plugin-iubenda-cookie-footer',
      options: {
        iubendaOptions: {
          lang: 'en',
          siteId: 1617210,
          cookiePolicyId: 72446042,
          banner: {
            position: 'float-bottom-left',
            textColor: 'black',
            backgroundColor: 'white',
          },
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-5050280-8`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Joel.Software`,
        short_name: `Joel.Software`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#30395F`,
        display: `minimal-ui`,
        icon: `content/assets/profile-pic.jpg`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: ['@weknow/gatsby-remark-twitter'],
      },
    },
    `gatsby-plugin-emotion`,
  ],
}
