import styled from "styled-components";

interface MarginType {
   gap?: number;
}

interface LampType {
   color: string;
   marginTop?: number;
   marginBot?: number;
}

export const Container = styled.div`
   width: 100vw;
   height: 100vh;
   display: flex;
   align-items: center;
   justify-content: center;
`;

export const Card = styled.div`
   width: 30vw;
   height: 85vh;
   margin: 0 3vw;
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
   width: 40%;
   display: flex;
   justify-content: space-between;
`;

export const Lamp = styled.div<LampType>`
   width: 20px;
   height: 20px;
   border-radius: 100%;
   background-color: ${(props) => props.color};
   margin-top: ${(props) => props.marginTop || 0}vh;
   margin-bottom: ${(props) => props.marginBot || 0}vh;
`;
