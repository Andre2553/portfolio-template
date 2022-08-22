import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ProjectContainer = styled(motion.div)`
   width: 80rem ;
   height: 40rem;
   margin-top:2rem;
   border-radius: 10px;
   background-color: ${(props) => props.theme["gray-800"]};
   display: flex;

`;
