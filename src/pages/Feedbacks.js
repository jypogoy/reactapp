import React, { Component } from 'react'

export default class Feedbacks extends Component {

    componentWillMount() {
        this.props.changeTitle('Feedbacks');
    }

    render() {
        return (
        <div>
            Feedbacks here...
        </div>
        )
    }
}
