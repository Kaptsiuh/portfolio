import "./App.css";
import styled from "styled-components";
import { Header } from "./layout/header/Header";
import { Main } from "./layout/sections/main/Main";
import { Skills } from "./layout/sections/skills/Skills";
import { Works } from "./layout/sections/works/Works";
import { Testimony } from "./layout/sections/testimony/Testimony";
import { Contacts } from "./layout/sections/contacts/Contacts";
import { Footer } from "./layout/footer/Footer";
import { Particle } from "./components/particle/Particle";
import GoTopBtn from "./components/particle/goTopBtn/GoTopBtn";

function App() {
  return (
    <div className="App">
      <Particle />
      <Header />
      <Main />
      <Skills />
      <Works />
      <Testimony />
      <Contacts />
      <Footer />
      <GoTopBtn />
    </div>
  );
}

export default App;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #e91e63;
`;
