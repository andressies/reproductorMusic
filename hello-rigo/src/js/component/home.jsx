import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import { Music } from "./part1.jsx";
import { Lista } from "./lista.jsx";
import { Footer } from "./footer.jsx";
const musicList = [
	{
		id: 1,
		category: "game",
		name: "Game Over",
		url: "data/mario/fx_gameover.wav"
	},
	{
		id: 2,
		category: "game",
		name: "Jump Super",
		url: "data/mario/fx_jump_super.wav"
	},
	{
		id: 3,
		category: "game",
		name: "Jump ",
		url: "data/mario/fx_jump_super.wav"
	},
	{
		id: 4,
		category: "game",
		name: "Jump ",
		url: "data/mario/fx_jump_super.wav"
	},
	{
		id: 5,
		category: "game",
		name: "Jump ",
		url: "data/mario/fx_jump_super.wav"
	},
	{
		id: 6,
		category: "game",
		name: "Jump ",
		url: "data/mario/fx_jump_super.wav"
	},
	{
		id: 7,
		category: "game",
		name: "Jump ",
		url: "data/mario/fx_jump_super.wav"
	},
	{
		id: 8,
		category: "game",
		name: "Jump ",
		url: "data/mario/fx_jump_super.wav"
	}
];
//create your first component
export class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			lista: musicList,
			itemselected: 0
		};

		this.playmusic = this.playmusic.bind(this);
	}
	playmusic(val) {
		this.setState({ itemselected: this.state.itemselected + val });
	}
	render() {
		return (
			<div className="text">
				<div id="header" className="text-center">
					<h1>Reproductor de musica</h1>
				</div>
				<Lista
					onplay={this.playmusic}
					lt={this.state.lista}
					selected={this.state.itemselected}
				/>

				<Footer onplay={this.playmusic} />
			</div>
		);
	}
}
