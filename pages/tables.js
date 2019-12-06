import React from 'react'
import Link from 'next/link'
import getConfig from 'next/config'
import fetch from 'isomorphic-unfetch'
import { ListGroup, ListGroupItem } from 'reactstrap';
import Page from '../components/Page.js'
import PageLayout from '../components/PageLayout.js'
import TagManager from 'react-gtm-module'

const { publicRuntimeConfig } = getConfig();
const LLU_API_URL = publicRuntimeConfig.LLU_API_URL;

class Tables extends Page {

    constructor(props) {
        super(props);
        this.state = {
        };

    }

    static async getInitialProps({req}) {
        const res = await fetch(`${LLU_API_URL}/api/tables`);
        const tables = await res.json();
        return { tables }
    }

    componentDidMount() {
        console.log("ResistorColorCodes.componentDidMount()");
        const tagManagerArgs = {
            event: 'PageView',
            yourData: {
                someField: 'foo',
                otherField: 'bar'
            },
            dataLayer: {
                userId: '001',
                userProject: 'project',
                page: 'tables'
            },
            dataLayerName: 'PageDataLayer'
        };
        console.log("tagManagerArgs");
        console.log(tagManagerArgs);
        TagManager.dataLayer(tagManagerArgs);
    }

    render() {
        console.log("LLU_API_URL: " + LLU_API_URL);
        // console.log("props:");
        // console.log(props);
        console.log("this.props:");
        console.log(this.props);
        console.log("this.state:");
        console.log(this.state);

        return(
            <PageLayout title={"LLU: Tables"} description={"All the tables on the Little Look-Up"}>

                <h2>Table List</h2>
                <ListGroup>
                    {this.props.tables.map(table => (
                        <ListGroupItem key={table._id}>
                            <Link href={`/table?id=${table._id}`} as={`/sethernet-table/${table._id}`}>
                                <a>{table.title}</a>
                            </Link>
                        </ListGroupItem>
                    ))}
                </ListGroup>

            </PageLayout>
        )
    }
}

export default Tables;
