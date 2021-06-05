import React from "react";

// import "./homepage.styles.scss";

// import MenuItem from "../../components/menu-item/menu-item.component";
import Directory from "../../components/directory/directory.component";
import HomePageContainer from "./homepage.styles";

const HomePage = (props) => {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};

export default HomePage;
