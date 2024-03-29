module.exports = {
  siteMetadata: {
    title: `Joel.Software`,
    author: `Joel Bowen`,
    description:
      'A Principal Architect and Engineer with 15 years of experience creating products at scale in various industries.',
    siteUrl: `https://joel.software`,
    social: {
      twitter: `joeldotsoftware`,
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
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/sections`,
        name: `sections`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/work`,
        name: `work`,
        defaultLayouts: {
          default: require.resolve('./src/components/Layout.js'),
        },
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-embed-youtube',
            options: {
              width: 800,
              height: 400,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1440,
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
          '@weknow/gatsby-remark-twitter',
        ],
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
    `gatsby-plugin-image`,
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
        icon: `content/assets/favicon.png`,
      },
    },
    `gatsby-plugin-remove-serviceworker`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-use-dark-mode`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /content\/assets\/illustrations/,
        },
      },
    },
  ],
}
