import React from "react";
import * as Style from "styles/Profile.styled";
import { Text, Title } from "styles/Global.styled";

const Profile: React.FC = () => (
   <Style.Container>
      <Style.Card>
         <Title rem={3} font="NSansBold">
            인적 사항
         </Title>
         <Style.TextWrapper gap={2}>
            <div>
               <Text rem={2.375} font="NSansBold">
                  이름
               </Text>
               <Text rem={2.125} font="NSansRegular">
                  박승원
               </Text>
            </div>
            <div>
               <Text rem={2.375} font="NSansBold">
                  전화번호
               </Text>
               <Text rem={2} font="NSansRegular">
                  010-3158-3683
               </Text>
            </div>
            <div>
               <Text rem={2.375} font="NSansBold">
                  E-mail
               </Text>
               <Text rem={2} font="NSansRegular">
                  godvictory0909@gmail.com
               </Text>
            </div>
            <div>
               <Text rem={2.375} font="NSansBold">
                  학력사항
               </Text>
               <Text rem={2} font="NSansRegular">
                  - 세일중학교
               </Text>
               <Text rem={1.25} font="NSansRegular" style={{ marginLeft: "16px" }}>
                  (2020. 3. 2.~2023. 2. 3)
               </Text>
               <Text rem={2} font="NSansRegular">
                  - 한세사이버보안고등학교
               </Text>
               <Text rem={1.25} font="NSansRegular" style={{ marginLeft: "16px" }}>
                  (2023. 3. 2.~)
               </Text>
            </div>
         </Style.TextWrapper>
      </Style.Card>
      <Style.Card>
         <Title rem={3} font="NSansBold">
            자격증 취득 내역
         </Title>
         <Style.TextWrapper gap={10}>
            <div>
               <Text rem={2.375} font="NSansRegular">
                  - 정보처리기능사
               </Text>
               <Text rem={1.25} font="NSansRegular" style={{ marginLeft: "20px" }}>
                  (2024. 4. 17.)
               </Text>
            </div>
            <div>
               <Text rem={2.375} font="NSansRegular">
                  - GTQ 포토샵 1급
               </Text>
               <Text rem={1.25} font="NSansRegular" style={{ marginLeft: "20px" }}>
                  (2023. 9. 15.)
               </Text>
            </div>
            <div>
               <Text rem={2.375} font="NSansRegular">
                  - ITQ OA Master
               </Text>
               <Text rem={1.25} font="NSansRegular" style={{ marginLeft: "20px" }}>
                  (2023. 11. 9.)
               </Text>
            </div>
         </Style.TextWrapper>
      </Style.Card>
      <Style.Card>
         <Title rem={3} font="NSansBold">
            기술 스택
         </Title>
         <Style.TextWrapper gap={3}>
            <div>
               <Text rem={2.375} font="NSansBold">
                  Language
               </Text>
               <Style.Wrapper>
                  <Text rem={1.5} font="NSansRegular">
                     - Javascript{"\n"}- Typescript{"\n"}- Python{"\n"}- JAVA{"\n"}- C
                  </Text>
                  <div>
                     <Style.Lamp color="#7DFF7D" marginTop={1.11} />
                     <Style.Lamp color="#7DFF7D" marginTop={1.29} marginBot={1.29} />
                     <Style.Lamp color="#FFFF7D" marginTop={1.29} marginBot={1.29} />
                     <Style.Lamp color="#FFFF7D" marginTop={1.29} marginBot={1.29} />
                     <Style.Lamp color="#FF7D7D" />
                  </div>
               </Style.Wrapper>
            </div>
            <div>
               <Text rem={2.375} font="NSansBold">
                  Framework
               </Text>
               <Style.Wrapper>
                  <Text rem={1.5} font="NSansRegular">
                     - React.js{"\n"}- Spring Boot{"\n"}- FastAPI
                  </Text>
                  <div>
                     <Style.Lamp color="#7DFF7D" marginTop={1.11} />
                     <Style.Lamp color="#FF7D7D" marginTop={1.29} marginBot={1.29} />
                     <Style.Lamp color="#FF7D7D" />
                  </div>
               </Style.Wrapper>
            </div>
            <div>
               <Text rem={2.375} font="NSansBold">
                  Other
               </Text>
               <Style.Wrapper>
                  <Text rem={1.5} font="NSansRegular">
                     - HTML{"\n"}- CSS
                  </Text>
                  <div>
                     <Style.Lamp color="#7DFF7D" marginTop={1.11} marginBot={1.29} />
                     <Style.Lamp color="#7DFF7D" marginTop={1.29} />
                  </div>
               </Style.Wrapper>
            </div>
         </Style.TextWrapper>
      </Style.Card>
   </Style.Container>
);

export default Profile;
