import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { animated, config, useSprings } from "react-spring";
import { useInView } from "react-intersection-observer";

type TFadeInWhenInViewProps = {};

const bgColors = ["black", "yellow", "green", "blue"];

type TRtnCheckIsInViewHook = {
  isInView: boolean;
  ref: ReturnType<typeof useInView>[0];
};

const useCheckIsInView = (): TRtnCheckIsInViewHook => {
  const { inView, ref } = useInView();
  const [isInView, setIsInView] = useState<boolean>(false);

  useEffect(() => {
    if (inView) {
      setIsInView(() => true);
    }
  }, [inView]);

  return {
    ref,
    isInView,
  };
};

const FadeInWhenInView: React.FC<TFadeInWhenInViewProps> = () => {
  const { isInView, ref } = useCheckIsInView();
  const [props, api] = useSprings(
    4,
    (i) => ({
      to: { opacity: isInView ? 1 : 0 },
      from: { opacity: 0 },
      config: config.molasses,
      delay: 200 + i * 100,
    }),
    [isInView]
  );

  return (
    <>
      <div style={{ height: "1600px", backgroundColor: "red" }} />
      <Container ref={ref}>
        {props.map((style, i) => (
          <ColorBox style={style} bgColor={bgColors[i]} />
        ))}
      </Container>
    </>
  );
};

export default FadeInWhenInView;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 420px;
`;

const ColorBox = styled(animated.div)<{ bgColor?: string }>`
  width: 200px;
  height: 200px;
  background-color: ${({ bgColor = "red" }) => bgColor};
  margin-right: 10px;
  margin-bottom: 10px;
`;
