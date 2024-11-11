import { useState, useEffect } from 'react';
import Posts from './components/Posts';
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); // Filtragem
  const [orderBy, setOrderBy] = useState('title'); // Critério de ordenação inicial

  // Filtros Avançados
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(response.data);  

      } catch (error) {
        console.error('Erro ao buscar posts:', error);
      }
    };
    fetchPosts();
  }, []);

    

    /*
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        const response = await axios.post('/posts', {
          title: title,
          body: body
        });
        setPosts([...posts, response.data]);
      } catch (error) {
        console.error('Erro ao criar post:', error);
      }
    };

    const handleUpdate = async (id, updatedData) => {
      try {
        await axios.put(`/posts/${id}`, updatedData);
        setPosts(posts.map(post => post.id === id ? updatedData : post));
      } catch (error) {
        console.error('Erro ao atualizar post:', error);
      }
    };

    const handleDelete = async (id) => {
      try {
        await axios.delete(`/posts/${id}`);
        setPosts(posts.filter(post => post.id !== id));
      } catch (error) {
        console.error('Erro ao excluir post:', error);
      }
    };
    */

/*
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setPosts(data);
    };
*/

  

  // Filtragem
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

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

  /*const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.body.toLowerCase().includes(searchTerm.toLowerCase())
  );
  */

  // Filtragem

  const filteredPosts = posts.filter((post) => {
    const titleMatch = post.title.toLowerCase().includes(searchTerm.toLowerCase());
    const dateMatch = (!startDate || new Date(post.createdAt) >= startDate) &&
                      (!endDate || new Date(post.createdAt) <= endDate);
    return titleMatch && dateMatch;
  });

  return (
    <div>
      <h1>Posts</h1>
      <input
        type="text"
        placeholder="Pesquisar posts"
        value={searchTerm}
        onChange={handleSearch}
      />
      <h2>Filtros Avançados</h2>
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
      <Posts posts={sortedPosts} />
      <Posts posts={filteredPosts} />
      {/*
      <CreatePostForm onSubmit={handleSubmit} />
      <PostList posts={posts} onDelete={handleDelete} onUpdate={handleUpdate} />*/}
    </div>
  );
}

export default App;