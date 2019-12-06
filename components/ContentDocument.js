import React from 'react';
import TagManager from 'react-gtm-module'

class ContentDocument extends React.Component {

    constructor(props) {
        super(props);
        this.extractColumns = this.extractColumns.bind(this);
    }

    componentDidMount() {
        console.log("ContentDocument.componentDidMount()");
        const tagManagerArgs = {
            dataLayer: {
                userId: '001',
                userProject: 'project',
                page: 'home'
            },
            dataLayerName: 'PageDataLayer'
        };
        TagManager.dataLayer(tagManagerArgs);
    }

    render() {

        return (
            <React.Fragment>



            </React.Fragment>
        )
    }
}

export default ContentDocument;
