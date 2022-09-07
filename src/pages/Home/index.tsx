import { useContext, useEffect, useLayoutEffect, useState } from "react";
import { SkillsHome } from "./Components/Skills";
import { Video } from "./Components/Video";
import { HomeContainer } from "./styles";

export function Home() {
  useLayoutEffect(()=>{
    window.scrollTo(0,0)
  })
  return (
    <HomeContainer>
      <Video />
      <SkillsHome/>
    </HomeContainer>
  );
}
