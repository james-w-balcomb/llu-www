import React from 'react'
import TagManager from 'react-gtm-module'

class Page extends React.Component {

    static async getInitialProps({req}) {

        return {
            lang: 'en' // add lang property to all pages, for accessibility
        }
    }

    componentDidMount() {
        console.log("Page.componentDidMount()");
        const data = {
            event: 'PageView',
            yourData: {
                someField: 'foo',
                otherField: 'bar'
            }
        };
        TagManager.dataLayer(data);
    }

}

export default Page;
