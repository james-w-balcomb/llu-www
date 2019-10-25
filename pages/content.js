import React from 'react';
import getConfig from 'next/config'
import fetch from 'isomorphic-unfetch'
import Page from '../components/Page'
import PageLayout from "../components/PageLayout";

const { publicRuntimeConfig } = getConfig();
const LLU_API_URL = publicRuntimeConfig.LLU_API_URL;

class ContentPage extends Page {

    static async getInitialProps (context) {
        console.log("ContentPage.getInitialProps()");

        console.log("context:");
        console.log(context);
        console.log("context.asPath:");
        console.log(context.asPath);
        console.log("context.pathname:");
        console.log(context.pathname);

        console.log("context.query:");
        console.log(context.query);
        console.log("context.query.id:");
        console.log(context.query.id);
        console.log("context.query.path:");
        console.log(context.query.path);
        console.log("context.query.contentPagePath:");
        console.log(context.query.contentPagePath);

        // console.log("query:");
        // console.log(query);
        // console.log("contentPagePath:");
        // console.log(contentPagePath);

        // return { path: context.query.path };

        const res = await fetch(`${LLU_API_URL}/content/page-path/${context.query.contentPagePath}`);
        console.log("res:");
        console.log(res);

        const json = await res.json();
        console.log("json:");
        console.log(json);

        return { contentDocument: json }
    }

    render () {
        console.log("ContentPage.render()");

        console.log("LLU_API_URL: " + LLU_API_URL);
        // console.log("props:");
        // console.log(props);
        console.log("this.props:");
        console.log(this.props);
        console.log("this.state:");
        console.log(this.state);

        return (
            <PageLayout title={this.props.contentDocument.contentPageTitle} description={this.props.contentDocument.contentPageDescription}>

                <h1>{this.props.contentDocument.contentPageTitle}</h1>
                <h3>{this.props.contentDocument.contentPagePath}</h3>
                <p>
                    {this.props.contentDocument.contentPageDescription}
                </p>

            </PageLayout>
        )
    }

}

export default ContentPage;
