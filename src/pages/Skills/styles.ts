import styled from 'styled-components';

export const SkillContainer = styled.main`
 flex: 1;
   padding: 8rem 10rem 0 10rem;

   display: flex;
   flex-direction: column;
   
   h1 { 
      font-size: 2rem;
      text-align: center;
      color: ${(props) => props.theme['gray-100']};
   }

`;
export const SkillsList = styled.div`
   flex: 1;
   overflow: auto;
   margin-top: 2rem;

   table{ 
      width: 100%;
      border-collapse: collapse;
      min-width: 600px;

      th {
         
         padding: 1rem;
         text-align: center;
         color: ${(props) => props.theme['gray-100']};
         font-size: 0.875rem;
         line-height: 1.6;
      }
      td {
         padding: 1rem;
         border-top: 4px solid ${(props) => props.theme['gray-800']};
         font-size: 1.5rem;
         line-height: 1.6;
         text-align: center;
      }
   }
`
