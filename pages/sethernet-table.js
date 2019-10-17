import SethernetLayout from '../components/SethernetMyLayout.js'
import fetch from 'isomorphic-unfetch'
import ReactTable from "react-table";
// import 'react-table/react-table.css';
import Head from 'next/head';
import React from "react";

const SethernetTable = props => (

    <SethernetLayout>
        <Head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/react-table/6.10.3/react-table.css" />
        </Head>
        <div className="mr-5 ml-5">
            <div >
                <h3 className="d-flex justify-content-center mt-5">{props.table.title}</h3>
                <p className="d-flex justify-content-center mb-5">{props.table.description}</p>
            </div>
            <ReactTable
                data={props.table.content}
                columns={checkcol(props)}
                defaultPageSize = {props.table.content.length}
                pageSizeOptions = {[props.table.content.length, 10, 50, 100]}
            />
        </div>
    </SethernetLayout>
)

function checkcol(props) {

    const columns = [];
    const firstElement = props.table.content[0];

    for(let key in firstElement) {
        columns.push({Header: key, accessor:key});
    }

    return columns
}

SethernetTable.getInitialProps = async function(context) {
    const { id } = context.query
    const res = await fetch(`http://localhost:3001/api/tables/${id}`)
    const table = await res.json()
    return { table }
}

export default SethernetTable