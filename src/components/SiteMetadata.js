import { graphql, useStaticQuery } from "gatsby";

const useSiteMetadata = () => {
	const { site } = useStaticQuery(
		graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            companyName
            title
            description
            copyright
            phone
            phoneLink
            address1
            address2
          }
        }
      }
    `
	);
	return site.siteMetadata;
};

export default useSiteMetadata;
