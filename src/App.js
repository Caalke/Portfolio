import { ChakraProvider } from "@chakra-ui/react";
import './App.css';
import LandingSection from'./components/LandingSection'
import Header from './components/Header'
import ProjectsSection from './components/ProjectsSection'
import Footer from './components/Footer'
import { BrowserRouter as Router } from "react-router-dom";

// import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
   <Router>
    <ChakraProvider>

    <div className="App">

      <Header />
      <LandingSection />
      <ProjectsSection />
      <Footer />
    </div>
    </ChakraProvider>
    
    </Router>
  );
}

export default App;
