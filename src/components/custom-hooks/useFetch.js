import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);

    // for loading message
    const [loading, setLoading] = useState(true);

    // for error message
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCon = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortCon.signal })
                .then((response) => {
                    if (!response.ok) {
                        throw Error("Can't fetch The data.");
                    }
                    return response.json();
                })
                .then((data) => {
                    setError(null);
                    setData(data);
                    setLoading(false);
                })
                .catch((err) => {
                    if (err.name === "AbortError") {
                        console.log("Fetch aborted");
                    } else {
                        setLoading(false);
                        setError(err.message);
                    }
                });
        }, 1000);
        return () => abortCon.abort();
    }, [url]);

    return { data, loading, error };
};

export default useFetch;
