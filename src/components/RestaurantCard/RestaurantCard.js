import {useState, useContext} from 'react'
import Link from "next/link"
import AppContext from "../context"

import {Button} from "reactstrap"

import {
  CardImage,
  CardImageTextWrapper,
  // CardImageText,
  CardImageLowerBox,
  CardImageLeftBlank,
  CardImageRightBlank,
  StyledBody,
  StyledTitle,
  StyledText,
  StyledButton,
  StyledCard,
  TextSource
} from "./RestaurantCard.styles"

function RestaurantCard({ type, image, restid, title, text, price, buttontext, res}) {

  const {user} = useContext(AppContext);
  const {addItem} = useContext(AppContext)
  const { cart } = useContext(AppContext);
  const [state, setState] = useState(cart)
  var description = ""

  return (
  <StyledCard>   
  <CardImage>
    <img src={image} alt="" className="hover-zoom" />
    <CardImageTextWrapper>
        {/* <CardImageText>{text}</CardImageText> */}
    </CardImageTextWrapper>
    <CardImageLowerBox>
      <CardImageLeftBlank/>
      <CardImageRightBlank/>
    </CardImageLowerBox>
    </CardImage>
    <StyledBody>
      <StyledTitle>{title}</StyledTitle>
      <StyledText>{text}</StyledText>
      {price ? (<StyledText>Price: ${price}</StyledText>):null}
      {type==="Restaurant" ? (
        <Link 
          href={{
            pathname: '/restaurantmenu',
            query: {id: restid, name: title, image: image}
          }}
        >
          <StyledButton id="restaurantmenu" disabled={user ? false : true}>{buttontext}</StyledButton>
        </Link>
      ):(
        <StyledButton onClick = {()=> addItem(res)}>
        {buttontext}
        </StyledButton>
      )}
    </StyledBody>
  </StyledCard>
  )
}

export default RestaurantCard
