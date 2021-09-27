import react from 'react'; // готовность работать с реакт 
import './App.css';
import Header from './components/header';
import HomeContent from './components/HomeContent';
import About from './components/About';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <main className="main">
        <Header />
        <div className="appWraperPages">
          <Route exact component={HomeContent} />
          <Route exact component={About} />
        </div>
      </main>
    </BrowserRouter>
  );
}


export default App;
