import React from 'react'
import { Container, Jumbotron } from 'reactstrap'
import Page from '../components/Page.js'
import PageLayout from '../components/PageLayout.js'

class Index extends Page {
    render() {
        return(

            <PageLayout
                title={"Little Look-Up"}
                description={"A nexus for 'quick & easy' and 'reference material'."}
            >

                <Jumbotron
                    className="text-light rounded-0"
                    style={{
                        backgroundColor: 'rgba(148,124,176,1)',
                        background: 'radial-gradient(ellipse at center, rgba(187,172,205) 0%, rgba(148,124,176,1) 100%)',
                        boxShadow: 'inset 0 0 100px rgba(0,0,0,0.1)'
                    }}
                >

                    <Container className="mt-2 mb-2">
                        <h1 className="display-2 mb-3" style={{fontWeight: 300}}>
                            <span style={{fontWeight: 600,marginRight: 30}}>
                                <span className="mr-3">
                                    <img src="/static/LittleLookUp-Birdie2-tiny.png" className="img-fluid" alt="Little Look-Up Birdie" />
                                </span>
                                <br className="v-block d-sm-none"/>
                                LLU
                            </span>
                            <br className="v-block d-lg-none ml-1"/>Little Look-Up
                        </h1>
                        <p className="lead mb-5">
                            A nexus for quick and simple reference material.
                        </p>
                    </Container>

                </Jumbotron>

            </PageLayout>

        )
    }
}

export default Index;
