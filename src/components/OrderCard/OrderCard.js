import {useState, useContext} from 'react'
import Link from "next/link"
import AppContext from "../context"

import {Row, Col} from 'reactstrap'


import {
  CardImage,
  CardImageTextWrapper,
  // CardImageText,
  CardImageLowerBox,
  CardImageLeftBlank,
  CardImageRightBlank,
  StyledBody,
  StyledTitle,
  StyledLabel,
  StyledText,
  StyledButton,
  StyledCard,
  TextSource
} from "./OrderCard.styles"

function OrderCard({ address, city, state, amount, dishes}) {

  console.log(dishes)

  const dishesList = dishes.map((res) => (
    <Col xs="12" key={res.id}>
      <span>{res.name}</span>
      <span style={{float: "right"}}>${res.price}</span>
      <span>({res.quantity})</span>
    </Col>
  ))

  return (
  <StyledCard>   
    <StyledBody>
      <StyledLabel>Ordered To Address</StyledLabel>
      <StyledText>{address}, {city} {state}</StyledText>
      <StyledLabel>Total Amount</StyledLabel>
      <StyledText>${amount/100}</StyledText>
      <StyledLabel>Ordered Items</StyledLabel>
      <Row>
        {dishesList}
      </Row>
    </StyledBody>
  </StyledCard>
  )
}

export default OrderCard
