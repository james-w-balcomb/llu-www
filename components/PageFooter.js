import React from 'react'
import Link from "next/link";

class PageFooter extends React.Component {

    render() {
        return (
            <React.Fragment>

                   <hr className="mt-3 mb-3" />
                    <p className="text-muted small">
                        <span className="ml-2">
                            ::
                        </span>
                        <span className="ml-2">
                        <Link href="/">
                            <a className="text-muted font-weight-bold">
                                Home
                            </a>
                        </Link>
                        </span>
                        <span className="ml-2">
                            ::
                        </span>
                        <span className="ml-2">
                            &copy; {new Date().getFullYear()}.
                        </span>
                    </p>

            </React.Fragment>
        )
    }
}

export default PageFooter;
