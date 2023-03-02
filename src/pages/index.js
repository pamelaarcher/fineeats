import React, { useState , useContext } from "react";
import Cart from "../components/cart"
import {ApolloProvider,ApolloClient,HttpLink, InMemoryCache} from '@apollo/client';
import {HeroImage} from "../components/HeroImage/HeroImage"
import RestaurantList from '../components/RestaurantList/RestaurantList';
import { InputGroup, InputGroupAddon,Input} from "reactstrap";
import {SearchInput} from "../components/HeroImage/HeroImage.styles";
import {Footer} from '../components/Footer/Footer'
import AppContext from "../components/context";

function Home() {
    const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://164.92.99.205:1337";
    console.log(`URL: ${API_URL}`)
    const [query, setQuery] = useState("");
    const link = new HttpLink({ uri: `${API_URL}/graphql`})
    const cache = new InMemoryCache()
    const client = new ApolloClient({link,cache});
    const {user} = useContext(AppContext);

    console.log("In index.js");
    if (user) {
        console.log(user.username)
    }

  
    return (
        <ApolloProvider client={client}>
        <HeroImage
            image="./images/heroimage.jpg"
        />
        <SearchInput>
          <div className="search"> 
            <h3> Welcome to FINE EATS</h3>
            <h4> Search Local Restaurants</h4>
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
            <RestaurantList user={user} search={query} />
            {/* <Cart> </Cart> */}
            <Footer/>
        </ApolloProvider>
    );
  }
  export default Home;
  