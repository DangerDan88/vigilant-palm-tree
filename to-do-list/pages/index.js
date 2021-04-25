import Head from "next/head";
import { useState } from "react";
import styled from "styled-components";
import useInputState from "../components/useInputState";

const StyledContainer = styled.main`
  display: flex;
  justify-content: center;
`;

export default function Home({ setToDo }) {
  const { value, reset, onChange } = useInputState("");

  //  const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log({ toDo });
  // };
  //todo figure out how to save to do list on submit of form fix export structure for components have a next js error

  return (
    <div>
      <Head>
        <title>Todo app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>To do app</h1>

      <StyledContainer>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            setToDo(value);
            reset("");
          }}
        >
          <label>
            ToDo's
            <input name="todo" type="text" value={value} onChange={onChange} />
          </label>
          <button>Submit</button>
        </form>
      </StyledContainer>
      <StyledContainer>
        <p></p>
      </StyledContainer>
    </div>
  );
}
