// import "dotenv/config";

const config = {
	GOOGLE_MAPS_KEY: process.env.GOOGLE_MAPS_KEY
		? process.env.GOOGLE_MAPS_KEY
		: "invalid key"
};

export default config;
