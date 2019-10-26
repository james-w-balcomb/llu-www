import React from 'react';

class ContentTypeRaw extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log("ContentTypeRaw.render()");

        return (
            <React.Fragment>

                <p>
                    Content Type: raw
                </p>

                <hr />

                {this.props.children}

            </React.Fragment>
        )
    }
}

export default ContentTypeRaw;
