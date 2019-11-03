import React from 'react'
import { Container } from "reactstrap";
import Page from "../components/Page";
import PageLayout from "../components/PageLayout";

class About extends Page {
    render() {
        return(

            <PageLayout title={"About :: Little Look-Up"} description={"About Us page for the Little Look-Up'."}>

                    <Container className="mt-2 mb-2">

                        <h2 className="m-4">
                            About us
                        </h2>

                        <p>
                            Little Look-Up (LLU) is meant to a the simple and easy-to-use nexus for all types of reference material.
                        </p>

                        <p>
                            The primary purpose of this site is to provide you with a minimalistic way of accessing tidbits of knowledge.
                        </p>

                        <p>
                            Most of the information housed here is available elsewhere, but we hope to provide this information in the most palatable user experience possible.
                            This includes things like <i>not</i> using images for tables, as well as making pages load as fast as possible and not have parts of the page jump around during loading.
                        </p>

                        <h4 className="mb-5 mt-5">
                            Thanks for checking us out!
                        </h4>

                    </Container>

            </PageLayout>

        )
    }
}

export default About;
