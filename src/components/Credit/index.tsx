import React from "react";
import * as st from "./styles";

const Credit = () => {
  return (
    <st.CreditContainer>
      <footer>Made by Kristian Rykkje</footer>
      <br></br>
      <st.Link
        href="https://github.com/KristianRykkje/ssx3radio"
        target="_blank"
      >
        Github repository
      </st.Link>
    </st.CreditContainer>
  );
};

export default Credit;
