import React from "react";

import { SpinnerOverlay, SpinnerContainer } from "./spinner.styles";

const Spinner = props => {
  return (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  );
};

export default Spinner;
