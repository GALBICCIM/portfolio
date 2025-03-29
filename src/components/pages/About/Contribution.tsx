import React from "react";
import useRelativeFontSize from "hooks/useRelativeFontSize";
import * as Style from "styles/Contribution.styled";
import { Text, Title, Card } from "styles/Global.styled";
import { CONTRIBUTION_OBJ } from "constants/ContributionContent";

const Contribution: React.FC = () => {
   const mainSize = useRelativeFontSize(48);
   const subSize = useRelativeFontSize(32);

   return (
      <Style.Container>
         <Card vw={93}>
            <Title rem={mainSize} font="NSansBold">
               저는 학교에 이러한 기여를 했습니다.
            </Title>
            <Style.Wrapper>
               {CONTRIBUTION_OBJ.subTitle.map((item, index) => (
                  <Style.TextWrapper>
                     <Style.Symbol>
                        <Text rem={mainSize} font="NSansBold" color="white">
                           {index + 1}
                        </Text>
                     </Style.Symbol>
                     <div>
                        <Text rem={mainSize} font="NSansBold">
                           {item}
                        </Text>
                        {index === 0 ? (
                           <Text rem={subSize} font="NSansRegular">
                              {CONTRIBUTION_OBJ.content[index][index]}
                              {"\n"}
                              {CONTRIBUTION_OBJ.content[index][index + 1]}
                           </Text>
                        ) : (
                           <Text rem={subSize} font="NSansRegular">
                              {CONTRIBUTION_OBJ.content[index][index - 1]}
                              {"\n"}
                              {CONTRIBUTION_OBJ.content[index][index]}
                           </Text>
                        )}
                     </div>
                  </Style.TextWrapper>
               ))}
            </Style.Wrapper>
         </Card>
      </Style.Container>
   );
};

export default Contribution;
