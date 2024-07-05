import AppProviders from './Providers/AppProviders';
import './App.css';
import Users from './components/Users/Users';

function App() {
  return (
    <AppProviders>
      <div className="App">
        <Users />
      </div>
    </AppProviders>

  );
}

export default App;