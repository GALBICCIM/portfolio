import React from "react";
import useRelativeFontSize from "hooks/useRelativeFontSize";
import * as Style from "styles/Profile.styled";
import { Title, Text } from "styles/Global.styled";
import { PROFILE_DATA } from "constants/CardContent";

const Profile: React.FC = () => {
   const titleSize = useRelativeFontSize(48);
   const subTitleSize = useRelativeFontSize(38);
   const aboutSize = useRelativeFontSize(36);

   return (
      <Style.Container>
         {PROFILE_DATA.title.map((item, index) => {
            return (
               <Style.Card>
                  <Title rem={titleSize} font="NSansBold">
                     {item}
                  </Title>
                  <Style.TextWrapper gap={index === 0 ? 2 : index === 1 ? 10 : 3}>
                     {PROFILE_DATA.content.map((item, index) => {
                        return (
                           <div>
                              <Text rem={subTitleSize} font="NSansBold">
                                 {item[index].label}
                              </Text>
                              <Text rem={aboutSize} font="NSansRegular"></Text>
                           </div>
                        );
                     })}
                  </Style.TextWrapper>
               </Style.Card>
            );
         })}
      </Style.Container>
   );
};

export default Profile;
