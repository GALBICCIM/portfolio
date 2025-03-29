import styled from "styled-components";

export const Container = styled.div`
   width: 100vw;
   height: 100vh;
   display: flex;
   align-items: center;
   justify-content: center;
`;

export const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   margin-top: 10vh;
   gap: 15vh;
`;

export const TextWrapper = styled.div`
   display: flex;
   gap: 1.5vw;
`;

export const Symbol = styled.div`
   width: min(10vw, 10vh);
   height: min(10vw, 10vh);
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 100px;
   background-color: #241b32;
   margin-left: 2rem;
`;
