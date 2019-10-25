import React from 'react';
import getConfig from 'next/config'
import fetch from 'isomorphic-unfetch'
import Page from '../components/Page'
import PageLayout from "../components/PageLayout";

const { publicRuntimeConfig } = getConfig();
const LLU_API_URL = publicRuntimeConfig.LLU_API_URL;

class ContentPage extends Page {

    static async getInitialProps ({ query: { contentPagePath } }) {
        console.log("ContentPage.getInitialProps()");
        // console.log("context:");
        // console.log(context);
        // console.log("context.asPath:");
        // console.log(context.asPath);
        // console.log("context.pathname:");
        // console.log(context.pathname);
        // console.log("context.query:");
        // console.log(context.query);
        // console.log("query:");
        // console.log(query);

        // console.log("contentPagePath:");
        // console.log(contentPagePath);

        const res = await fetch(`${LLU_API_URL}/content/page-path/${contentPagePath}`);

        // console.log("res:");
        // console.log(res);

        const json = await res.json();

        // console.log("json:");
        // console.log(json);

        return { contentDocument: json }
    }

    render () {
        console.log("ContentPage.render()");

        // console.log("props:");
        // console.log(props);
        // console.log("this.props:");
        // console.log(this.props);
        // console.log("this.state:");
        // console.log(this.state);

        // console.log("LLU_API_URL: " + LLU_API_URL);

        return (
            <PageLayout title={this.props.contentDocument.contentPageTitle} description={this.props.contentDocument.contentPageDescription}>

                <div>
                    <h1>
                        {this.props.contentDocument.contentPageTitle}
                    </h1>
                    <h3>
                        {this.props.contentDocument.contentPagePath}
                    </h3>
                    <p>
                        {this.props.contentDocument.contentPageDescription}
                    </p>
                    <p>
                        {this.props.contentDocument.contentContent}
                    </p>
                </div>

            </PageLayout>
        )
    }

}

export default ContentPage;
