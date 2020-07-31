import React, {Component} from "react";
import './Layout.css'
import MenuToggle from "../../components/Navigation/MenuToggle/MenuToggle";
import Drawer from "../../components/Navigation/Drawer/Drawer";

class Layout extends Component {
	state = {
		menu: false
	}

	toggleMenuHandler = () => {
		this.setState({
			menu:!this.state.menu
		})
	}
	render() {
		return (
			<div className={'Layout'}>
				<main>
					<Drawer
						isOpen={this.state.menu}
					/>
					<MenuToggle
						onToggle={this.toggleMenuHandler}
						isOpen={this.state.menu}
					/>
					{this.props.children}
				</main>
			</div>
		)
	}
}
export default Layout