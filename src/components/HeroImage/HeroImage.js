import React from "react";
import {GlobalContext} from "../../lib/GlobalContextProvider";
// import "../../assets/css/stylesunmin.css"
import {
  HeroContainer,
  HeroSide,
  StyledHeroImage,
  WaveEdge,
  StyledOverlay
} from './HeroImage.styles'

export function HeroImage({image}) {

const context = React.useContext(GlobalContext); 

return (
  <>

<HeroContainer>
  <HeroSide>
    <StyledHeroImage src={image}></StyledHeroImage> 
    {/* <StyledOverlay></StyledOverlay> */}
  </HeroSide>
  <WaveEdge>
    <svg preserveAspectRatio="xMinYMin meet" version="1.0" encoding="utf-8" standalone="no" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 158">
        <path fill="#f6fcfc" fillRule="evenodd" d="M1440-27h2v185H0V8c88-20.667 267.333 3 538 71s571.333 45.333 902-68v-38z" />
      </svg>
    </WaveEdge>
</HeroContainer>






  </>
)
}