import Head from "next/head";
import { useState } from "react";
import styled from "styled-components";

const StyledContainer = styled.main`
  display: flex;
  justify-content: center;
`;

export default function Home() {
  const [toDo, setTodo] = useState([]);
  // todo get this submisson of to do item to display on page possibly make another component for to list items
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ toDo });
  };

  // function to handle the text being typed
  const handleChange = (e) => {
    e.preventDefault();
    setTodo(e.currentTarget.value);
    //console.log(e.target.value);
  };

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
            ToDo's
            <input
              name="todo"
              type="text"
              value={toDo}
              onChange={handleChange}
            />
          </label>
          <button>Submit</button>
        </form>
      </StyledContainer>
      <StyledContainer>
        <p>{toDo}</p>
      </StyledContainer>
    </div>
  );
}
