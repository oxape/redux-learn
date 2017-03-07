/**
 * Created by oxape on 2017/3/7.
 */
import React, { PropTypes, Component } from 'react'
import AppBar from 'material-ui/AppBar';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Popover from 'material-ui/Popover'

class Picker extends Component{
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            anchorOrigin: {
                horizontal: 'right',
                vertical: 'bottom',
            },
            targetOrigin: {
                horizontal: 'right',
                vertical: 'bottom',
            },
        };
    }

    render() {
        const {value, onChange, options} = this.props
        return (
            <div>
                <AppBar
                    title={value}
                    onLeftIconButtonTouchTap={() => {this.setState({
                        open:!this.state.open
                    })}}
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                >
                    <Popover
                        open={this.state.open}
                        anchorEl={this.state.anchorEl}
                        anchorOrigin={this.state.anchorOrigin}
                        targetOrigin={this.state.targetOrigin}
                        onRequestClose={this.handleRequestClose}
                    >
                        <Menu onItemTouchTap={
                            (e, item, index) => {
                                console.log(index)
                                onChange(options[index])
                                this.setState({...this.state, open:!this.state.open})
                            }
                        }>
                            {
                                options.map((option) => (
                                    <MenuItem primaryText={option} key={option}/>
                                ))
                            }
                        </Menu>
                    </Popover>
                </AppBar>
            </div>
        )
    }
}

Picker.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired
}

export default Picker