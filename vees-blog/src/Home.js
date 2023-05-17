import { useState } from 'react';
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
    {id: 4, title: "Four for four", author: "Not sure", desc: "We're tired we're not tired"}
]);


  const handleClick = () => setName('Vee baby!!.....')
    return (
    <div>
        <h1>Vee's blog</h1>
        <p>...for real this time, lol.</p>
        <Blogs blogs={blogs} title="All blogs"/>
      </div>
    )
};

export default Home;