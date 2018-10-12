import React from "react";
import styled from "react-emotion";

import Nav from "../components/navigation";

const Layout = styled.div`
max-width: 700px;
margin: 0 auto;
`

export default ({ children }) => (
  <Layout>
    <Nav />
    <hr />
    {children}
  </Layout>
);
