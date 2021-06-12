// import MovieItem from "./components/Movie/MovieItem";
import IndexPage from "./components/Index/index"
import { ChakraProvider } from "@chakra-ui/react";
function App() {
  return (
      <ChakraProvider>
        <IndexPage />
      </ChakraProvider>
  );
}

export default App;
