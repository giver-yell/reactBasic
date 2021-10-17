import logo from './logo.svg';
import './App.css';
import Article from './components/Article.jsx';
import TextInput from './components/TextInput.jsx';

function App() {
  return (
    <div>
      <Article
        title={'タイトル'}
        content={'コンテント'}
      />
      <TextInput />
    </div>
  );
}

export default App;
