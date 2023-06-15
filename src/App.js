import Home from './components/pages/Home/Home'
import Provider from './context/Provider';


function App() {
  return (
    <Provider>
      <Home />
    </Provider>
  );
}

export default App;
