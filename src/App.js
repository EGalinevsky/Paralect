import logo from './logo.svg';
import './App.css';
import { Header } from './components/header/header';
import { Main } from './components/main/MainScreen';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
