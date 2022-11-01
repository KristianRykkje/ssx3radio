import styled from "styled-components";

export const LibrarySongContainer = styled.div<{
  isActive: boolean;
}>`
  padding: 0 2rem 0 2rem;
  height: 100px;
  width: 100%;
  display: flex;
  transition: all 0.3s ease;
  background-color: ${(p) => (p.isActive ? "pink" : "white")};
  &:hover {
    background-color: lightblue;
    transition: all 0.3s ease;
  }
  &.active {
    background-color: pink;
  }
`;

export const LibrarySongDescription = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Img = styled.img`
  margin: 20px 0;
  height: 60px;
`;

export const H1 = styled.h3`
  padding-left: 1rem;
  font-size: 1rem;
`;

export const H2 = styled.h4`
  padding-left: 1rem;
  font-size: 0.7rem;
`;
