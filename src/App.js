import GlobalStyle from "./base-styles";

import Container from "./components/Container";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ArticleCard from "./components/ArticleCard";

function App() {
  //I want the context to go directly to ArticleCard so only the components who need access to the information has

  return (
    <>
      <GlobalStyle />
      <main className="App">
        <Header />

        {/* TODO: Blog things goes here. Use the components folder! */}
        <Container>
          <ArticleCard />
        </Container>

        <Footer />
      </main>
    </>
  );
}

export default App;
