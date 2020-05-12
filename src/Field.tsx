/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import * as React from "react";
import "./Field.css";

export interface FieldProps {
	placeholder?: string;
	onChange: (value: string) => void;
}

export interface FieldState {
	value: string;
}

export class Field extends React.Component<FieldProps, FieldState> {

	public constructor(props: FieldProps) {

		super(props);

		this.state = {
			value: ""
		};

		this.handleOnChange = this.handleOnChange.bind(this);

	}

	private handleOnChange(event: React.ChangeEvent<HTMLInputElement>): void {
		this.props.onChange(event.target.value);
	}

	public render(): React.ReactElement {

		return (<div className={"Field"}>
			{this.props.children}
			<input
				onChange={this.handleOnChange}
				placeholder={this.props.placeholder}
				value={this.state.value}
			/>
		</div>);

	}
}