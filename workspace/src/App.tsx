import { Menu } from './components';
import { Home } from './pages';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <div className="App">
      <Menu />
      <Home />
      <GlobalStyle />
    </div>
  );
}

export default App;
