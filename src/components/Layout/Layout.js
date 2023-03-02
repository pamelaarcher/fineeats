/* /components/Layout.js */

import React, { useContext } from "react";
import Head from "next/head";
import Link from "next/link";
import {Wrapper} from "../../lib/GlobalStyles";
import {StyledLayout} from "./Layout.styles"
import { Navigation } from "../Navigation/Navigation";
import AppContext from "../context";

const Layout = (props) => {
const title = "Food Express";
const {user} = useContext(AppContext);

  return (
    <Wrapper>
      <header>
        <Navigation
          // user={user}
        />
      </header>
      <StyledLayout>{props.children}</StyledLayout>
    </Wrapper>
  );
};

export default Layout;