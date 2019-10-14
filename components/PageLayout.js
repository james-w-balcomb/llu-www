import React from 'react'
import PageFooter from "./PageFooter";
import PageHeadMeta from "./PageHeadMeta";
import PageHeaderNavigation from "./PageHeaderNavigation";

export default class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <React.Fragment>

                <PageHeadMeta
                    title={this.props.title}
                    description={this.props.description}
                />

                <PageHeaderNavigation />

                {this.props.children}

                <PageFooter />

            </React.Fragment>
        )
    }
}
