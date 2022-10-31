import styled from "styled-components";

export const StyledContainer = styled.div`
  display: grid;
  place-content: center;
  height: 100%;
  background-color: #000;
  color: #fff;

  select {
    background-color: #000;
    border: 1px solid #fff;
    border-radius: 5px;
    color: #fff;
    font-size: 1.5rem;
    padding: 0.5rem;
    margin: 1rem;

    @media (max-width: 768px) {
      font-size: 1rem;

      &:focus {
        font-size: 1.5rem;
      }
    }
  }
`;
