import React from 'react'

class Page extends React.Component {

    static async getInitialProps({req}) {
        return {
            lang: 'en' // add lang property to all pages, for accessibility
        }
    }

}

export default Page;
