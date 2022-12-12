import './App.css';
import Finish from './components/footer/Finish';
import Last from './components/footer/Last';
import Header from './components/header/Header';
import Main from './components/main/Main';

function App() {
  return (
    <div className="App">
      < Header />
      < Main />
      < Finish />
      < Last />
    </div>
  );
}

export default App;
