import React from 'react'
import { Container } from "reactstrap";
import Page from "../components/Page";
import PageLayout from "../components/PageLayout";

class TermsAndConditions extends Page {
    render() {
        return(

            <PageLayout title={"T's & C's :: Little Look-Up"} description={"Terms and Conditions page for the Little Look-Up'."}>

                <Container className="mt-2 mb-2">

                    <p>
                        I love you, you love me, we're a happy family.
                    </p>

                    <img src="/static/netclipart.com-barney-clipart-589902.png" alt="Barney" height="320"/>

                    <p>
                        So... Let's just keep it that way.
                    </p>

                </Container>

            </PageLayout>

        )
    }
}

export default TermsAndConditions;
