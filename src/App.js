
import './App.css';
import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <div className="todo-container">
        <div className="todo-wrap">
          <Header/>
          <List/>
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;
