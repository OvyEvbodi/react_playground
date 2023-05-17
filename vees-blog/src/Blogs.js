const Blogs = ({blogs, title, handleDelete}) => {

    // render preview for each blog
    return (
        <div className="container-lg">
            <h2>{ title }</h2>
            { blogs.map((blog) => (
                <div className="blog_title my-3 p-1 border-4 border-danger-subtle border-start rounded shadow" key={ blog.id }>
                    <h3 className="text-body-secondary display-6 ps-3">{ blog.title }</h3>
                    <p className="ps-3">written by: <span className='text-danger'>{ blog.author }</span></p>
                    <button type="button" onClick={ () => handleDelete(blog.id) } className="btn ms-3 px-3 btn-sm btn-outline-danger">Delete</button>
                </div>
            ))
            }
        </div>
    )
};

export default Blogs;