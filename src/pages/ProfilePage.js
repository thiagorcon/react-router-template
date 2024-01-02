import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { MainContainer } from "../style";

function ProfilePage() {
  // a varievel abaixo está usando um hook que faz puxar dado - nome - da url. Com que pegando por props mas da URL
const {name} = useParams()

  return (
    <MainContainer>
      <Header />
      <h1>Página acerca do {name}</h1>
    </MainContainer>
  );
}

export default ProfilePage;
