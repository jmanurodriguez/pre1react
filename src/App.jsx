import React from "react";

import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";


function App() {

  return (

    <ChakraProvider>
    <Navbar /> 
    <ItemListContainer greeting="Probando cosas nuevas en Ract JS!!!"/>
    <Footer />
    </ChakraProvider>

  );

}

export default App;