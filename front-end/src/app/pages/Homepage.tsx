// import * as React from "react";
// import Button from "@mui/material/Button";

import { Carousel } from "../_components/Carousel";
import { Header } from "../_components/Header";

// export default function ButtonUsage() {
//   return <Button variant="contained">Hello world</Button>;
// }

export const HomePage = () => {
  return (
    <div className="w-full ">
      <Header />
      <Carousel />
    </div>
  );
};
