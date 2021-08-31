import React from "react";

import { Loading } from "./styles";

const LoadingEllipsis = () => {
  return (
    <Loading className="ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </Loading>
  );
};

export default LoadingEllipsis;
