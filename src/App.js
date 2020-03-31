import React from "react";
import Checkbox from "./Checkbox";
import styled from "styled-components";

const Wrapper = styled.div`
  font-family: sans-serif;
`;
const Content = styled.span`
  margin-left: 5px;
`;
const Header = styled.p``;

const genres = ["Romance", "Action", "Drama", "Comedy"];
export default function App() {
  return (
    <Wrapper>
      <>
        <Header>Select Genre</Header>
        {genres.map((g, i) => (
          <Checkbox name={"genre"} value={g}>
            <Content>{g}</Content>
          </Checkbox>
        ))}
      </>
    </Wrapper>
  );
}
