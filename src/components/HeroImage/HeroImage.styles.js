import styled from 'styled-components'

export const HeroContainer = styled.div`
    display: flex;
    -webkit-box-pack: end;
    justify-content: flex-end;
    position: relative;
    z-index: 1;
    top: 0px;
    /* background-color: rgb(209, 240, 246); */
    background-color: rgb(136,183,196);
    height: 25vw;
`;

export const HeroSide = styled.div`
    width: 58vw;
    height: 100%;
    position: relative;
    overflow: hidden;
`;

export const StyledHeroImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0;
  object-fit: cover;
  clip-path: polygon(100% 0%, 100% 100%, calc(360px + 0%) 100%, 0% 0%);
  object-position: center center;
`;

export const StyledOverlay = styled.div`
transform: translateX(100%);
position: absolute;
top: 0px;
left: 0px;
width: 100%;
height: 100%;
background: rgb(255, 240, 237)
`;


export const WaveEdge = styled.div`
    position: absolute;
    border: 0;
    bottom: -5px;
    left: 0;
    width: 100vw;
    height: 9vw;
    /* height: 50px; */
    z-index: 10;


svg {
    display: block;
    width: 100vw;
    fill: #f6fcfc;
}

`;

export const SearchInput = styled.div`
  position: absolute;
  top: 1.5vw;
  left: 2em;
  width: 50%;
  height: 20vh;
  box-sizing: border-box;
  display: flex;
  font-size: 1em;
  text-align: start;
  z-index: 20;

.search {
  width: 95%;
}
.input-group {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    width: 95%;
    height: 6vw;
    max-height: 39px;
    margin: 0;
}
.input-group-append {
  background-color: #FFB600;
  display: flex;
  align-items: center;
  height: 100%;
  border-radius: 10% 10% / 10% 10%;
  border-color:  #FFB600;
  margin: 0;
  padding: 0;
  padding-left: .4vh;
  padding-right: .4vh;
}
.input-group-text {
  color: #68757b;
  font-weight: 700;
  font-size: 1.6vw;
  text-align: center;
  background-color: #FFB600;
  border-radius: 10% 10% / 10% 10%;
  border-color:  #FFB600;
  padding: 0;
  margin: 0;
}

.form-control {
  color: var(--bs-gray-800);
  display: flex;
  font-weight: 600;
  font-size: 1.6vw;
  height: 100%;
  padding: 1vw;
  padding-top: .5vw;
  padding-bottom: .5vw;
  margin: 0;
}

h3 {
  color: var(--bs-gray-100);
  font-family: "Montserrat", sans-serif;
  font-size: 3.2vw;
  margin-bottom: .2em;
}

h4 {
  color: var(--bs-gray-800);
  font-family: "Montserrat", sans-serif;
  font-size: 2.2vw;
  margin-top: 0;
  margin-bottom: 1vw;
}

@media (min-width: 992px) {

}
@media (min-width: 768px) and (max-width: 992px) {

}
@media (max-width: 768px) { 
  .input-group-text {
    font-size: 2.4vw;
  }
  h3 {
    font-size: 3.6vw;
  }
  h4 {
    font-size: 3vw;
  }
}
`;