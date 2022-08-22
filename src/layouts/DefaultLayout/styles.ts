import styled from 'styled-components'
import { motion } from "framer-motion";
export const LayoutContainer = styled.div`
   display: flex;
   flex-direction: column;
`;
export const CustomScroll = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 10px;
  background: ${(props) => props.theme['green-300']};
  transform-origin: 0%;

`