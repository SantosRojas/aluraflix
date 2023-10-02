import React from "react";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Main } from "./components/main";
import { GlobalStyle } from "./globalStyle";
import { Home } from "./pages/Home";
import { NuevaCategoria } from "./pages/NuevaCategoria";
import { NuevoVideo } from "./pages/NuevoVideo";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { MyProvider } from "./ContexProvider";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router> {/* Debes envolver todo el contenido de la aplicación con Router */}
        <MyProvider>
          <Header />
          <Main>
            <Routes>
              <Route path="/" element={<Home />} /> {/* Cambia 'index' por '/' */}
              <Route path="/nuevo-video" element={<NuevoVideo />} />
              <Route path="/nueva-categoria" element={<NuevaCategoria />} />
            </Routes>
          </Main>
          <Footer />
        </MyProvider>
      </Router>
    </>
  );
}

export default App;
