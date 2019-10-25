import React from 'react';
import fetch from 'isomorphic-unfetch'
import ReactTable from "react-table";
import getConfig from 'next/config'
import Page from "../components/Page";
import PageLayout from "../components/PageLayout";

const { publicRuntimeConfig } = getConfig();
const LLU_API_URL = publicRuntimeConfig.LLU_API_URL;

class Table extends Page {

    constructor(props) {
        super(props);
        this.state = {
        };
        this.checkColumns = this.checkColumns.bind(this);
        this.extractColumns = this.extractColumns.bind(this);
    }

    static async getInitialProps(context) {
        console.log("getInitialProps");
        console.log("context:");
        console.log(context);

        const { id } = context.query;
        const res = await fetch(`${LLU_API_URL}/api/tables/${id}`);

        console.log("res:");
        console.log(res);

        const table = await res.json();

        console.log("table:");
        console.log(table);

        return { table };

    }

    checkColumns(props) {
        // <ReactTable
        //     data={this.props.table.content}
        //     columns={this.checkColumns(this.props)}
        //     defaultPageSize = {this.props.table.content.length}
        //     pageSizeOptions = {[this.props.table.content.length, 10, 50, 100]}
        // />
        console.log("checkColumns");
        console.log("props:");
        console.log(props);

        const columns = [];
        const firstElement = props.table.content[0];

        for(let key in firstElement) {
            columns.push({Header: key, accessor:key});
        }

        return columns
    }

    extractColumns(content) {
        // <ReactTable
        //     data={this.props.table.content}
        //     columns={this.extractColumns(this.props.table.content)}
        //     defaultPageSize = {this.props.table.content.length}
        //     pageSizeOptions = {[this.props.table.content.length, 10, 50, 100]}
        // />
        console.log("extractColumns");
        console.log("content:");
        console.log(content);

        const columns = [];
        const firstElement = content[0];

        for(let key in firstElement) {
            if (!firstElement.hasOwnProperty(key)) continue;
            columns.push({Header: key, accessor:key});
        }

        return columns
    }

    render() {
        console.log("Table.render()");

        console.log("LLU_API_URL: " + LLU_API_URL);
        // console.log("props:");
        // console.log(props);
        console.log("this.props:");
        console.log(this.props);
        console.log("this.state:");
        console.log(this.state);

        const { table } = this.props;
        console.log("render - table:");
        console.log(table);

        return (
            <PageLayout title={this.props.table.title} description={this.props.table.description}>

                <div className="mr-5 ml-5">
                    <div>
                        <h3 className="d-flex justify-content-center mt-5">{this.props.table.title}</h3>
                        <p className="d-flex justify-content-center mb-5">{this.props.table.description}</p>
                    </div>
                    <ReactTable
                        data={this.props.table.content}
                        columns={this.extractColumns(this.props.table.content)}
                        defaultPageSize = {this.props.table.content.length}
                        pageSizeOptions = {[this.props.table.content.length, 10, 50, 100]}
                    />
                </div>

            </PageLayout>
        )
    }
}

export default Table;
