import React from 'react'
import { Container } from "reactstrap";
import Page from "../components/Page";
import PageLayout from "../components/PageLayout";

class About extends Page {
    render() {
        return(

            <PageLayout title={"About :: Little Look-Up"} description={"About Us page for the Little Look-Up'."}>

                    <Container className="mt-2 mb-2">

                        <p>
                            Hello, welcome, and thank you for checking us out.
                        </p>

                        <p className="lead mb-5">
                            The Little Look-Up (LLU) is meant to be the simplest source for the most useful reference material.
                        </p>

                        <p>
                            While the advertisements pay the bills, the primary purpose of the web-site is to provide you, and the rest of the world, with a minimalistic interface to the tidbits of knowledge.
                        </p>

                        <p>
                            Some of the information housed here is, of course, available elsewhere, but we hope to wrap that information up in here in the most palatable user experience you can find.
                            This is includes such things as <i>not</i> using images for tables, because we all know that the most useful option is to be able to copy and paste it.
                            As well as making the pages load as fast as possible and not having parts of the page jumping around while it's loading.
                        </p>

                        <p>
                            Part of what is being done here is the collection of data around who is using the site, how they got here, what they are looking for, and how they are using it.
                            By analyzing and profiling searches, results, users, and access patterns, we hope to optimally reach the goal of what we serve and how we serve it.
                        </p>

                    </Container>

            </PageLayout>

        )
    }
}

export default About;
