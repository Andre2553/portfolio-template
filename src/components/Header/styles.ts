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
      display: flex;
      gap: 0.5rem;
      ul{
         width: unset;
         flex-direction: row;
         align-items: center;
         justify-content: center;
         margin: unset;
         padding: 0 2rem;
         display: flex;
         list-style: none;
      }
   }
`;
export const Logo = styled.li`
   width: 50rem;
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
      color: ${(props) => props.theme['gray-300']};
      background-color: ${(props) => props.theme['green-500']}; ;
   }
      
      
`