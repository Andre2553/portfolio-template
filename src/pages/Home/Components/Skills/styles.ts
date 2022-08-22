import styled from 'styled-components';

export const Container = styled.div`
   margin-top: 20px;
   height: 70vh;
   width: 100%;
`;
export const Skill = styled.div`
   width: 396px ;
   height: 264px;
   border-radius: 10px;
   background-color: ${(props) => props.theme['gray-800']};
   display: flex;
   align-items: center;
   margin-right: 50px ;
`
export const Gap = styled.div`
   margin-top: 20px;
   height: 10px;
   width: 10px;
`