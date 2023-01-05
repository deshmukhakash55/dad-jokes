import React from "react";
import styled, { keyframes } from "styled-components";
import { useDadJoke } from "../hooks/useDadJoke/useDadJoke";
import reloadImage from "../../assets/reload.svg";

export const App = () => {
  const { joke, reload, isLoading } = useDadJoke();

  return (
    <>
      <Container>{joke}</Container>
      <Reload onClick={reload}>
        <ReloadImage
          isLoading={isLoading}
          src={reloadImage}
          height={20}
          width={20}
        />
      </Reload>
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  width: 20rem;
  text-align: center;
  font-size: 18px;
  background-color: white;
  border: 1px solid rgba(147, 147, 147, 0.31);
  border-radius: 4px;
  box-shadow: 3px 10px 10px 1px #0000009b;
`;

const Reload = styled.button`
  border-radius: 50%;
  border: 0;
  height: 2rem;
  width: 2rem;
  position: fixed;
  bottom: 2rem;
  left: 0;
  transform: translateX(calc(50vw - 50%));
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const rotate = keyframes`
	from {
		transform: rotateZ(0deg);
	}
	to {
		transform: rotateZ(360deg);
	}
`;

const ReloadImage = styled.img<{ isLoading: boolean }>`
  animation-name: ${({ isLoading }) => (isLoading ? rotate : "none")};
  animation-iteration-count: infinite;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
`;
