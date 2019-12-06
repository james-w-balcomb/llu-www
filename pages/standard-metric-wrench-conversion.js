import React from 'react'
import Page from "../components/Page";
import PageLayout from "../components/PageLayout";
import {Container, ListGroup, ListGroupItem} from "reactstrap";

import importedJsonData from '../static/standard-metric-wrench-conversion.json'

const testTable1 = [];
const testTable2 = [[],[]];
const testTable3 = ["foo"];
const testTable4 = ["foo", "bar"];
const testTable5 = [["foo", "bar"]];
const testTable6 = [["foo", "bar"], ["baz", "quux"]];

const table = [
    ["Standard", "Metric"],
    ["5/16\"", "8 mm"],
    ["3/8\"", "10 mm"],
    ["7/16\"", "11 mm"],
    ["1/2\"", "13 mm"],
    ["9/16\"", "14 mm"],
    ["5/8\"", "16 mm"],
    ["3/4\"", "19 mm"],
    ["13/16\"", "21 mm"],
    ["7/8\"", "22 mm"],
    ["15/16\"", "24 mm"],
    ["1\"", "25 mm"],
    ["1-1/8\"", "29 mm"],
    ["1-1/4\"", "32 mm"],
    ["1-5/16\"", "34 mm"],
    ["1-3/8\"", "35 mm"],
    ["1-1/2\"", "38 mm"],
    ["1-5/8\"", "41 mm"],
    ["1-11/16\"", "43 mm"],
    ["1-3/4\"", "45 mm"],
    ["1-7/8\"", "48 mm"],
    ["2\"", "51 mm"],
    ["2-1/4\"", "57 mm"],
    ["2-1/2\"", "64 mm"],
    ["2-5/8\"", "67 mm"],
    ["2-3/4\"", "70 mm"],
    ["2-15/16\"", "75 mm"],
    ["3\"", "76 mm"],
    ["3-1/8\"", "80 mm"],
    ["3-1/4\"", "83 mm"],
    ["3-1/2\"", "89 mm"],
    ["3-3/4\"", "95 mm"],
    ["3-7/8\"", "99 mm"],
    ["4\"", "102 mm"],
    ["4-1/4\"", "108 mm"],
    ["4-1/2\"", "114 mm"],
    ["4-5/8\"", "118 mm"],
    ["5\"", "127 mm"],
    ["5-3/8\"", "137 mm"],
    ["5-1/2\"", "140 mm"],
    ["5-3/4\"", "146 mm"],
    ["6\"", "152 mm"],
    ["6-1/2\"", "165 mm"],
    ["7\"", "178 mm"]
];

class StandardMetricWrenchConversion extends Page {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        console.log("importedJsonData");
        console.log(importedJsonData);

        console.log("table");
        console.log(table);

        console.log("table.slice(0,1)");
        console.log(table.slice(0,1));

        return(

            <PageLayout title={"Standard Metric Wrench Conversion :: Little Look-Up"} description={"Standard Metric Wrench Conversion page for the Little Look-Up'."}>

                <Container>

                    <table className="border">
                        <thead className="border">
                        <tr className="border">
                            {table.slice(0,1).map(row => (
                                    row.map((cell, index) => (
                                            <td key={index} className="border">{cell}</td>
                                        )
                                    )
                                )
                            )}
                        </tr>
                        </thead>

                        <tbody className="border">
                        {table.slice(1).map((cell, index) => (
                                <tr key={index} className="border">
                                    <td className="border">{cell[0]}</td>
                                    <td className="border">{cell[1]}</td>
                                </tr>
                            )
                        )}
                        </tbody>
                    </table>

                </Container>

            </PageLayout>

        )
    }
}
export default StandardMetricWrenchConversion;
