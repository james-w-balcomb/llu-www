import React from "react";
import getConfig from 'next/config'
import fetch from 'isomorphic-unfetch'
import { Container } from 'reactstrap';

const { publicRuntimeConfig } = getConfig();
const LLU_API_URL = publicRuntimeConfig.LLU_API_URL;

class ViewContentDocument extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            contentDocument: {
                contentDocumentUuid: "",
                contentPagePath: "",
                contentPageTitle: "",
                contentPageDescription: "",
                contentType: "",
                contentCategory: "",
                contentKeywords: "",
                contentSearchTerms: "",
                contentTags: [],
                contentRelatedContent: "",
                contentDateAdded: "",
                contentDateEdited: "",
                contentDatePublished: "",
                contentDateRedacted: "",
                contentDateDeleted: "",
                contentContent: "",
                isDeleted: ""
            }
        };
    }

    static getInitialProps({query}) {
        return {query}
    }

    // componentDidMount() {
    //     console.log("componentDidMount");
    //     console.log(this.props.url.params.id);
    //     fetch(`${LLU_API_URL}/content/page-path/${this.props.url.params.id}`)
    //         .then(response => response.json())
    //         .then(result => {
    //             this.setState({ contentDocument: result });
    //             console.log(this.state.contentDocument)
    //         })
    //         .catch(console.log)
    // }

    render() {
        console.log("ViewContentDocument.render()");
        // console.log("props");
        // console.log(props);
        console.log("this.props");
        console.log(this.props);
        console.log("this.state");
        console.log(this.state);

        return (

            <Container>

                <h1>this.props.match.params.id</h1>
                <div>
                    Document ID:
                    {this.state.contentDocument.contentDocumentUuid}
                </div>
                <div>
                    Is Deleted:
                    {this.state.contentDocument.isDeleted}
                </div>
                <div>
                    Page Title:
                    {this.state.contentDocument.contentPageTitle}
                </div>
                <div>
                    Page Path:
                    {this.state.contentDocument.contentPagePath}
                </div>
                <div>
                    Type:
                    {this.state.contentDocument.contentType}
                </div>
                <div>
                    Category:
                    {this.state.contentDocument.contentCategory}
                </div>
                <div>
                    Keywords:
                    {this.state.contentDocument.contentKeywords}
                </div>
                <div>
                    Search Terms:
                    {this.state.contentDocument.contentSearchTerms}
                </div>
                <div>
                    Tags:
                    {this.state.contentDocument.contentTags}
                </div>
                <div>
                    Related Content:
                    {this.state.contentDocument.contentRelatedContent}
                </div>
                <div>
                    Date Added:
                    {this.state.contentDocument.contentDateAdded}
                </div>
                <div>
                    Date Edited:
                    {this.state.contentDocument.contentDateEdited}
                </div>
                <div>
                    Date Published:
                    {this.state.contentDocument.contentDatePublished}
                </div>
                <div>
                    Date Redacted:
                    {this.state.contentDocument.contentDateRedacted}
                </div>
                <div>
                    Date Deleted:
                    {this.state.contentDocument.contentDateDeleted}
                </div>
                <div>
                    Content:
                    {this.state.contentDocument.contentContent}
                </div>

            </Container>

        )
    }
}

export default ViewContentDocument;
