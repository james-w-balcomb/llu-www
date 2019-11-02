import React from 'react';
import ReactTable from "react-table";
import "../static/css/table-styles.css";
import 'react-table/react-table.css';

class ContentTypeTable extends React.Component {

    constructor(props) {
        super(props);
        this.extractColumns = this.extractColumns.bind(this);
    }

    extractColumns(content) {
        const columns = [];
        const firstElement = content[0];

        for(let key in firstElement) {
            if (!firstElement.hasOwnProperty(key)) continue;
            columns.push({Header: key, accessor:key});
        }

        return columns
    }

    render() {

        return (
            <React.Fragment>
                {this.props.children}
                <div className="mr-5 ml-5">
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
