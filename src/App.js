import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";

function App() {
  return (
    <ChakraProvider>
        <main width={{base: "0em", sm: "30em", md: "48em", lg: "62em", xl: "80em"}}>
          <Header />
          <LandingSection />
          <ProjectsSection />
          <Footer />
        </main>
    </ChakraProvider>
  );
}

export default App;
