import { CustomScroll, HeaderContainer, Logo, NavButton } from "./styles";
import { Timer, Scroll } from "phosphor-react";
import { motion, useScroll } from "framer-motion";
import { NavLink } from "react-router-dom";
import Image from "../../assets/logo";
export function Header() {
  const { scrollYProgress } = useScroll();
  return (
    <HeaderContainer>
      <CustomScroll style={{ scaleX: scrollYProgress }} />
      <nav className="">
        <ul>
          <li>
            <NavButton to="/projects">Projects</NavButton>
          </li>
          <li>
            <NavButton to="/skills">Skills</NavButton>
          </li>
          <Logo>
            <NavLink to="/">
              <Image />
            </NavLink>
          </Logo>
          <li>
            <NavButton to="/aboutMe">About Me</NavButton>
          </li>
          <li>
            <NavButton to="/contactMe">Contact Me</NavButton>
          </li>
        </ul>
      </nav>
    </HeaderContainer>
  );
}
