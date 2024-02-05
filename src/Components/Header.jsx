import React from "react";
import styled from "styled-components";
const Container = styled.div`
  background-color: #f2f2f2;
`;

const Header = () => {
  return (
    <div>
      <Container>
        <h1>Welcome to the blog</h1>
      </Container>
    </div>
  );
};

export default Header;
