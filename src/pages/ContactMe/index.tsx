import { useLayoutEffect } from "react";
import { ContactMeContainer } from "./styles";

export function ContactMe() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <ContactMeContainer>
      <h1>Contact Me</h1>
    </ContactMeContainer>
  );
}
