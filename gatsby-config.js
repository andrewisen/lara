module.exports = {
    siteMetadata: {
        title: "Lara",
    },
    pathPrefix: `/lara`,
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/`,
            },
        },
        /**
         * Generic SASS plugin
         */
        "gatsby-plugin-sass",
        /**
         * Image and Media plugins
         */
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
    ],
};
