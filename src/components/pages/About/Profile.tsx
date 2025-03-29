import React from "react";
import useRelativeFontSize from "hooks/useRelativeFontSize";
import * as Style from "styles/Profile.styled";
import { Title, Text } from "styles/Global.styled";
import { TITLE_LIST, INFO_LIST, CERT_LIST, TECH_LIST } from "constants/CardContent";

const Profile: React.FC = () => {
   const titleSize = useRelativeFontSize(48);
   const labelSize = useRelativeFontSize(38);
   const contentSize = useRelativeFontSize(34);
   const dateSize = useRelativeFontSize(20);
   const langSize = useRelativeFontSize(24);

   return (
      <Style.Container>
         {TITLE_LIST.map((item, index) => {
            return (
               <Style.Card key={index}>
                  <Title rem={titleSize} font="NSansBold">
                     {item}
                  </Title>
                  <Style.TextWrapper gap={index === 0 ? 2 : index === 1 ? 10 : 3}>
                     {index === 0
                        ? INFO_LIST.map((info, infoIndex) => (
                             <div key={infoIndex}>
                                <Text rem={labelSize} font="NSansBold">
                                   {info.label}
                                </Text>
                                {Array.isArray(info.value) ? (
                                   info.value.map((infoValueItem) => (
                                      <div>
                                         <Text rem={contentSize} font="NSansRegular">
                                            {infoValueItem.text}
                                         </Text>
                                         <Text rem={dateSize} font="NSansRegular" style={{ marginLeft: "16px" }}>
                                            {infoValueItem.date}
                                         </Text>
                                      </div>
                                   ))
                                ) : (
                                   <Text rem={contentSize} font="NSansRegular">
                                      {info.value}
                                   </Text>
                                )}
                             </div>
                          ))
                        : index === 1
                        ? CERT_LIST.map((cert, certIndex) => (
                             <div key={certIndex}>
                                <Text rem={labelSize} font="NSansBold">
                                   {cert.label}
                                </Text>
                                <Text rem={dateSize} font="NSansRegular" style={{ marginLeft: "16px" }}>
                                   {cert.date}
                                </Text>
                             </div>
                          ))
                        : TECH_LIST.map((tech, techIndex) => (
                             <div key={techIndex}>
                                <Text rem={labelSize} font="NSansBold">
                                   {tech.label}
                                </Text>
                                {tech.value.map((techValueItem) => (
                                   <Style.Wrapper>
                                      <Text rem={langSize} font="NSansRegular">
                                         {techValueItem.text}
                                      </Text>
                                      <Style.Lamp color={techValueItem.color} />
                                   </Style.Wrapper>
                                ))}
                             </div>
                          ))}
                  </Style.TextWrapper>
               </Style.Card>
            );
         })}
      </Style.Container>
   );
};

export default Profile;
