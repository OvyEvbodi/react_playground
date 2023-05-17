import { useState, useEffect } from 'react';
import Blogs from './Blogs';

const Home = () => {
  const googlink = 'https://www.google.com'
  let data = {'title': 'A new breath',
               'desc': 'Giving myself another chance at the concepts I struggle with; hoping the universe understands my plight this time',
               'author': 'Vee, Chee\'s baby',
               'likes': '11.12M'};
  const [name, setName]  = useState('Ovy')
  const [blogs, setBlogs] = useState([
    {id: 1, title: 'Many chances', author: 'Ovy Evbodi', desc:'Giving life another shot every day'},
    {id: 2, title: 'A forgiving heart', author: 'Smurfy Smurf', desc: "I don't wanna poo"},
    {id: 3, title: "Get out now", author: "Shims boo", desc: "Feeling like staying out"},
    {id: 4, title: "Four for four", author: "Not sure", desc: "We're tired we're not tired"},
    {id:5, title: "The future finally came", author: "Ovy Evbodi", desc: "It's always a breath of fresh air when we evenntually get it right"}
]);

  useEffect(() => console.log('killing this!!'), [blogs])
  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id)
    setBlogs(newBlogs)
  };
    return (
    <div>
        <h1>Vee's blog</h1>
        <p>...for real this time, lol.</p>
        <Blogs blogs={blogs} title="All blogs" handleDelete={handleDelete}/>
        <Blogs blogs={blogs.filter((blog) => blog.author === 'Ovy Evbodi')} title="Ovy's blogs" handleDelete={handleDelete}/>
      </div>
    )
};

export default Home;