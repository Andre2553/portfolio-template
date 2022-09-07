import styled from "styled-components";

export const ProjectsContainer = styled.div`
   display: flex;
   flex-direction: column;
   padding-top: 20px;
   padding-bottom: 12rem;
   background-image: radial-gradient(circle 800px at 700px 200px, hsl(283 30.0% 11.8%), #16161800), radial-gradient(circle 600px at calc(100% - 300px) 300px, hsl(174 84.8% 10.3%), #16161800), radial-gradient(circle 800px at right center, hsl(201 74.6% 12.2%), #16161800), radial-gradient(circle 800px at right bottom, hsl(205 45.0% 8.6%), #16161800), radial-gradient(circle 800px at calc(50% - 600px) calc(100% - 100px), hsl(319 41.0% 16.0%), hsl(318 25.0% 9.6%), #16161800);
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
