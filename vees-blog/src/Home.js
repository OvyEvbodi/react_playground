const Home = () => {
    const googlink = 'https://www.google.com'
  let data = {'title': 'A new breath',
               'desc': 'Giving myself another chance at the concepts I struggle with; hoping the universe understands my plight this time',
               'author': 'Vee, Chee\'s baby',
               'likes': '11.12M'};
    return (
    <div>
        <h1>Vee's blog</h1>
        <p>...for real this time, lol.</p>
        <h3 className='bg-secondary p-1'>{ data.title }</h3>
        <summary>{ data.desc }</summary>
        <p className="text-center">Searching for love? <button type='button' className="btn btn-primary btn-sm"><a className='text-light lead' href={googlink}>Start here...</a></button></p>
        <div className="btn-group">
          <a className="btn btn-success">Log love</a>
          <a className="btn btn-warning">Break up</a>
          <a className="btn btn-danger">Enter street</a>
        </div>
        <p>Tired of love? <button type='button' className='btn btn-outline-danger btn-sm'>Break up</button></p>
        <p>written by: { data.author } <span className="fw-bold">{ Math.floor(Math.random() * 10000000) } likes</span></p>
      </div>
    )
};

export default Home;