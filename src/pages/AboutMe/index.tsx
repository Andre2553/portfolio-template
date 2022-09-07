import { useLayoutEffect } from "react";
import { AboutMeContainer } from "./styles";

export function AboutMe() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <AboutMeContainer>
      <h1>About Me</h1>
    </AboutMeContainer>
  );
}
