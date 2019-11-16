import React from 'react';

class ContentTypeRaw extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log("ContentTypeRaw.render()");

        return (
            <React.Fragment>

                <div className="mr-5 ml-5">
                    <div>
                        <h3 className="d-flex justify-content-center mt-5">
                            {this.props.contentDocument.contentPageTitle}
                        </h3>
                        <p className="d-flex justify-content-center mb-5">
                            {this.props.contentDocument.contentPageDescription}
                        </p>
                    </div>
                    <div>
                        <p className="d-flex justify-content-center mb-5">
                            {this.props.contentDocument.contentContent}
                        </p>
                    </div>
                </div>

                <hr />

                {this.props.children}

            </React.Fragment>
        )
    }
}

export default ContentTypeRaw;
