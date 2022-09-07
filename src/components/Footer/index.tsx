import { GithubLogo, LinkedinLogo } from "phosphor-react";
import { Link } from "react-router-dom";
import { FooterContainer } from "./styles";

export function Footer() {
  return (
    <FooterContainer>
      <p>Copyright © 2022 Andre Rodrigues Lima</p>
      <Link to="https://github.com/Andre2553"><GithubLogo size={20}/> Github</Link>
      <Link to="https://www.linkedin.com/in/andrerodrigueslima/"> <LinkedinLogo size={20}/> LinkedIn</Link>
    </FooterContainer>
  );
}
