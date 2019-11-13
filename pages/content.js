import React from 'react';
import getConfig from 'next/config'
import fetch from 'isomorphic-unfetch'
import Page from '../components/Page'
import PageLayout from "../components/PageLayout";
import ContentTypeRaw from "../components/ContentTypeRaw";
import ContentTypeTable from "../components/ContentTypeTable";

const { publicRuntimeConfig } = getConfig();
const LLU_API_URL = publicRuntimeConfig.LLU_API_URL;

function ContentType({contentDocument}) {
    console.log("ContentPage.ContentType({contentDocument})");

    const contentType = contentDocument.contentType;

    if (contentType === "table") {
        console.log("contentType: table");
        return <ContentTypeTable  contentDocument={contentDocument} />;
    }
    console.log("contentType: raw");
    return <ContentTypeRaw  contentDocument={contentDocument} />;
}

class ContentPage extends Page {

    static async getInitialProps ({ query: { contentPagePath } }) {
        console.log("ContentPage.getInitialProps ({ query: { contentPagePath } })");

        const res = await fetch(`${LLU_API_URL}/content/page-path/${contentPagePath}`);
        const json = await res.json();

        return { contentDocument: json }
    }

    render () {
        console.log("ContentPage.render()");

        return (
            <PageLayout
                title={this.props.contentDocument.contentPageTitle}
                description={this.props.contentDocument.contentPageDescription}
            >

                <ContentType contentDocument={this.props.contentDocument} />

            </PageLayout>
        )
    }

}

export default ContentPage;