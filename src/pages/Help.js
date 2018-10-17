import React, { Component } from 'react'

export default class Help extends Component {

    componentWillMount() {
        this.props.changeTitle('Help');
    }

    render() {
        return (
        <div>
            Help content here...
        </div>
        )
    }
}
