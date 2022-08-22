import { SkillContainer, SkillsList } from "./styles";

export function Skills() {
  return (
    <SkillContainer>
      <h1>Technologies</h1>
      <SkillsList>
        <table>
          <tbody>
            <tr>
              <td>JavaScript</td>
              <td>TypeScript</td>
              <td>HTML</td>
            </tr>
            <tr>
              <td>CSS</td>
              <td>Bootstrap</td>
              <td>Tailwind</td>
            </tr>
            <tr>
              <td>React.js</td>
              <td>React Native</td>
              <td>Unity 3D</td>
            </tr>
            <tr>
              <td>Node.js</td>
              <td>Node-Red</td>
              <td>MongoDB</td>
            </tr>
            <tr>
              <td>C#</td>
              <td>ASP.Net</td>
              <td>C++</td>
            </tr>
            <tr>
              <td>Multer</td>
              <td>Jest</td>
              <td>Knex.js</td>
            </tr>
            <tr>
              <td>Figma</td>
              <td>Adobe Photoshop</td>
              <td>Sony Vegas</td>
            </tr>
            <tr>
              <td>Android Studio</td>
              <td>Java</td>
              <td>Vuforia</td>
            </tr>
            <tr>
              <td>SQLite</td>
              <td>MYSQL</td>
              <td>MS SQL Server</td>
            </tr>
          </tbody>
        </table>
      </SkillsList>
    </SkillContainer>
  );
}
