import React from 'react'
import PageHeaderNavigation from "./PageHeaderNavigation";

class PageHeader extends React.Component {

    render() {
        return (
            <React.Fragment>

                <p>START: PageHeader.js</p>

                <PageHeaderNavigation />

                <p>END: PageHeader.js</p>

            </React.Fragment>
        )
    }
}

export default PageHeader;
