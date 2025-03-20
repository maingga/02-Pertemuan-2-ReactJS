import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Counter from "./components/Counter";
import Greeting from "./components/Greeting";
import Form from "./components/Form";
import TodoList from "./components/TodoList"; 

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Greeting name="Nana" />
      <Counter />
      <Form />
      <TodoList /> 
      <Footer />
    </div>
  );
}

export default App;
