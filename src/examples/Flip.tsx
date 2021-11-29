import React, { useState } from "react";
import { animated, config, useSpring } from "react-spring";

type TFlipProps = {};

type TVoidReturnFunc = () => void;

const Flip: React.FC<TFlipProps> = () => {
  const [flip, setFlip] = useState<boolean>(false);
  const onRest: TVoidReturnFunc = () => {
    console.log("onRest");
    setFlip((flip) => !flip);
  };

  const style = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 200,
    config: config.molasses,
    onRest,
  });

  return <animated.div style={style}>Hello</animated.div>;
};

export default Flip;
