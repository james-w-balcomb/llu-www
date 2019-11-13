import React from 'react';
import ReactTable from "react-table";

class ContentTypeTable extends React.Component {

    constructor(props) {
        super(props);
        this.extractColumns = this.extractColumns.bind(this);
    }

    extractColumns(content) {
        console.log("ContentTypeTable.extractColumns(content)");

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

        return (
            <React.Fragment>

                <div className="mr-5 ml-5">

                    <div>
                        <h3 className="d-flex justify-content-center mt-5">
                            {this.props.contentDocument.contentPageTitle}
                        </h3>
                        <p className="d-flex justify-content-center mb-5">
                            {this.props.contentDocument.contentPageDescription}
                        </p>
                    </div>

                    <ReactTable
                        data={this.props.contentDocument.contentContent.table}
                        columns={this.extractColumns(this.props.contentDocument.contentContent.table)}
                        defaultPageSize = {this.props.contentDocument.contentContent.table.length}
                        pageSizeOptions = {[this.props.contentDocument.contentContent.table.length, 10, 50, 100]}
                    />

                </div>

            </React.Fragment>
        )
    }
}

export default ContentTypeTable;
