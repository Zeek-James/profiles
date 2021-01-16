import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { Posts } from "./components/profiles/Posts";
import { Search } from "./components/search/Search";
import { Nav } from "./components/nav/Nav";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage ] = useState(20);
  const [query, setQuery] = useState('')


  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios(
        `https://api.enye.tech/v1/challenge/records?records=${query}`
      );
      setPosts(res.data.records.profiles);
      setLoading(false);
    };
    fetchPosts();
  }, [query]);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

const paginate = (pageNumber) => setCurrentPage(pageNumber)


  return (
    <div className="container">
      <div className="tp">
        <Nav postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
      
        <Search getQuery = {(q) => setQuery(q)}/>
      </div>
      <Posts posts={currentPosts} loading={loading} />
    
    </div>
  );
}

export default App;
