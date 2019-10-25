import React, { Component } from 'react'

export default class extends Component {
    static getInitialProps ({ query: { id } }) {
        return { postId: id }
    }

    render () {
        console.log("Contents.render()");

        return (
            <div>
                <h1>Contents: {this.props.postId}</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
        )
    }
}
