
import { Banner } from "./components/banner";
import { MyBtnH } from "./components/button";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { LogoAF } from "./components/logoalura";
import { GlobalStyle } from "./globalStyle";

function App() {
  return (
    <>
    <GlobalStyle />
    <Header>
      <LogoAF />
      <MyBtnH>Nuevo Video</MyBtnH>
    </Header>
    <Banner />
    <Footer />
    </>
  );
}

export default App;
