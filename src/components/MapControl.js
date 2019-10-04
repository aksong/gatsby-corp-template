import React from "react";
import { compose, withProps } from "recompose";
import {
	withScriptjs,
	withGoogleMap,
	GoogleMap,
	Marker
} from "react-google-maps";

const MapControl = props => {
	const { googleMapsKey, ...others } = props;
	return (
		<InnerMapControl
			googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${props.googleMapsKey}&v=3.exp&libraries=geometry,drawing`}
			{...others}
		/>
	);
};

const InnerMapControl = compose(
	withProps({
		loadingElement: <div style={{ height: "100%" }} />,
		containerElement: <div style={{ height: 400 }} />,
		mapElement: <div style={{ height: "100%" }} />
	}),
	withScriptjs,
	withGoogleMap
)(props => (
	<GoogleMap defaultZoom={props.defaultZoom} defaultCenter={props.coords}>
		{props.isMarkerShown && (
			<Marker position={props.coords} animation={props.animation} />
		)}
	</GoogleMap>
));

export default MapControl;
