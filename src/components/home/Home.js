import BlogList from "./BlogList";
import useFetch from "../custom-hooks/useFetch";

const Home = () => {
    // the useFetch funciton returns a function
    const {
        data: blogs,
        loading,
        error,
    } = useFetch("http://localhost:8000/Blogs");

    return (
        <div className='home'>
            {error && <div>{error}</div>}
            {loading && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title={"All Blogs"} />}
        </div>
    );
};

export default Home;
