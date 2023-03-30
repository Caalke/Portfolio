import { ChakraProvider } from "@chakra-ui/react";
import './App.css';
import LandingSection from'./components/LandingSection'
import Header from './components/Header'
import ProjectsSection from './components/ProjectsSection'
import Footer from './components/Footer'

// import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <ChakraProvider>

    <div className="App">

      <Header />
      <LandingSection />
      <ProjectsSection />
      <Footer />
    </div>
    </ChakraProvider>

  );
}

export default App;
