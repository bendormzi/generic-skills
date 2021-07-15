import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

import styled from "styled-components"

const Hero = styled.div`
  flex-grow: 1;
`
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50%;
  border: 1px solid yellow;
  align-self: flex-start;
  align-items: center;
  justify-content: space-around;

  background-color: ${props => props.background || "#ffffff"};
  color: ${props => props.background || "#000000"};
`

const ChildLeft = styled.div`
  text-align: left;
  border: 1px solid blue;
  align-items: stretch;
  flex-wrap: nowrap;
  max-width: 50%;
`
const ChildRight = styled.div`
  text-align: center;
  border: 1px solid blue;
  align-items: stretch;
  flex-grow: 1;
`

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`

const Feature = styled.div``

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero>
      <FlexRow>
        <ChildLeft>
          <h1>Dormzies today. CEOs tomorrow.</h1>
          <p>
            Dormzi is a marketplace and skill development platform where young
            entrepreneurs can learn, earn certifications, and list their
            services for anyone to purchase.
          </p>
          <Button>Hire Talent</Button>
          <Button>Level-up Your Career</Button>
        </ChildLeft>
        <ChildRight>
          <StaticImage src="../images/gatsby-icon.png" alt="A dinosaur" />
        </ChildRight>
      </FlexRow>
      <FlexRow background={"#000"} color={"#fff"}>
        <StaticImage src="../images/coursera.svg" alt="Coursera" />
        <StaticImage src="../images/udemy.svg" alt="Coursera" />
        <StaticImage src="../images/outlier.png" alt="Coursera" />
        <StaticImage src="../images/masterclass.svg" alt="Coursera" />
        <h2>Our Partners</h2>
      </FlexRow>
    </Hero>
  </Layout>
)

export default IndexPage
