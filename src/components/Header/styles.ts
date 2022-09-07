import styled from "styled-components";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
export const HeaderContainer = styled.header`
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   display: flex;
   align-items: center;
   justify-content: center;
   height: 6rem;
   box-shadow: inset 0 -1px 0 #29292e;
   background:#121214;
   z-index: 100;

   nav{ 
      @media (min-width: 768px) {
         display: flex;
         justify-content: space-between;
         padding-bottom: 0;
         height: 70px;
         align-items: center;
      }
      display: flex;
      gap: 0.5rem;
      ul{
         width: unset;
         flex-direction: row;
         align-items: center;
         justify-content: center;
         margin: unset ;
         padding: 0 2rem;
         display: flex;
         list-style: none;
         margin-top: 10px ;
      }
   }
   .hamburger{
      border: 0;
  height: 40px;
  width: 40px;
  padding: 0.5rem;
  border-radius: 50%;
  background-color: #283b8b;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
// positions the icon to the right and center aligns it vertically
  position: absolute;
  top: 50%;
  right: 25px;
  transform: translateY(-50%);
  display: none;
}
.hamburger:hover {
  background-color: #2642af;
}
@media screen and (max-width: 768px) {
  .hamburger {
    display: block;
  }
}

`;
export const Logo = styled.li`
   width: 50vw;
   height: 3rem;
   margin-top:20px ;
   display: flex;
   align-items: center;
   justify-content: center;

   a{
      text-decoration: none;
      &:hover{
         border-bottom: none;
      }
      &:focus{
         color: none;
         box-shadow: none;
      }
   }

`
export const CustomScroll = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 10px;
  background: ${(props) => props.theme['green-300']};
  transform-origin: 0%;

`
export const NavButton = styled(NavLink)`
   width: 10rem;
   height: 3rem;
   font-size: 1.2rem;
   font-weight: bold;
   display: flex;
   align-items: center;
   justify-content: center;
   text-decoration: none;
   color: ${(props) => props.theme['gray-100']};
   border-top: 3px solid transparent;
   border-bottom: 3px solid transparent;
   &:hover{
      border-bottom: 3px solid ${(props) => props.theme['green-500']};
   }
   &.active{
      background-color: ${(props) => props.theme['green-500']}; ;
   }
   @media screen and (max-width: 768px) {

    display: none;
  
}
      
      
`