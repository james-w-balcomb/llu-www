import React from 'react'
import getConfig from 'next/config'
import fetch from 'isomorphic-unfetch'
import {
    Container,
    Row,
    Col,
    CardColumns,
    Card,
    CardTitle,
    CardBody,
    CardText,
    CardLink } from 'reactstrap';
import "../static/css/card-styles.css";

const { publicRuntimeConfig } = getConfig();
const LLU_API_URL = publicRuntimeConfig.LLU_API_URL;

class ContentCardsData extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            contentDocuments: [
                {
                    contentPagePath: "",
                    contentPageTitle: "",
                    contentPageDescription: ""
                }
            ]
        };
    }

    componentDidMount() {
        console.log("ContentCardsData.componentDidMount()");
        fetch(`${LLU_API_URL}/page-path-title-description-list`)
            .then(res => res.json())
            .then((data) => {
                this.setState({ contentDocuments: data });
                console.log(this.state.contentDocuments)
            })
            .catch(console.log)
    }

    render() {
        console.log("ContentCardsData.render()");

        return(

            <Container fluid>
                <Row>
                    <Col>
                        <CardColumns>
                            {this.state.contentDocuments.map(contentDocument => (
                                <Card key={contentDocument.contentPagePath}>
                                    <CardBody>
                                        <CardTitle className="h5 mb-2 pt-2 font-weight-bold">
                                            <CardLink href={`/content/${contentDocument.contentPagePath}`} className="btn btn-dark btn-block">
                                                {contentDocument.contentPageTitle}
                                            </CardLink>
                                        </CardTitle>
                                        <CardText className="mb-4"> {contentDocument.contentPageDescription}</CardText>
                                    </CardBody>
                                </Card>
                            ))}
                        </CardColumns>
                    </Col>
                </Row>
            </Container>

        )
    }
}

export default ContentCardsData;
