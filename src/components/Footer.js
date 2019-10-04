import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import useSiteMetadata from "./SiteMetadata";
import useSocialLinksData from "./SocialLinks";

import instagramSvg from "../img/social/instagram.svg";
import twitterSvg from "../img/social/twitter.svg";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

const Footer = () => {
	const { copyright, phone, phoneLink, address1, address2 } = useSiteMetadata();
	const { twitter, facebook, instagram } = useSocialLinksData();
	return (
		<footer className="footer has-background-black has-text-white-ter">
			<div className="container section">
				<div className="columns">
					<div className="column is-6">
						<div>
							<a className="has-text-white-ter" href="/legal">
								legal
							</a>
						</div>
						<div>
							<a className="has-text-white-ter" href="/terms-of-use">
								terms of use
							</a>
						</div>
						<div>
							<a className="has-text-white-ter" href="/privacy">
								privacy
							</a>
						</div>
					</div>
					<div className="column is-4 social">
						<a title="twitter" href={twitter}>
							<img className="fas fa-lg" src={twitterSvg} alt="Twitter" style={{ width: ".8em", height: ".8em" }} />
						</a>
						<a title="facebook" href={facebook}>
							<FontAwesomeIcon
								icon={["fab", "facebook-f"]}
								color="#000"
								style={{ width: "1.1em", height: "1.1em" }}
								alt="facebook"
							/>
						</a>
						<a title="instagram" href={instagram}>
							<img src={instagramSvg} alt="Instagram" style={{ width: "1em", height: "1em" }} />
						</a>
					</div>
				</div>
				<div>
					<div className="footer-copyright">{copyright}</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
