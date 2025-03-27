import { createGlobalStyle } from "styled-components";
import HappinessSansBold from "./HappinessSansBold.ttf";
import HappinessSansRegular from "./HappinessSansRegular.ttf";
import NotoSansKRBold from "./NotoSansKRBold.ttf";
import NotoSansKRRegular from "./NotoSansKRRegular.ttf";

export const GlobalFont = createGlobalStyle`
   @font-face {
      font-family: "HSansBold";
      src: local("HappinessSansBold"), url(${HappinessSansBold}) format("truetype");
      font-style: normal;
   }
   @font-face {
      font-family: "HSansRegular";
      src: local("HappinessSansRegular"), url(${HappinessSansRegular}) format("truetype");
      font-style: normal;
   }
   @font-face {
      font-family: "NSansBold";
      src: local("NotoSansKRBold"), url(${NotoSansKRBold}) format("truetype");
      font-style: normal;
   }
   @font-face {
      font-family: "NSansRegular";
      src: local("NotoSansKRRegular"), url(${NotoSansKRRegular}) format("truetype");
      font-style: normal;
   }
`;
