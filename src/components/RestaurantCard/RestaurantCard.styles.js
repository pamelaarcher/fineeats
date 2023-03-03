import styled from "styled-components"
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle
} from "reactstrap";

export const CardImage = styled.div`
  margin-bottom: 0px;
  width: 100%;
  height: 180px;
  position: relative;
  overflow: hidden;

  :hover img {
    transform: scale(1.25);
    filter: blur(2px);
  }

.img-wrapper {
  overflow: hidden;
}

img.hover-zoom {
  transition: all 0.3s ease 0s;
  width: 100%;
  height: 100%;
}

  @media (min-width: 768px) {
    max-height: 200px;
  }

`;

export const CardImageTextWrapper = styled.div`
  position: absolute;
  color: #fff;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`

export const CardImageText = styled.p`
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
  font-family: "Teko";
  font-weight: 700;
  letter-spacing: 1.5px;
  color: #FFFFFF;
  font-size: 1.3rem;
  text-transform: uppercase;
  margin: 0px;
  padding: 0px;

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  @media (min-width: 992px) {
    font-size: 1.3rem;
  }

  @media (min-width: 1200px) {
    font-size: 1.5rem;
  }
`
export const CardImageLowerBox = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 30px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

export const CardImageLeftBlank = styled.div`
    position: absolute;
    /* width: 70px; */
    height: 30px;
    left: 0;
    border-bottom: 30px solid rgb(248, 247, 242);
    /* border-bottom: 30px solid rgb(255, 255, 255);  */
    border-right: 25vw solid transparent;
`;

export const CardImageRightBlank = styled.div`
    position: absolute;
    /* box-sizing: border-box;
    display: block; */
    /* width: 30px; */
    height: 15px;
    right: 0;
    border-bottom: 21.28px solid rgb(248, 247, 242);
    /* border-bottom: 21.28px solid rgb(255, 255, 255);  */
    border-left: 10vw solid transparent;
`;

export const StyledButton = styled(Button)`
  position: absolute;
  right: 10px;
  bottom: 6px;
  background: linear-gradient(0deg, rgba(79,110,118,1) 0%, rgba(96,145,158,1) 100%);
  border: none;
  width: 100px;
  height: 35px;
  color: #fff;
  border-radius: 5px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 15px;
  margin-top: 10px;
  padding-left: 0px;
  padding-right: 0px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: block;
  box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
   7px 7px 20px 0px rgba(0,0,0,.1),
   4px 4px 5px 0px rgba(0,0,0,.1);
  outline: none;
  float: right;

&:hover {
  /* background: rgb(0,3,255); */
  background: linear-gradient(0deg, rgba(192,145,26,1) 0%, rgba(255,182,0,1) 100%);
}
`;

export const StyledCard = styled(Card)`
  position: relative;
  box-shadow: 0px 13px 10px -7px rgba(0, 0, 0,0.1);
  height: 400px;
  background-color: var(--bs-secondary);
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 25px;
`;

export const StyledBody = styled(CardBody)`
  position: relative;
  padding: 10px;
`;

export const StyledTitle = styled(CardTitle)`
  position: relative;
  font-family: Monserrat, sans-serif;
  font-size: 1.2em;
  font-weight: 700;
  margin: 0px;
  padding-left: 5px;
  text-transform: uppercase;
`;

export const StyledText = styled(CardText)`
    padding-left: 5px;
    padding-right: 5px;
    padding-bottom: 0px;
    font-size: 1em;
    line-height: 24px;
    margin: 0;
    margin-top: 10px;
`;
