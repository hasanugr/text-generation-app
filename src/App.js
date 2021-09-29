import "./App.css";
import "./bootstrap.min.css";

import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="App container">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
