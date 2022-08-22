import styled from "styled-components";

export const ProjectsContainer = styled.div`
   display: flex;
   flex-direction: column;
`;
export const ProjectsList = styled.div`
   flex: 1;
   overflow: auto;
   `;
export const Project = styled.div`
   width: 396px ;
   height: 264px;
   border-radius: 10px;
   background-color: ${(props) => props.theme["gray-800"]};
   display: flex;
`