import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../custom-hooks/useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const {
        data: blog,
        loading,
        error,
    } = useFetch("http://localhost:8000/Blogs/" + id);

    const handleClick = () => {
        fetch("http://localhost:8000/Blogs/" + id, { method: "DELETE" }).then(
            () => navigate("/")
        );
    };
    return (
        <div className='blog-details'>
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>{blog.author}</p>
                    <div>{blog.body}</div>
                </article>
            )}
            <button onClick={handleClick}>delete</button>
        </div>
    );
};

export default BlogDetails;
