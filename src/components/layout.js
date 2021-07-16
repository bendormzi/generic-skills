/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { createGlobalStyle } from "styled-components"
import Header from "./header"
import "./layout.css"

const GlobalStyle = createGlobalStyle`
  body {
    margin:0;
    padding:0;
    font-family:"SF Pro Display";
  }
  * {
    box-sizing: border-box;
  }
  h1{
    font-size: 70px;
    color:  ${props => props.color || "#000"};
  }
  h2{
    font-size: 32px;
    color:  ${props => props.color || "#fff"};
  }
  p{

    font-size: 14px;
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const Container = styled.div`
    border: 1px solid red;
    margin: 0 auto;
    padding: 0;
    height: 100vh;
    max-width: 1280px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  `

  return (
    <Container>
      <GlobalStyle />
      {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}

      <main>{children}</main>
      <footer>footer</footer>
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
