import React from "react";
import { animated, useSpring, UseSpringProps } from "react-spring";

type TFadeInProps = {};

const FadeIn: React.FC<TFadeInProps> = () => {
  const options: UseSpringProps = {
    to: { opacity: 1 },
    from: { opacity: 0 },
  };
  const style = useSpring(options);

  return <animated.div style={style}>I will fade in</animated.div>;
};

export default FadeIn;
