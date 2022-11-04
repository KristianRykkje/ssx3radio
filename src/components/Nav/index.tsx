import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import * as st from "./styles";
import { INavProps } from "./types";

const Nav: React.FC<INavProps> = ({ libraryStatus, setLibraryStatus }) => {
  return (
    <st.NavContainer>
      <st.H1 libraryStatus={libraryStatus}>SSX 3 Radio Big</st.H1>
      <st.Button onClick={() => setLibraryStatus(!libraryStatus)}>
        <span>Library</span>
        <FontAwesomeIcon icon={faMusic} />
      </st.Button>
    </st.NavContainer>
  );
};

export default Nav;
