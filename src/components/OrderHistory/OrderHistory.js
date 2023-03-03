import { gql, useQuery } from '@apollo/client';
// import Dishes from "../dishes"
import { useContext, useState } from 'react';
import { useRouter } from "next/router";
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
  if (loading) return <p style={{marginTop: 60}}>Loading...</p>;
  if (error) return <p style={{marginTop: 60}}>ERROR</p>;
  if (!data) return <p style={{marginTop: 60}}>Not found</p>;

  let orders = data.orders;

  let searchQuery = orders.filter((res) => {
    return res.user === props.userid});

  if (searchQuery.length > 0) {
    const orderList = searchQuery.map((res) => (
      <Col xs="12" sm="6" md="6" lg="4">
        <OrderCard 
          key={res.id}
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
      return (
        <StyledOrders>
        <h1>No Orders Found</h1>
        <h1></h1>
      </StyledOrders>
      )
  }
}
export default OrderHistory