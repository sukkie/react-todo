import "./App.css";
import TodoApp from "./components/todo/TodoApp";

function App() {
  return (
    <div className='App'>
      <TodoApp></TodoApp>
      {/* <Counter></Counter> */}
    </div>
  );
}

// function PlayingWithProps(properties) {
//   console.log(properties);
//   return <div></div>;
// }

// function PlayingWithProps2({ property1, property2 }) {
//   console.log(property1);
//   console.log(property2);
//   return <div></div>;
// }

export default App;
