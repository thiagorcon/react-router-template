import { useNavigate } from "react-router-dom";
import {StyledHeader, StyledButton} from "../style"
import { goToForProfilePage, goToHome } from "../routes/coordinator";

function Header() {
  // as funções do onClick foram passadas pelo import e o paramentro usado está na variavel abaixo. essa varriavel ajuda no histórico de paginas acessadas e tb etsá usando o hook Navigate 
  const navigate = useNavigate()

  return (
    <StyledHeader>
      <StyledButton onClick={()=>goToHome(navigate)} >
        Ir para página inicial
      </StyledButton>
      <StyledButton onClick={() =>goToForProfilePage(navigate, 'Thiago')} >
        Ir para página de perfil
      </StyledButton>
    </StyledHeader>
  );
}

export default Header;
