import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ProjectContainer = styled(motion.div)`
   width: 60vw ;
   height: 60vh;
   margin-top:8rem;
   border-radius: 10px;
   background-color: ${(props) => props.theme["gray-800"]};
   display: flex;

`;
