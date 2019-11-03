import React from 'react'
import Link from "next/link";
import ContentCardsData from "./ContentCardsData";

class PageFooter extends React.Component {

    render() {
        return (
            <React.Fragment>

                <ContentCardsData />

                <hr className="mt-4 mb-2" />
                    <div className="text-muted small">
                        <span className="ml-2">::</span>
                        <span className="ml-2">
                        <Link href="/"><a className="text-muted font-weight-bold">Home</a></Link>
                        </span>
                        <span className="ml-2">::</span>
                        <span className="ml-2">&copy; {new Date().getFullYear()}.</span>
                    </div>
                <hr className="mt-2 mb-4" />
            </React.Fragment>
        )
    }
}

export default PageFooter;
