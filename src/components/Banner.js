import React from "react"
import styled from "styled-components/macro"
import pic01 from "../images/ish_header.png"

export const PlaceHolder = styled.div(
  () => `
  background-image: url(${pic01});
  background-size: cover;
  height: 100vh;
  width: 100vw;
  background-position: 50% 50%;
  `
)

export const Clicky = styled.a(
  () => `
    height: 100vh;
    width: 100vw;
    display:block;
    `
)

const Banner = () => (
  <PlaceHolder>
    <Clicky
      title="Go to crowdfunding site"
      href="https://www.indiegogo.com/projects/insert-self-here-inclusive-sustainable-fashion#/"
    ></Clicky>
  </PlaceHolder>
)

export default Banner
