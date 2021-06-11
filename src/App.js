import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Header from './layouts/Header';
import Dashboard from './layouts/Dashboard';

function App() {
  return (
    <div className="App">
      <Header/>
      <Dashboard/>
    </div>
  );
}

export default App;
