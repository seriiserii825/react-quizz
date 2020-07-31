import React, {Component} from "react";
import './Layout.css'
import MenuToggle from "../../components/Navigation/MenuToggle/MenuToggle";

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