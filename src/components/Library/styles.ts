import styled from "styled-components";

export const LibraryContainer = styled.div<{ libraryStatus: boolean }>`
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  width: 20rem;
  height: 100%;
  background-color: white;
  box-shadow: 2px 2px 50px rgb(204, 204, 204);
  user-select: none;
  overflow: scroll;
  transform: translateX(${(p) => (p.libraryStatus ? "0%" : "-100%")});
  transition: all 0.5s ease;
  opacity: ${(p) => (p.libraryStatus ? "100" : "0")};
  scrollbar-width: thin;
  scrollbar-color: rgba(155, 155, 155, 0.5) tranparent;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(155, 155, 155, 0.5);
    border-radius: 20px;
    border: transparent;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    z-index: 9;
  }
`;

export const SongContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
`;

export const H2 = styled.h2`
  padding: 2rem;
`;
