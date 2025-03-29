import styled from "styled-components";

interface MarginType {
   gap: number;
}

interface LampType {
   color: string;
}

export const Container = styled.div`
   width: 100vw;
   height: 100vh;
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 3vw;
`;

export const Card = styled.div`
   width: 30vw;
   height: 85vh;
   background-color: #e6c7ff;
   border-radius: 100px;
`;

export const TextWrapper = styled.div<MarginType>`
   display: flex;
   flex-direction: column;
   margin-left: 2rem;
   gap: ${(props) => props.gap}vh;

   & > *:first-child {
      margin-top: 0;
   }
   & > *:last-child {
      margin-bottom: 0;
   }
`;

export const Wrapper = styled.div`
   display: flex;
   align-items: center;
   gap: 1.5vw;
`;

export const Lamp = styled.div<LampType>`
   width: 1vw;
   height: 2vh;
   border-radius: 100%;
   background-color: ${(props) => props.color};
   user-select: none;
`;
