import React, { useContext } from "react";

import {ApolloProvider,ApolloClient,HttpLink, InMemoryCache} from '@apollo/client';
import {HeroImage} from "../components/HeroImage/HeroImage"
import {StyledHeader} from "../components/OrderHistory/OrderHistory.styles";
import OrderHistory from '../components/OrderHistory/OrderHistory';
import {Footer} from '../components/Footer/Footer'
import AppContext from "../components/context";
import { useRouter } from "next/router";
import {Row, Col} from "reactstrap"

function GetOrders() {
    const {user} = useContext(AppContext);
    const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://164.92.99.205:1337";
    const link = new HttpLink({ uri: `${API_URL}/graphql`})
    const cache = new InMemoryCache()
    const client = new ApolloClient({link,cache});
    const router = useRouter();

    return (
        <ApolloProvider client={client}>
            <HeroImage
                image = {"./images/healthyfoods.jpg"}
            />
            {user ? (
                <>
                    <StyledHeader>
                        <h3> Order History for {user.username}</h3>
                    </StyledHeader>
                    <Row>
                        <Col sm="12">
                        <OrderHistory
                            userid = {String(user.id)}
                            username = {user.username}
                        />
                        </Col>
                    </Row>
                </>
            ): null}
            <Footer/>
        </ApolloProvider>
    );
  }
  export default GetOrders;