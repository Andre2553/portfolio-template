import styled from "styled-components";
export const FooterContainer = styled.section`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 18vh;
        background: black;
        p{ 
                width: 50%;
        }
        a{
                text-decoration: none;
                color: white;
                margin-left: 18px ;
                display: flex;
                align-items: center;
                justify-content: center;
        }
        @media (max-width: 768px) {
                flex-direction: column-reverse;
                font-size: 0.7rem;

                p{
                        text-align: center;
                        width: 100%;
                        margin-top: 1rem ;
                }
                a{
                        margin-top: 1rem ;
                }
        }
`