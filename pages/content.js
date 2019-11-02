import React from 'react';
import getConfig from 'next/config'
import fetch from 'isomorphic-unfetch'
import Page from '../components/Page'
import PageLayout from "../components/PageLayout";
import ContentTypeRaw from "../components/ContentTypeRaw";
import ContentTypeTable from "../components/ContentTypeTable";
import 'react-table/react-table.css';

const { publicRuntimeConfig } = getConfig();
const LLU_API_URL = publicRuntimeConfig.LLU_API_URL;

function ContentType({contentDocument}) {

    const contentType = contentDocument.contentType;

    if (contentType === "table") {
        console.log("ContentTypeTable");
        return <ContentTypeTable  contentDocument={contentDocument} />;
    }
    return <ContentTypeRaw  contentDocument={contentDocument} />;

}

class ContentPage extends Page {

    static async getInitialProps ({ query: { contentPagePath } }) {

        const res = await fetch(`${LLU_API_URL}/content/page-path/${contentPagePath}`);
        const json = await res.json();
        return { contentDocument: json }
    }

    render () {
        console.log("ContentPage.render()");

        return (
            <PageLayout title={this.props.contentDocument.contentPageTitle} description={this.props.contentDocument.contentPageDescription}>

                <div>
                    <h1 className="d-flex justify-content-center mt-5">
                        {this.props.contentDocument.contentPageTitle}
                    </h1>
                    <p className="d-flex justify-content-center mb-5">
                        {this.props.contentDocument.contentPageDescription}
                    </p>
                    <hr />
                </div>

                <ContentType contentDocument={this.props.contentDocument} />,

            </PageLayout>
        )
    }

}

export default ContentPage;
