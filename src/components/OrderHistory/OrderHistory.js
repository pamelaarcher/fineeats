import { gql, useQuery } from '@apollo/client';
// import Dishes from "../dishes"
import { useContext, useState } from 'react';
import OrderCard from "../OrderCard/OrderCard"
import AppContext from "../context"
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Container,
  Row,
  Col
} from "reactstrap";

import {
  StyledOrders
} from "./OrderHistory.styles"


function OrderHistory(props) {
  

  console.log(props)

  const GET_ORDERS = gql`
    query {
      orders {
        id
        user
        address
        city
        state
        amount
        dishes
    }
  }
`;

  const { loading, error, data } = useQuery(GET_ORDERS)
  if (loading) return <p>Loading...</p>;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;
  console.log('Query Data:')
  console.log(data)

  let orders = data.orders;

  console.log(orders)

  let searchQuery = orders.filter((res) => {
    return res.user === props.userid});

  console.log(searchQuery)

  if (searchQuery.length > 0) {
    const orderList = searchQuery.map((res) => (
      <Col xs="12" sm="6" md="6" lg="4" key={res.id}>
        <OrderCard 
          address={res.address}
          city={res.city}
          state={res.state}
          amount={res.amount}
          dishes={res.dishes}
        />
      </Col>
    ))

    return (

      <StyledOrders>
        <h2>Past Orders</h2>
        <Row xs='3'>
          {orderList}
        </Row>
     </StyledOrders>

    )
  } else {
    return <h1> No Orders Found</h1>
  }
}
export default OrderHistory