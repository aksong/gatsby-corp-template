import { graphql, useStaticQuery } from "gatsby";

const useMapInfo = () => {
	const { site } = useStaticQuery(
		graphql`
      query MAP_INFO_QUERY {
        site {
          siteMetadata {
            mapInfo {
              googleMapsKey
              mapCoordLat
              mapCoordLng
            }
          }
        }
      }
    `
	);
	return site.siteMetadata.mapInfo;
};

export default useMapInfo;
