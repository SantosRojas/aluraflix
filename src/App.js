
// import { Colors } from "./colors";
import { Banner } from "./components/banner";
import { MyBtnH } from "./components/button";
// import { MyCarousel } from "./components/carousel";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { LogoAF } from "./components/logoalura";
import { GlobalStyle } from "./globalStyle";
import { ListVideos } from "./data/videos";
import { VideosContainer } from "./components/videosContainer";


function App() {
  return (
    <>
    <GlobalStyle />
    <Header>
      <LogoAF />
      <MyBtnH>Nuevo Video</MyBtnH>
    </Header>
    <Banner />
    <VideosContainer listVideos={ListVideos} />
    <Footer />
    </>
  );
}

export default App;
