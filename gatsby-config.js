var proxy = require("http-proxy-middleware");

// let activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development";
// require("dotenv").config({
// 	path: `.env.${activeEnv}`
// });
require("dotenv").config();

module.exports = {
	siteMetadata: {
		title: "Corp Site",
		description: "Corp Site Template",
		companyName: "Company Name",
		copyright: "© Company Name 2019",
		phone: "415.555.1212",
		phoneLink: "tel:+14155551212",
		address1: "1234 Main St.",
		address2: "San Francisco, CA 94105",
		socialLinks: {
			//Modify social links w/company-specific links
			instagram: "https://www.instagram.com/",
			twitter: "https://twitter.com/",
			facebook: "https://www.facebook.com/"
		},
		mapInfo: {
			googleMapsKey: process.env.GOOGLE_MAPS_KEY,
			mapCoordLat: process.env.MAP_COORD_LAT,
			mapCoordLng: process.env.MAP_COORD_LNG
		}
	},
	plugins: [
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-sass",
		{
			// keep as first gatsby-source-filesystem plugin for gatsby image support
			resolve: "gatsby-source-filesystem",
			options: {
				path: `${__dirname}/static/img`,
				name: "uploads"
			}
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				path: `${__dirname}/src/pages`,
				name: "pages"
			}
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: process.env.GOOGLE_ANALYTICS_ID
			}
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				path: `${__dirname}/src/img`,
				name: "images"
			}
		},
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		{
			resolve: "gatsby-transformer-remark",
			options: {
				plugins: [
					{
						resolve: "gatsby-remark-relative-images",
						options: {
							name: "uploads"
						}
					},
					{
						resolve: "gatsby-remark-images",
						options: {
							// It's important to specify the maxWidth (in pixels) of
							// the content container as this plugin uses this as the
							// base for generating different widths of each image.
							maxWidth: 2048
						}
					},
					{
						resolve: "gatsby-remark-copy-linked-files",
						options: {
							destinationDir: "static"
						}
					}
				]
			}
		},
		{
			resolve: "gatsby-plugin-netlify-cms",
			options: {
				modulePath: `${__dirname}/src/cms/cms.js`
			}
		},
		{
			resolve: "gatsby-plugin-purgecss", // purges all unused/unreferenced css rules
			options: {
				develop: true, // Activates purging in npm run develop
				purgeOnly: ["/all.sass"] // applies purging only on the bulma css file
			}
		}, // must be after other CSS plugins
		"gatsby-plugin-netlify" // make sure to keep it last in the array
	],
	// for avoiding CORS while developing Netlify Functions locally
	// read more: https://www.gatsbyjs.org/docs/api-proxy/#advanced-proxying
	developMiddleware: app => {
		app.use(
			"/.netlify/functions/",
			proxy({
				target: "http://localhost:9000",
				pathRewrite: {
					"/.netlify/functions/": ""
				}
			})
		);
	}
};
