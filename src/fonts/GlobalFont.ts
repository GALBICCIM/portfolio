import { createGlobalStyle } from "styled-components";
import GowunDodum from "./GowunDodum.ttf";

export const GlobalFont = createGlobalStyle`
   @font-face {
      font-family: "GowunDodum";
      src: local("GowunDodum"), url(${GowunDodum}) format("truetype");
      font-style: normal;
   }

   body {
      font-family: "GowunDodum";
   }
`;
