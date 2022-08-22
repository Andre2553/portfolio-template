import { useContext, useEffect, useState } from "react";
import { SkillsHome } from "./Components/Skills";
import { Video } from "./Components/Video";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <Video />
      <SkillsHome/>
    </HomeContainer>
  );
}
