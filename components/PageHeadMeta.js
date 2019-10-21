import React from 'react'
import Head from 'next/head';

class PageHeadMeta extends React.Component {

    render() {
        return (
            <React.Fragment>

                <Head>
                    <meta charSet="UTF-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <title>{this.props.title}</title>
                    <meta property="og:title" content={this.props.title}/>
                    <meta property="og:description" content={this.props.description}/>
                    <meta property="og:image" content="https://www.littlelookup.com/static/screenshot.png"/>
                    <meta property="og:url" content={this.props.url}/>
                    <meta name="twitter:card" content="summary_large_image"/>
                    <meta property="og:site_name" content="Little Look-Up"/>
                    <meta name="twitter:creator" content="@littlelookup"/>
                    <meta name="twitter:title" content={this.props.title}/>
                    <meta name="twitter:description" content={this.props.description}/>
                    <meta name="twitter:image" content="https://www.littlelookup.com/static/screenshot.png"/>
                    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"/>
                    <script src="https://cdn.polyfill.io/v2/polyfill.min.js"/>
                    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"/>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/react-table/6.10.3/react-table.css" />
                </Head>

            </React.Fragment>
        )
    }
}

export default PageHeadMeta;
