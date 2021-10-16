import logo from './logo.svg';
import './App.css';
import Article from './components/Article.jsx';

function App() {
  return (
    <div>
      <Article
        title={'タイトル'}
        content={'コンテント'}
      />
    </div>
  );
}

export default App;
