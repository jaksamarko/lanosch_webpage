import About from "../components/About";
import Contact from "../components/Contact";
import Events from "../components/Events";
import Faq from "../components/Faq";
import Header from "../components/Header";
import JustDance from "../components/JustDance";
import Team from "../components/Team";

const MainLayout = () => {
  return (
    <>
      <Header />
      <About />
      <Team />
      <JustDance />
      <Events />
      <Faq />
      <Contact />
    </>
  );
};

export default MainLayout;
