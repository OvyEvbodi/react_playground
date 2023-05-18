import { useState, useEffect } from 'react';
import Blogs from './Blogs';
import Posts from './Posts';

const Home = () => {
  const [blogs, setBlogs] = useState([
    {id: 1, title: 'Many chances', author: 'Ovy Evbodi', body:'Giving life another shot every day'},
    {id: 2, title: 'A forgiving heart', author: 'Smurfy Smurf', body: "I don't wanna poo"},
    {id: 3, title: "Get out now", author: "Shims boo", body: "Feeling like staying out"},
    {id: 4, title: "Four for four", author: "Not sure", body: "We're tired we're not tired"},
    {id:5, title: "The future finally came", author: "Ovy Evbodi", body: "It's always a breath of fresh air when we evenntually get it right"}
]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id)
    setBlogs(newBlogs)
  };
    return (
    <div>
        <h1>Vee's blog</h1>
        <p>...for real this time, lol.</p>
        <Posts />
        {/* <Blogs blogs={blogs} title="All blogs" handleDelete={handleDelete}/>
        <Blogs blogs={blogs.filter((blog) => blog.author === 'Ovy Evbodi')} title="Ovy's blogs" handleDelete={handleDelete}/> */}
      </div>
    )
};

export default Home;