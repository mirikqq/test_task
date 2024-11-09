export const useFetch: typeof fetch = async (path, options = {}) => {
    let query;

    if (path.toString().startsWith("http")) {
        query = path;
    } else {
        query = `https://swapi.dev/api/${path}`;
    }

    const response = await fetch(query, {
        ...options,
    });

    if (!response.ok) {
        throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
    }

    return response.json();
};
