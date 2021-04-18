import Head from "next/head";
import { useState } from "react";
import styled from "styled-components";

const StyledContainer = styled.main`
  display: flex;
  justify-content: center;
`;

const handleSubmit = (e) => {
  e.preventDefault();
};

const handleChange = (e) => {
  e.preventDefault();
  console.log(e.target.value);
};

export default function Home() {
  return (
    <div>
      <Head>
        <title>Todo app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>To do app</h1>

      <StyledContainer>
        <form onSubmit={handleSubmit}>
          <label>
            ToDo
            <input onChange={handleChange} type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </StyledContainer>
    </div>
  );
}
