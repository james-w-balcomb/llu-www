import React from 'react'
import Head from 'next/head';
import Page from "../components/Page";
import PageLayout from "../components/PageLayout";
import { Container } from "reactstrap";

class ResistorColorCodes extends Page {
    render() {
        return(

            <PageLayout
                title={"Resistor Color Codes :: Little Look-Up"}
                description={"Resistor Color Codes on the Little Look-Up'."}
            >

                <Head>
                    <title>Resistor Color Codes</title>
                    <link href="/static/resistor-color-codes.css" rel="stylesheet" />
                </Head>

                <Container>

                <h3>Resistor Color Code Table</h3>

                <table className="resistor-color-code-table">
                    <thead>
                    <tr>
                        <td>Color</td>
                        <td>Digit</td>
                        <td>Multiplier</td>
                        <td>Tolerance</td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><div className="resistor-color-code-table-color-black">Black</div></td>
                        <td>0</td>
                        <td>1</td>
                        <td>&#160;</td>
                    </tr>
                    <tr>
                        <td><div className="resistor-color-code-table-color-brown">Brown</div></td>
                        <td>1</td>
                        <td>10</td>
                        <td>&#177; 1%</td>
                    </tr>
                    <tr>
                        <td><div className="resistor-color-code-table-color-red">Red</div></td>
                        <td>2</td>
                        <td>100</td>
                        <td>&#177; 2%</td>
                    </tr>
                    <tr>
                        <td><div className="resistor-color-code-table-color-orange">Orange</div></td>
                        <td>3</td>
                        <td>1,000</td>
                        <td>&#160;</td>
                    </tr>
                    <tr>
                        <td><div className="resistor-color-code-table-color-yellow">Yellow</div></td>
                        <td>4</td>
                        <td>10,000</td>
                        <td>&#160;</td>
                    </tr>
                    <tr>
                        <td><div className="resistor-color-code-table-color-green">Green</div></td>
                        <td>5</td>
                        <td>100,000</td>
                        <td>&#177; 0.5%</td>
                    </tr>
                    <tr>
                        <td><div className="resistor-color-code-table-color-blue">Blue</div></td>
                        <td>6</td>
                        <td>1,000,000</td>
                        <td>&#177; 0.25%</td>
                    </tr>
                    <tr>
                        <td><div className="resistor-color-code-table-color-violet">Violet</div></td>
                        <td>7</td>
                        <td>10,000,000</td>
                        <td>&#177; 0.1%</td>
                    </tr>
                    <tr>
                        <td><div className="resistor-color-code-table-color-grey">Grey</div></td>
                        <td>8</td>
                        <td>&nbsp;</td>
                        <td>&#177; 0.05%</td>
                    </tr>
                    <tr>
                        <td><div className="resistor-color-code-table-color-white">White</div></td>
                        <td>9</td>
                        <td>&nbsp;</td>
                        <td>&#160;</td>
                    </tr>
                    <tr>
                        <td><div className="resistor-color-code-table-color-gold">Gold</div></td>
                        <td>&nbsp;</td>
                        <td>0.1</td>
                        <td>&#177; 5%</td>
                    </tr>
                    <tr>
                        <td><div className="resistor-color-code-table-color-silver">Silver</div></td>
                        <td>&nbsp;</td>
                        <td>0.01</td>
                        <td>&#177; 10%</td>
                    </tr>
                    <tr>
                        <td><div className="resistor-color-code-table-color-none">None</div></td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td>&#177; 20%</td>
                    </tr>
                    </tbody>
                </table>

                </Container>

            </PageLayout>

        )
    }
}

export default ResistorColorCodes;
