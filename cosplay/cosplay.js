const root = 'https://ensembledata.com/apis';
const token = "lLy2VbfFlZQg067q";
const user_id = 4255875038;

async function fetchInstagramPosts() {
    const endpoint = '/instagram/user/posts';
    const params = { user_id, depth: 1, chunk_size: 10, start_cursor: "", alternative_method: false, token };
    const url = `${root}${endpoint}?${new URLSearchParams(params).toString()}`;

    try {
        const res = await fetch(url); // Node 18+ has fetch built-in
        const data = await res.json();
        console.log("Posts:", data);
    } catch (err) {
        console.error("Error fetching posts:", err);
    }
}

fetchInstagramPosts();
