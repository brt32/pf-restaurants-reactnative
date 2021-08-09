import React from "react";
import styled from "styled-components/native";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { Text } from "../../../components/typography/text.component";

const AboutArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;

export const AboutScreen = () => {
  return (
    <AboutArea>
      <Text center>Created by Bartlomiej Proczkowski</Text>
    </AboutArea>
  );
};
