import React from 'react'
import Link from "next/link";
import LogoNodejs from 'react-ionicons/lib/LogoNodejs'
import MdHelpCircle from 'react-ionicons/lib/MdHelpCircle'

class PageFooter extends React.Component {

    render() {
        return (
            <React.Fragment>

                   <hr className="mt-3"/>
                    <p className="text-muted small">
                        <Link href="/"><a className="text-muted font-weight-bold"><span className="icon ion-logo-github"/> Home</a></Link>
                        <span> :: </span>
                        <Link href="/about"><a className="text-muted font-weight-bold">About</a></Link>
                        <span> :: </span>
                        <Link href="/terms-and-conditions"><a className="text-muted font-weight-bold">T&C</a></Link>
                        .
                        <span className="ml-2">&copy; {new Date().getFullYear()}.</span>
                        <span> :: </span>
                        <span>
                            <LogoNodejs onClick={() => alert('Hi!')} fontSize="60px" color="#43853d" />
                        </span>
                        <span>
                            <MdHelpCircle fontSize="60px" color="red" beat={true} />
                        </span>
                    </p>

            </React.Fragment>
        )
    }
}

export default PageFooter;
