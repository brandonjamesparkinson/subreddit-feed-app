import React, {useState, useEffect} from 'react';

function App() {
  const [articles, setArticles] = useState([]);
  const [subreddit, setSubreddit] = useState('webdev');

  useEffect(() => {
    fetch("https://www.reddit.com/r/webdev.json")
  }, [subreddit]);

  return (
    <div className="App">
      <header className="App-header">
        <input type="text" className="input" value="webdev"/> 

      </header>
      <div className="articles">
        
      </div>
    </div>
  );
}

export default App;
