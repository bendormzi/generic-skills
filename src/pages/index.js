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
  color: ${props => props.color || "#000000"};
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

const ChildFull = styled.div`
  text-align: ${props => props.textalign || "left"};
  border: 1px solid blue;
  align-items: stretch;
  flex-grow: 1;
`
const Button = styled.button`
  background: #000;
  border-radius: 30px;
  border: 1px #000;
  color: #fff;
  padding: 10px 20px 10px 20px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;

  :hover {
    background: red;
  }
`

const Partners = styled.button`
  width: 100%;
  padding: 25px;
  background: transparent;
  border: 1px solid red;
  display: flex;
  justify-content: space-between;
`

const Launch = styled.div`
  padding: 30px 0 0 0;
`

const Feature = ({ icon, title, description }) => {
  return (
    <FeatureWrapper>
      <IconWrapper>
        <StaticImage src={icon} />
      </IconWrapper>
      <FeatureTitle>{title}</FeatureTitle>
      <Description>{description}</Description>
    </FeatureWrapper>
  )
}

const FeatureWrapper = styled.div`
  width: 250px;
  border:1px solid yellow;
`
const IconWrapper = styled.div``
const FeatureTitle = styled.div``
const Description = styled.div``

const FeatureList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

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
        <Partners>
          <h2 color={"#fff"}>Our Partners</h2>
          <StaticImage src="../images/coursera.svg" alt="Coursera" />
          <StaticImage src="../images/udemy.svg" alt="Coursera" />
          <StaticImage src="../images/outlier.png" alt="Coursera" />
          <StaticImage src="../images/masterclass.png" alt="Coursera" />
        </Partners>
      </FlexRow>
      <FlexRow>
        <ChildFull>
          <Launch>
            <h1>Launch your Career</h1>
          </Launch>
          <FeatureList>
            <Feature
            title="Learn"
            description="Hello"/></FeatureList>
        </ChildFull>
      </FlexRow>
    </Hero>
  </Layout>
)

export default IndexPage
