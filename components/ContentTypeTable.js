import React from 'react';
import ReactTable from "react-table";
import "../static/table-styles.css"

class ContentTypeTable extends React.Component {

    constructor(props) {
        super(props);
        this.extractColumns = this.extractColumns.bind(this);
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
        console.log("ContentTypeTable.render()");

        // console.log("props:");
        // console.log(props);
        console.log("this.props:");
        console.log(this.props);
        // console.log("this.state:");
        // console.log(this.state);

        return (
            <React.Fragment>

                <p>
                    Content Type: table
                </p>

                <hr />

                {this.props.children}

                <hr />

                <div className="mr-5 ml-5">
                    <div>
                        <h3 className="d-flex justify-content-center mt-5">
                            {this.props.contentDocument.contentTitle}
                        </h3>
                        <p className="d-flex justify-content-center mb-5">
                            {this.props.contentDocument.contentDescription}
                        </p>
                    </div>

                    <ReactTable
                        data={this.props.contentDocument.contentContent.table}
                        columns={this.extractColumns(this.props.contentDocument.contentContent.table)}
                        defaultPageSize = {this.props.contentDocument.contentContent.table.length}
                        pageSizeOptions = {[this.props.contentDocument.contentContent.table.length, 10, 50, 100]}
                        className="-striped -highlight"
                    />

                </div>

            </React.Fragment>
        )
    }
}

export default ContentTypeTable;
