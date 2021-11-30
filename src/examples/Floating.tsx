import React, { useState } from "react";
import { animated, SpringConfig, useSpring } from "react-spring";
import styled from "styled-components";

type TFloatingProps = {};

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

const FloatingBox = styled(animated.div)`
  width: 20px;
  height: 100px;
  background-color: blue;
  margin-right: 20px;
`;

const FloatingElement: React.FC<
  { config?: SpringConfig } & React.ComponentPropsWithoutRef<"div">
> = ({ config, style, ...props }) => {
  const [float, setFloat] = useState<boolean>(false);
  const { y } = useSpring({
    to: { y: 30 },
    from: { y: 0 },
    reset: true,
    reverse: float,
    config: {
      tension: 45,
      friction: 10,
      precision: 0,
      clamp: true,
      ...config,
    },
    // delay: 200,
    onRest: () => setFloat((f) => !f),
  });
  return <FloatingBox style={{ ...style, y }} {...props} />;
};

const Floating: React.FC<TFloatingProps> = () => {
  return (
    <Container>
      <FloatingElement config={{}} />
      <FloatingElement config={{}} style={{ backgroundColor: "green" }} />
    </Container>
  );
};

export default Floating;
