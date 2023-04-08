import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("Muhammed");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        setLoading(true);

        fetch("http://localhost:8000/Blogs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(blog),
        }).then(() => {
            console.log("added a new a blog");
            setLoading(false);
            navigate("/");
        });
    };

    return (
        <div className='create'>
            <h2>Create A Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                    type='text'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <label>Blog body:</label>
                <textarea
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    required
                ></textarea>
                <label>Blog Author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value='Muhammed'>Muhammed</option>
                    <option value='Ali'>Ali</option>
                    <option value='Saleh'>Author</option>
                </select>
                <button>
                    {!loading && "Add Blog"}
                    {loading && "Adding A blog.."}
                </button>
            </form>
        </div>
    );
};

export default Create;
