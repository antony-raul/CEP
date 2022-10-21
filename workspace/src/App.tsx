import { Menu } from './components';
import { Entrypoint } from './pages/entrypoint';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <div className="App">
      <Menu />
      <Entrypoint />
      <GlobalStyle />
    </div>
  );
}

export default App;
