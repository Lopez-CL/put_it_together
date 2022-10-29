import './App.css';
import PersonProfile from './components/PersonProfile';
function App() {
  return (
    <div className="App">
      <PersonProfile fName={"Janice"} lName={"Doe"} age={29} hairColor={"Black"} />
      <PersonProfile fName={"Juan"} lName={"Santiago"} age={45} hairColor={"Red"} />
    </div>
  );
}

export default App;
