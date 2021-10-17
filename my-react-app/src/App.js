import logo from './logo.svg';
import './App.css';
import {TextInput, Article, Counter, ToggleButton} from './components';

function App() {
  return (
    <div>
      <Article
        title={'タイトル'}
        content={'コンテント'}
      />
      <TextInput />
      <Counter />
      <ToggleButton />
    </div>
  );
}

export default App;
