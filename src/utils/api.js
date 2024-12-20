export const baseUrl = "https://black-wallet.uz";

export const fetchCategories = async () => {
	try {
		const response = await fetch(`${baseUrl}/api/category/all`);
		const data = await response.json();
		return data.data; // Assuming the API returns { categories: [...] }
	} catch (error) {
		console.error("Failed to fetch categories:", error);
		return []; // Return an empty array in case of error
	}
};

export const fetchCategory = async (id) => {
	try {
		const response = await fetch(`${baseUrl}/api/category/${id}`);
		
		const data = await response.json();
		return data.data; // Assuming the API returns { categories: [...] }
	} catch (error) {
		console.error("Failed to fetch categories:", error);
		return []; // Return an empty array in case of error
	}
};

export const fetchPosts = async () => {
	try {
		const response = await fetch(`${baseUrl}/api/post/all`);
		
		const data = await response.json();
		return data.data; // Assuming the API returns { posts: [...] }
	} catch (error) {
		console.error("Failed to fetch posts:", error);
		return []; // Return an empty array in case of error
	}
};

export const fetchPost = async (id) => {
	try {
		const response = await fetch(`${baseUrl}/api/post/${id}`);
		
		const data = await response.json();
		return data.data; // Assuming the API returns { posts: [...] }
	} catch (error) {
		console.error("Failed to fetch posts:", error);
		return []; // Return an empty array in case of error
	}
};

export const fetchLastPosts = async () => {
	try {
		const response = await fetch(`${baseUrl}/api/post/last20`);
		
		const data = await response.json();
		return data.data; // Assuming the API returns { posts: [...] }
	} catch (error) {
		console.error("Failed to fetch posts:", error);
		return []; // Return an empty array in case of error
	}
};
