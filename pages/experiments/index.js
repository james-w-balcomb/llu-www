import React from 'react'
import Link from "next/link";
import {
    Container,
    ListGroup,
    ListGroupItem
} from "reactstrap";
import Page from "../../components/Page";
import PageLayout from "../../components/PageLayout";

class Index extends Page {

    render() {
        return(

            <PageLayout title={"Experimental Codez :: Little Look-Up"} description={"Experimental Codez page for the Little Look-Up'."}>

                <Container>

                    <ListGroup>
                        <ListGroupItem>
                            <Link href="../experiments/javascript-inline"><a className="text-muted font-weight-bold">javascript-inline</a></Link>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Link href="../experiments/javascript-inline-appendchild"><a className="text-muted font-weight-bold">javascript-inline-appendchild</a></Link>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Link href="../experiments/javascript-external-local"><a className="text-muted font-weight-bold">javascript-external-local</a></Link>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Link href="../experiments/javascript-external-local-appendchild"><a className="text-muted font-weight-bold">javascript-external-local-appendchild</a></Link>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Link href="../experiments/javascript-external-remote"><a className="text-muted font-weight-bold">javascript-external-remote</a></Link>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Link href="../experiments/javascript-external"><a className="text-muted font-weight-bold">javascript-external</a></Link>
                        </ListGroupItem>
                    </ListGroup>

                </Container>

            </PageLayout>

        )
    }
}
export default Index;
