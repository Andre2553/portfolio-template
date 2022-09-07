import { CustomScroll, HeaderContainer, Logo, NavButton } from "./styles";
import { Timer, Scroll } from "phosphor-react";
import { motion, useScroll } from "framer-motion";
import { NavLink } from "react-router-dom";
import Image from "../../assets/logo";
import { useState } from "react";
export function Header() {
  const { scrollYProgress } = useScroll();
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  return (
    <HeaderContainer>
      <CustomScroll style={{ scaleX: scrollYProgress }} />
      <nav className="">
        <ul>
          <li>
            <NavButton to="/projects">Projects</NavButton>
          </li>
          <button className="hamburger">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="white"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <li>
            <NavButton to="/skills">Skills</NavButton>
          </li>
          <Logo>
            <NavLink to="/">
              <Image />
            </NavLink>
          </Logo>
          <li>
            <NavButton to="/about-me">About Me</NavButton>
          </li>
          <li>
            <NavButton to="/contact-me">Contact Me</NavButton>
          </li>
        </ul>
      </nav>
    </HeaderContainer>
  );
}
