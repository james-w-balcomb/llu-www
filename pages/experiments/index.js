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
                            <Link href="../experiments"><a className="text-muted font-weight-bold">experiments</a></Link>
                        </ListGroupItem>
                    </ListGroup>

                </Container>

            </PageLayout>

        )
    }
}
export default Index;
