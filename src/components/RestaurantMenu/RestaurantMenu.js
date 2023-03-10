import {useRouter} from "next/router"
import {gql,useQuery} from '@apollo/client';
import {useState, useContext} from 'react'
import AppContext from "../context"
import RestaurantCard from "../RestaurantCard/RestaurantCard"
import {
  StyledMenu
} from "./RestaurantMenu.styles"
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Row,
  Col} from "reactstrap";

function RestaurantMenu({rest, search}){
  const [restaurantID, setRestaurantID] = useState()
  const { cart } = useContext(AppContext);
  const [state, setState] = useState(cart)
  const {addItem} = useContext(AppContext)

const restId = rest.id
console.log("Dishes")

const GET_RESTAURANT_DISHES = gql`
  query($id: ID!) {
    restaurant(id: $id) {
      id
      name
      dishes {
        id
        name
        description
        price
        image {
          url
        }
      }
    }
  }
`;

  // const router = useRouter();

  const { loading, error, data } = useQuery(GET_RESTAURANT_DISHES, {
    variables: { id: restId},
  });

  if (loading) return <p style={{marginTop: 60}}>Loading...</p>;
  if (error) return <p style={{marginTop: 60}}>ERROR here</p>;
  if (!data) return <p style={{marginTop: 60}}>Not found</p>;

  let restaurant = data.restaurant;

  console.log('Menu:')
  console.log(restaurant.dishes)
  console.log(search)

  let searchQuery = restaurant.dishes.filter((res) => {
    return res.name.toLowerCase().includes(search)
  }) || [];

  if (searchQuery.length > 0){
    const restMenu = searchQuery.map((res) => (
      <Col xs="12" sm="6" md="4" lg="4" key={res.id}>
        <RestaurantCard 
          type="Menu"
          image={res.image.url ? `http://164.92.99.205:1337` + res.image.url : ".\images.salad.webp"}
          restid={res.id}
          title={res.name}
          text={res.description}
          price={res.price}
          buttontext="+ Add To Cart"
          res={res}
        />
      </Col>
    ))

    return (
      <StyledMenu>
        <h2>Menu Dishes</h2>
        <h4>Click on cart above to place order</h4>
        <Row xs='3'>
          {restMenu}
        </Row>
      </StyledMenu>
        )}
        else{
          return (
            <StyledMenu>
            <h1>No Dishes for this restaurant</h1>
            <h1></h1>
          </StyledMenu>
          )
        }
    }
    export default RestaurantMenu