import Marquee from "react-fast-marquee";
import { Container, Gap, Skill } from "./styles";
export function SkillsHome() {
  return (
    <Container>
      <Marquee pauseOnHover={true} speed={50} gradient = {false}>
        <Skill></Skill>
        <Skill></Skill>
        <Skill></Skill>
        <Skill></Skill>
        <Skill></Skill>
        <Skill></Skill>
        <Skill></Skill>
        <Skill></Skill>
        <Skill></Skill>
        <Skill></Skill>
      </Marquee>
      <Gap/>
      <Marquee pauseOnHover={true} speed={50} gradient = {false} direction={"right"}>
        <Skill></Skill>
        <Skill></Skill>
        <Skill></Skill>
        <Skill></Skill>
        <Skill></Skill>
        <Skill></Skill>
        <Skill></Skill>
        <Skill></Skill>
        <Skill></Skill>
        <Skill></Skill>
      </Marquee>
    </Container>
  );
}
