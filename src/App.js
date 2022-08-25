import logo from './logo.svg';
import './App.css';
import Nav from './modules/Nav';
import Form from './modules/Form';
import Feed from './modules/Feed';
import Msgstate from './context/Msgstate';
function App() {
  return (
    <div className="App">
      <Msgstate>

        <Nav/>
        <Form/>
        <Feed/>
      </Msgstate>

    </div>
  );
}

export default App;
