import { graphql, useStaticQuery } from "gatsby";

const useSocialLinksData = () => {
	const { site } = useStaticQuery(
		graphql`
      query SOCIAL_LINKS_QUERY {
        site {
          siteMetadata {
            socialLinks {
              twitter
              facebook
              instagram
            }
          }
        }
      }
    `
	);
	return site.siteMetadata.socialLinks;
};

export default useSocialLinksData;
