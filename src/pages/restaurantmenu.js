import React, { useState , useContext } from "react";

import {useRouter} from 'next/router'
import Cart from "../components/Cart/Cart"
import {ApolloProvider,ApolloClient,HttpLink, InMemoryCache} from '@apollo/client';
import { InputGroup, InputGroupAddon,Input} from "reactstrap";
import {HeroImage} from "../components/HeroImage/HeroImage"
import {SearchInput} from "../components/HeroImage/HeroImage.styles";
import RestaurantMenu from '../components/RestaurantMenu/RestaurantMenu';
import AppContext from "../components/context";
import {Row, Col} from "reactstrap"

function GetMenu() {
    const router = useRouter();
    const {user} = useContext(AppContext);
    const {cartvisible} = useContext(AppContext);
    const restaurant=router.query;
    console.log("GetMenu")
    console.log(restaurant.id)
    const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://164.92.99.205:1337";
    console.log(`URL: ${API_URL}`)
    const [query, setQuery] = useState("");
    const link = new HttpLink({ uri: `${API_URL}/graphql`})
    const cache = new InMemoryCache()
    const client = new ApolloClient({link,cache});
   
    console.log(cartvisible)

    return (
        <ApolloProvider client={client}>
            <HeroImage
                image = {restaurant.image}
            />
            <SearchInput>
            <div className="search">
                {restaurant ? (<h3>{restaurant.name} Restaurant</h3>):
                    (<h3>Restaurant</h3>)
                }
                <h4> Search Menu</h4>
                <InputGroup >
                <InputGroupAddon addonType="append"> Search </InputGroupAddon>
                <Input
                    onChange={(e) =>
                    setQuery(e.target.value.toLocaleLowerCase())
                    }
                    value={query}
                />
                </InputGroup><br></br>
            </div>
            </SearchInput>
            <Row>
                <Col sm="12">
                <RestaurantMenu 
                    rest = {restaurant}
                    search={query}
                />
                {/* {user ? (<Cart> </Cart>):null} */}
                </Col>
            </Row>
        </ApolloProvider>
    );
  }
  export default GetMenu;
  