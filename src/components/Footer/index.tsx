import { CiLinkedin } from "react-icons/ci";
import { StyledContainer, StyledFooter, StyledLink } from "./Footer.style";
import { VscGithubAlt } from "react-icons/vsc";

export const Footer = () => {
  return (
    <StyledFooter>
      © 2024 / Desenvolvido por Thiago Sousa / Todos os direitos reservados
      <StyledContainer>
        <StyledLink
          href="https://www.linkedin.com/in/thiagodsousa/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CiLinkedin />
        </StyledLink>

        <StyledLink
          href="https://github.com/thiagodeas"
          target="_blank"
          rel="noopener noreferrer"
        >
          <VscGithubAlt />
        </StyledLink>
      </StyledContainer>
    </StyledFooter>
  );
};
