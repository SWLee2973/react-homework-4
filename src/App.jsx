import './App.css';
import { Cover, Messenger } from './components';
import { useCover } from './hooks';

function App() {
  const cover = useCover();

  return (
    <>
      {cover ? <Cover /> : <Messenger />}
    </>
  );
}

export default App;
