import React from "react";
import { FadeIn, Flip } from "./examples";

type TAppProps = {};

const App: React.FC<TAppProps> = () => {
  return (
    <>
      <h2>Fade in example</h2>
      <FadeIn />
      <h2>Flip example</h2>
      <Flip />
    </>
  );
};

export default App;
