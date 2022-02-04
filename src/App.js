import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Picture from "./components/Main";

function App() {
  return (
    <div>
      <Nav />
      <Home />
      <Form />
      <Picture />
      <Footer />
    </div>
  );
}

export default App;
