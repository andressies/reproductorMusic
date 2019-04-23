import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types"; // ES6

export class Footer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pause: true
		};

		this.clickplay = this.clickplay.bind(this);
		this.anterior = this.anterior.bind(this);
		this.siguiente = this.siguiente.bind(this);
	}

	clickplay() {
		this.setState({ pause: !this.state.pause });
		//this.props.onplay("aaa");
	}
	siguiente() {
		this.props.onplay(+1);
	}
	anterior() {
		this.props.onplay(-1);
	}
	render() {
		return (
			<nav id="play" className="navbar navbar-light bg-light">
				<div
					id="botones"
					className="btn-group"
					role="group"
					aria-label="Basic example">
					<button
						onClick={this.anterior}
						type="button"
						className="btn btn-secondary">
						<i className="fas fa-arrow-left" />
					</button>
					&nbsp;
					<button
						onClick={this.clickplay}
						type="button"
						className="btn btn-secondary">
						<i
							className={
								this.state.pause
									? "far fa-play-circle"
									: "far fa-pause-circle"
							}
						/>
					</button>
					&nbsp;
					<button
						onClick={this.siguiente}
						type="button"
						className="btn btn-secondary">
						<i className="fas fa-arrow-right" />
					</button>
				</div>
			</nav>
		);
	}
}
Footer.propTypes = {
	onplay: PropTypes.func
};
