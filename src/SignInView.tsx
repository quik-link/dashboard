/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";
import {Field} from "./Field";
import {Email as EmailIcon, VpnKey as KeyIcon} from "@material-ui/icons";

export interface SignInViewProps {

}

export interface SignInViewState {
	email: string;
	password: string;
}

export class SignInView extends React.Component<SignInViewProps, SignInViewState> {

	public constructor(props: SignInViewProps) {

		super(props);
		this.state = {
			email: "",
			password: ""
		};

		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);

	}

	private handleEmailChange(value: string): void {
		this.setState({email: value});
	}

	private handlePasswordChange(value: string): void {
		this.setState({password: value});
	}

	public render(): React.ReactElement {

		return (<div className={"SignInView"}>
			<div className={"container"}>
				<h1>quiklink</h1>
				<Field onChange={this.handleEmailChange} placeholder={"email"}><EmailIcon/></Field>
				<Field onChange={this.handlePasswordChange} placeholder={"password"}><KeyIcon/></Field>
				<button>Sign In</button>
			</div>
		</div>);

	}
}