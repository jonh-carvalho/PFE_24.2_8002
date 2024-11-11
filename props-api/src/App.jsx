import { useState, useEffect } from 'react'
import './App.css'
// import Usuario from './components/Usuario';
import Posts from './components/Posts';

function App() {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [orderBy, setOrderBy] = useState('title');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  {/*const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.body.toLowerCase().includes(searchTerm.toLowerCase())
);*/}

  const filteredPosts = posts.filter((post) => {
    const titleMatch = post.title.toLowerCase().includes(searchTerm.toLowerCase());
    const dateMatch = (!startDate || new Date(post.createdAt) >= startDate) &&
      (!endDate || new Date(post.createdAt) <= endDate);
    return titleMatch && dateMatch;
  });

  const handleOrderBy = (newOrderBy) => {
    setOrderBy(newOrderBy);
  };

  const sortedPosts = [...posts].sort((a, b) => {
    if (orderBy === 'title') {
      return a.title.localeCompare(b.title);
    } else if (orderBy === 'id') {
      return a.id - b.id;
    }
    // Adicionar mais critérios de ordenação aqui
  });

  return (
    <div>
      {/*<h1>Posts</h1>
      <Posts posts={posts} />
  */}

      <h1>Posts</h1>

      <input
        type="text"
        placeholder="Pesquisar posts"
        value={searchTerm}
        onChange={handleSearch}
      />

      <label>Data inicial:</label>
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />

      <label>Data final:</label>
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />
      
      <button onClick={() => handleOrderBy('title')}>Ordenar por Título</button>
      <button onClick={() => handleOrderBy('id')}>Ordenar por ID</button>

      {/*<Posts posts={filteredPosts} />
    */}

      <Posts posts={sortedPosts} />

      {/*<div>
      <h1>Lista de Usuários</h1>
      <Usuario nome="Alice" idade={28} />
      <Usuario nome="Carlos" idade={34} />
    </div>
  */}
    </div>

  )
}

export default App
