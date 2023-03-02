import { gql, useQuery } from '@apollo/client';
// import Dishes from "../dishes"
import { useContext, useState } from 'react';
import Link from "next/link";
import RestaurantCard from "../RestaurantCard/RestaurantCard"
import {
  StyledRestaurants
} from "./RestaurantList.styles"


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

function RestaurantList(props) {

  console.log(props)
  const [restaurantID, setRestaurantID] = useState(0)
  // const { cart } = useContext(AppContext);
  // const [state, setState] = useState(cart)
  const GET_RESTAURANTS = gql`
    query {
      restaurants {
        id
        name
        description
        image {
          url
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_RESTAURANTS)
  if (loading) return <p>Loading...</p>;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;
  console.log('Query Data:')
  console.log(data.restaurants)
  console.log(props.search)


  let searchQuery = data.restaurants.filter((res) => {
    return res.name.toLowerCase().includes(props.search)
  }) || [];

  console.log(searchQuery)

  let restId = searchQuery[0] ? searchQuery[0].id : null;

  if (searchQuery.length > 0) {
    const restList = searchQuery.map((res) => (
      <Col xs="12" sm="6" md="6" lg="4" key={res.id}>
        <RestaurantCard 
          type="Restaurant"
          image={`http://164.92.99.205:1337` + res.image.url}
          restid={res.id}
          title={res.name}
          text={res.description}
          buttontext="See Menu"
        />
      </Col>
    ))

    return (

      <StyledRestaurants>
        <h2>Restaurants In The Area</h2>
        {props.user ? (null):(
          <h4>Sign in to see menus and purchase dishes</h4>
        )
        }
        <Row xs='3'>
          {restList}
        </Row>

     </StyledRestaurants>

    )
  } else {
    return <h1> No Restaurants Found</h1>
  }
}
export default RestaurantList