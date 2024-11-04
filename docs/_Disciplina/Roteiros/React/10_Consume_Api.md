# Consumindo Api

## 1. **Configuração Inicial**

**Criar o projeto:**

```bash
npm create vite@latest meu-app --template react
cd meu-app
npm install
```

**Instalar dependências:**

Não é necessário instalar nenhuma dependência adicional, pois o `fetch` é nativo do JavaScript.

### 2. **Criar o Componente para Mostrar os Posts**

Crie um componente chamado `Posts.jsx` dentro da pasta `src/components`.

```javascript
import React from 'react';

function Posts({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Posts;
```

### 3. **Criar o Componente Principal**

Modifique o arquivo `src/App.jsx` para consumir a API e passar os posts como props para o componente `Posts`.

```javascript
import React, { useState, useEffect } from 'react';
import Posts from './components/Posts';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <Posts posts={posts} />
    </div>
  );
}

export default App;
```

### 4. **Explicação do Código**

* **useState:** Utilizamos o hook `useState` para armazenar os posts obtidos da API em um estado.
* **useEffect:** O hook `useEffect` é usado para fazer a requisição à API quando o componente é montado.
* **fetch:** A API `fetch` nativa do JavaScript é utilizada para fazer a requisição HTTP para a API.
* **map:** O método `map` é utilizado para iterar sobre o array de posts e renderizar um componente para cada post. A chave `key` é essencial para o React identificar cada item de forma única.
* **props:** Os posts são passados como props para o componente `Posts`, permitindo que ele renderize a lista de posts de forma dinâmica.

### 5. **Rodando a Aplicação**

```bash
npm run dev
```

**Explicação detalhada:**

1. **Configuração Inicial:** Criamos um novo projeto Vite React.
2. **Componente Posts:** Criamos um componente reutilizável para exibir a lista de posts. Ele recebe os posts como props e utiliza o método `map` para renderizar cada post como um elemento HTML. A chave `key` é crucial para o React otimizar a renderização da lista.
3. **Componente Principal:** No componente principal, fazemos a requisição à API JSONPlaceholder usando o `fetch` e armazenamos os posts em um estado. Em seguida, passamos os posts como props para o componente `Posts`.
4. **Rodando a Aplicação:** Iniciamos o servidor de desenvolvimento para visualizar a aplicação no navegador.

**Diferenças em relação ao exemplo com axios:**

* **Não é necessário instalar dependências adicionais:** O `fetch` já está incluído no JavaScript.
* **Sintaxe:** A sintaxe do `fetch` é um pouco diferente da do axios, mas o conceito é o mesmo.

**Observações:**

* **Outras APIs:** Você pode substituir a URL da API JSONPlaceholder por qualquer outra API REST que forneça dados no formato JSON.
* **Tratamento de Erros:** É recomendado adicionar tratamento de erros para lidar com casos em que a requisição à API falha.
* **Carregamento:** Você pode adicionar um indicador de carregamento enquanto os dados estão sendo carregados da API.
* **Estilização:** Utilize CSS ou uma biblioteca de estilos como o styled-components para personalizar a aparência da sua aplicação.

Com este código, você terá uma aplicação React simples que consome dados de uma API e os exibe em uma lista utilizando o método `map` e passando os dados como props.

## Adicionando Funcionalidade de Filtragem

**Entendendo o Problema:**

Queremos adicionar um campo de busca ou filtros específicos para que o usuário possa filtrar os posts da API JSONPlaceholder.

**Solução:**

1. **Criar um estado para o termo de busca:**

   * Usaremos o hook `useState` para armazenar o valor que o usuário digitar no campo de busca.
2. **Criar um campo de input:**

   * Um input do tipo `text` permitirá que o usuário digite o termo de busca.
3. **Filtrar os posts:**

   * Usaremos o método `filter` do JavaScript para filtrar o array de posts com base no termo de busca.
   * A filtragem pode ser feita comparando o termo de busca com o título ou corpo do post, por exemplo.
4. **Atualizar a lista de posts renderizada:**

   * Após a filtragem, atualizaremos o estado com a nova lista de posts filtrados.

**Código Completo:**

```javascript
import React, { useState, useEffect } from 'react';
import Posts from './components/Posts';

function App() {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

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

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.body.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Posts</h1>
      <input
        type="text"
        placeholder="Pesquisar posts"
        value={searchTerm}
        onChange={handleSearch}
      />
      <Posts posts={filteredPosts} />
    </div>
  );
}

export default App;
```

**Explicação:**

* **Estado `searchTerm`:** Armazena o valor digitado pelo usuário no campo de busca.
* **Campo de input:** Um input do tipo `text` é renderizado e seu valor é vinculado ao estado `searchTerm`. O evento `onChange` atualiza o estado sempre que o usuário digita algo.
* **Filtragem:** A função `filter` é utilizada para filtrar os posts. A condição dentro do `filter` verifica se o título ou o corpo do post contém o termo de busca, ignorando maiúsculas e minúsculas.
* **Posts filtrados:** O resultado da filtragem é armazenado em `filteredPosts` e passado como prop para o componente `Posts`.

**Personalizando a Filtragem:**

* **Campos para filtrar:** Você pode adicionar mais campos para filtrar, como o ID do usuário ou a data de criação do post.
* **Tipos de filtragem:** Além da busca por texto, você pode implementar outros tipos de filtragem, como por data, categoria ou qualquer outro critério relevante.
* **Expressões regulares:** Para buscas mais complexas, você pode utilizar expressões regulares.
* **Múltiplos filtros:** Permita que o usuário aplique múltiplos filtros ao mesmo tempo.

**Considerações Adicionais:**

* **Desempenho:** Para grandes conjuntos de dados, considere otimizar a filtragem utilizando algoritmos mais eficientes.
* **Experiência do usuário:** Pense em como você pode melhorar a experiência do usuário, como fornecendo feedback visual sobre a filtragem ou sugerindo termos de busca.

Com essa base, você pode criar uma aplicação de filtragem robusta e personalizável para seus dados.

## Adicionando Funcionalidade de Ordenação à Sua Aplicação React

**Entendendo o Problema:**

Agora que temos uma filtragem funcional, o próximo passo natural é permitir que o usuário ordene os posts de acordo com diferentes critérios.

**Solução:**

1. **Criar um estado para o critério de ordenação:**
   * Usaremos o hook `useState` para armazenar o critério atual de ordenação (por exemplo, 'title' para ordenar pelo título, 'id' para ordenar pelo ID).
2. **Criar botões ou um menu de opções:**
   * Permitiremos que o usuário escolha o critério de ordenação clicando em botões ou selecionando uma opção em um menu.
3. **Ordenar os posts:**
   * Usaremos o método `sort` do JavaScript para ordenar o array de posts com base no critério escolhido.
   * Para ordenar de forma ascendente ou descendente, podemos utilizar uma função de comparação personalizada.
4. **Atualizar a lista de posts renderizada:**
   * Após a ordenação, atualizaremos o estado com a nova lista de posts ordenados.

**Código Completo:**

**JavaScript**

```
import React, { useState, useEffect } from'react';
import Posts from'./components/Posts';

functionApp() {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [orderBy, setOrderBy] = useState('title'); // Critério de ordenação inicial

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
      <h1>Posts</h1>
      <input
        type="text"
        placeholder="Pesquisar posts"
        value={searchTerm}
        onChange={handleSearch}
      />
      <button onClick={() => handleOrderBy('title')}>Ordenar por Título</button>
      <button onClick={() => handleOrderBy('id')}>Ordenar por ID</button>
      <Posts posts={sortedPosts} />
    </div>
  );
}

export default App;
```

**Explicação:**

* **Estado `orderBy`:** Armazena o critério atual de ordenação.
* **Botões de ordenação:** Botões são adicionados para permitir que o usuário escolha o critério de ordenação.
* **Função de ordenação:** A função `sort` é utilizada para ordenar os posts. A função de comparação personalizada determina a ordem de acordo com o critério escolhido.
* **Posts ordenados:** O resultado da ordenação é armazenado em `sortedPosts` e passado como prop para o componente `Posts`.

**Personalizando a Ordenação:**

* **Mais critérios:** Adicione mais botões ou opções para outros critérios de ordenação (por exemplo, data de criação, número de comentários).
* **Ordem ascendente/descendente:** Você pode adicionar um estado para controlar se a ordenação é ascendente ou descendente e inverter a lógica da função de comparação.
* **Múltiplos critérios:** Permita que o usuário ordene por múltiplos critérios ao mesmo tempo.

**Considerações Adicionais:**

* **Desempenho:** Para grandes conjuntos de dados, considere otimizar a ordenação utilizando algoritmos mais eficientes.
* **Experiência do usuário:** Forneça feedback visual para o usuário sobre o critério de ordenação atual.

Com essa funcionalidade, sua aplicação se torna ainda mais poderosa e flexível, permitindo que o usuário explore os dados de forma mais eficiente.

## Implementando Filtros Avançados

**Entendendo o Problema:**

Queremos permitir que o usuário combine múltiplos filtros para refinar os resultados da busca de forma mais precisa. Por exemplo, o usuário pode querer encontrar todos os posts que contenham a palavra "React" no título e que tenham sido criados após uma determinada data.

**Solução:**

1. **Criar estados para cada filtro:**
   * Usaremos o hook `useState` para armazenar o valor de cada filtro, como o termo de busca, a data inicial, a data final, etc.
2. **Criar componentes de filtro:**
   * Criaremos componentes reutilizáveis para cada tipo de filtro (input de texto, seletores de data, etc.).
3. **Criar uma função de filtragem:**
   * Essa função receberá os valores de todos os filtros e aplicará a lógica de filtragem aos dados.
4. **Atualizar a lista de posts renderizada:**
   * Após a filtragem, atualizaremos o estado com a nova lista de posts filtrados.

**Código Completo (Exemplo com filtro por título e data):**

**JavaScript**

```
import React, { useState, useEffect } from'react';
import Posts from'./components/Posts';

functionApp() {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  // ... (restante do código)

  const filteredPosts = posts.filter((post) => {
    const titleMatch = post.title.toLowerCase().includes(searchTerm.toLowerCase());
    const dateMatch = (!startDate || new Date(post.createdAt) >= startDate) &&
                      (!endDate || new Date(post.createdAt) <= endDate);
    return titleMatch && dateMatch;
  });

  return (
    <div>
      {/* ... */}
      <input
        type="text"
        placeholder="Pesquisar por título"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
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
      {/* ... */}
    </div>
  );
}
```

**Explicação:**

* **Múltiplos estados:** Adicionamos estados para `startDate` e `endDate`.
* **Componentes de filtro:** Criamos inputs de tipo `date` para filtrar por data.
* **Função de filtragem:** A função de filtragem agora verifica se o post corresponde a todos os critérios de filtro.
* **Combinação de filtros:** A lógica da filtragem combina os resultados de cada filtro individual usando operadores lógicos (`&&` para "e").

**Personalizando os Filtros:**

* **Tipos de filtros:** Adicione outros tipos de filtros, como seletores para categorias, checkboxes para múltiplas opções, etc.
* **Operadores lógicos:** Utilize `||` para "ou" quando quiser encontrar posts que correspondam a pelo menos um dos critérios.
* **Hierarquia de filtros:** Implemente uma hierarquia de filtros, onde alguns filtros são aplicados antes de outros.
* **Interface do usuário:** Crie uma interface intuitiva para que o usuário possa facilmente combinar e remover filtros.

**Considerações Adicionais:**

* **Desempenho:** Para grandes conjuntos de dados, considere otimizar a filtragem utilizando técnicas como indexação ou bibliotecas de filtragem especializadas.
* **Experiência do usuário:** Forneça feedback visual para o usuário sobre os filtros aplicados e os resultados da filtragem.
* **Flexibilidade:** Permita que o usuário salve suas configurações de filtro para uso futuro.

**Próximos Passos:**

* **Filtros complexos:** Explore filtros mais complexos, como filtros fuzzy (busca aproximada) ou filtros geográficos.
* **Integração com backend:** Se seus dados estiverem em um backend, adapte a lógica de filtragem para trabalhar com a API do seu backend.

Com essa abordagem, você pode criar uma experiência de filtragem poderosa e flexível para seus usuários.
