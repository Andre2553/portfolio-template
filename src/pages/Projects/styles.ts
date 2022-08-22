import styled from "styled-components";

export const ProjectsContainer = styled.div`
   display: flex;
   flex-direction: column;
   margin-top: 120px;
   h1{ 
      font-size: 2rem;
      text-align: center;
      color: ${(props) => props.theme["gray-100"]};
   }
`;
export const ProjectsList = styled.div`
   flex: 1;
   overflow: auto;
   div{
      :nth-child(even){
         background-color: ${(props) => props.theme["gray-800"]};
         align-items: flex-start;
         margin-left: auto;
      }
      :nth-child(odd){
         background-color: ${(props) => props.theme["gray-700"]};
         
      }
   }
   `;
