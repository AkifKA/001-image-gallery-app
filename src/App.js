import HomePage from "./pages/HomePage";
import "./styles/style.css";
import data from "./utils/data";
console.log(data);
function App() {
  return <HomePage data={data} />;
}

export default App;
