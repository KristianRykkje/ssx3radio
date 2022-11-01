import styled from "styled-components";

export const RadioContainer = styled.div<{
  libraryStatus: boolean;
}>`
  transition: all 0.5s ease;
  margin-left: ${(p) => (p.libraryStatus ? "20rem" : "0")};
  @media screen and (max-width: 768px) {
    margin-left: 0;
  }
`;
