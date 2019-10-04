import React from "react";
import { navigate } from "gatsby-link";
import Layout from "../../components/Layout";

function encode(data) {
	return Object.keys(data)
		.map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
		.join("&");
}

export default class Index extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: "",
			lastName: "",
			phone: "",
			email: "",
			message: "",
			isValidated: false,
			isSubmitted: false,
			errors: {}
		};
	}

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleSubmit = e => {
		e.preventDefault();
		this.setState({ isSubmitted: true });
		const form = e.target;
		if (this.isValid() === true) {
			const { firstName, lastName, email, phone, message } = this.state;
			fetch("/", {
				method: "POST",
				headers: { "Content-Type": "application/x-www-form-urlencoded" },
				body: encode({
					"form-name": form.getAttribute("name"),
					firstName,
					lastName,
					email,
					phone,
					message
				})
			})
				.then(() => navigate(form.getAttribute("action")))
				.catch(error => alert(error));
		}
	};

	isValid = () => {
		const required = ["firstName", "lastName", "email", "phone", "message"];
		let errors = {};
		let hasErrors = false;
		const ctrl = this;
		required.map(f => {
			if (!this.state[f] || this.state[f] === "") {
				errors[f] = "required";
				if (!hasErrors) {
					eval(`ctrl.${f}.focus()`);
				}

				hasErrors = true;
			} else {
				delete errors[f];
			}
		});
		this.setState({ errors });
		console.log("isValid", !hasErrors, errors);
		return !hasErrors;
	};

	render() {
		const { isSubmitted, errors, firstName, lastName, email, phone, message } = this.state;

		return (
			<Layout>
				<section className="section section--gradient">
					<section className="section section--gradient">
						<div className="container">
							<div className="content">
								Explain things here.
								<form
									name="order"
									method="post"
									action="/order/thanks/"
									data-netlify="true"
									data-netlify-honeypot="bot-field"
									onSubmit={this.handleSubmit}
								>
									{/* The `form-name` hidden field is required to support form submissions without JavaScript */}
									<input type="hidden" name="form-name" value="order" />
									<div hidden>
										<label>
											Don’t fill this out: <input name="bot-field" onChange={this.handleChange} />
										</label>
									</div>
									<div className="columns">
										<div className="field column">
											<p className="help is-pulled-right is-danger">{errors["firstName"]}</p>
											<label className="label" htmlFor={"firstName"}>
												First Name
											</label>
											<div className="control">
												<input
													className={"input" + (isSubmitted && errors["firstName"] ? " is-danger" : "")}
													type={"text"}
													ref={ref => (this.firstName = ref)}
													value={firstName}
													name={"firstName"}
													placeholder="First Name"
													onChange={this.handleChange}
													id={"firstName"}
												/>
											</div>
										</div>
										<div className="field column">
											<p className="help is-pulled-right is-danger">{errors["lastName"]}</p>
											<label className="label" htmlFor={"lastName"}>
												Last Name
											</label>
											<div className="control">
												<input
													className={"input" + (isSubmitted && errors["lastName"] ? " is-danger" : "")}
													ref={ref => (this.lastName = ref)}
													type={"text"}
													name={"lastName"}
													placeholder="Last Name"
													onChange={this.handleChange}
													id={"lastName"}
													value={lastName}
												/>
											</div>
										</div>
									</div>

									<div className="field">
										<p className="help is-pulled-right is-danger">{errors["email"]}</p>
										<label className="label" htmlFor={"email"}>
											Email
										</label>
										<div className="control">
											<input
												className={"input" + (isSubmitted && errors["email"] ? " is-danger" : "")}
												ref={ref => (this.email = ref)}
												type={"email"}
												name={"email"}
												onChange={this.handleChange}
												id={"email"}
												value={email}
											/>
										</div>
									</div>

									<div className="field">
										<p className="help is-pulled-right is-danger">{errors["phone"]}</p>
										<label className="label" htmlFor={"phone"}>
											Phone
										</label>
										<div className="control">
											<input
												className={"input" + (isSubmitted && errors["phone"] ? " is-danger" : "")}
												ref={ref => (this.phone = ref)}
												type={"text"}
												name={"phone"}
												placeholder="###-###-####"
												maxLength={10}
												onChange={this.handleChange}
												id={"phone"}
												value={phone}
											/>
										</div>
									</div>

									<div className="field">
										<span className="help is-pulled-right is-danger">{errors["message"]}</span>
										<label className="label" htmlFor={"message"}>
											Message
										</label>
										<div className="control">
											<textarea
												className={"textarea" + (isSubmitted && errors["message"] ? " is-danger" : "")}
												ref={ref => (this.message = ref)}
												name={"message"}
												onChange={this.handleChange}
												id={"message"}
												value={message}
											/>
										</div>
									</div>
									<div className="field">
										<button className="button is-link" type="submit">
											Send
										</button>
									</div>
								</form>
							</div>
						</div>
					</section>
				</section>
			</Layout>
		);
	}
}
