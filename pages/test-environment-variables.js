import React from 'react'
// import Link from 'next/link'
import Head from 'next/head'
// import Home from "./index";
import Nav1 from '../components/nav1.js'

import getConfig from 'next/config'

const { publicRuntimeConfig: testEnvironmentVariables } = getConfig();

const publicRuntimeConfig__TST_ENV_VAR = testEnvironmentVariables.TST_ENV_VAR;
const publicRuntimeConfig__NODE_ENV = testEnvironmentVariables.NODE_ENV;
const publicRuntimeConfig__LLU_WWW_PORT = testEnvironmentVariables.LLU_WWW_PORT;
const publicRuntimeConfig__LLU_API_URL = testEnvironmentVariables.LLU_API_URL;

const process_env__TST_ENV_VAR = process.env.TST_ENV_VAR;
const process_env__NODE_ENV = process.env.NODE_ENV;
const process_env__LLU_WWW_PORT = process.env.LLU_WWW_PORT;
const process_env__LLU_API_URL = process.env.LLU_API_URL;

const TestEnvironmentVariables = () => (
    <div>

        <Head>
            <title>LLU WWW - Testing Environment Variables</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"/>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"/>
        </Head>

        <Nav1 />

        <div className='hero'>

            <h1 className='title'>Testing Environment Variables</h1>

            <div className='row'>

                <div className='col'>

                    process.env:
                    <table className="table table-bordered table-hover">
                        <caption>process.env</caption>
                        <thead>
                        <tr>
                            <th>TST_ENV_VAR</th>
                            <th>NODE_ENV</th>
                            <th>LLU_WWW_PORT</th>
                            <th>LLU_API_URL</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                {process_env__TST_ENV_VAR}
                            </td>
                            <td>
                                {process_env__NODE_ENV}
                            </td>
                            <td>
                                {process_env__LLU_WWW_PORT}
                            </td>
                            <td>
                                {process_env__LLU_API_URL}
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <div className='col'>
                    publicRuntimeConfig:
                    <table className="table table-bordered table-hover">
                        <caption>publicRuntimeConfig</caption>
                        <thead>
                        <tr>
                            <th>TST_ENV_VAR</th>
                            <th>NODE_ENV</th>
                            <th>LLU_WWW_PORT</th>
                            <th>LLU_API_URL</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                {publicRuntimeConfig__TST_ENV_VAR}
                            </td>
                            <td>
                                {publicRuntimeConfig__NODE_ENV}
                            </td>
                            <td>
                                {publicRuntimeConfig__LLU_WWW_PORT}
                            </td>
                            <td>
                                {publicRuntimeConfig__LLU_API_URL}
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

            </div>

        </div>

        <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
    </div>
);
export default TestEnvironmentVariables

// class TestEnvironmentVariablesClass extends React.Component {
//     static async getInitialProps () {
//         // fetch(`${API_URL}/some-path`)
//         return {}
//     }
//
//     render () {
//         return (
//             <div>
//
//                 <table className="table table-bordered table-hover">
//                     <thead>
//                     <tr>
//                         <th>Column 1</th>
//                         <th>Column 2</th>
//                     </tr>
//                     </thead>
//                     <tbody>
//                     <tr>
//                         <td>
//                             publicRuntimeConfig.TST_ENV_VAR: {publicRuntimeConfig__TST_ENV_VAR}
//                         </td>
//                         <td>
//                             process.env.TST_ENV_VAR: {process_env__TST_ENV_VAR}
//                         </td>
//                     </tr>
//                     </tbody>
//                 </table>
//                 <p>
//                     publicRuntimeConfig.LLU_API_URL: {publicRuntimeConfig__LLU_API_URL}
//                     <br />
//                     publicRuntimeConfig.NODE_ENV: {publicRuntimeConfig__NODE_ENV}
//                 </p>
//                 <p>
//                     process.env.LLU_API_URL: {process_env__LLU_API_URL}
//                     <br />
//                     process.env.NODE_ENV: {process_env__NODE_ENV}
//                 </p>
//
//             </div>
//
//         )
//     }
// }
