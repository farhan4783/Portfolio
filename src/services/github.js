// Replace 'YOUR_USERNAME' with your actual GitHub username
// If you want to use env variables, you can use import.meta.env.VITE_GITHUB_USERNAME
const GITHUB_USERNAME = 'farhan4783';

export const fetchProjects = async () => {
    try {
        // Fetch more initially to allow for filtering
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=pushed&per_page=12`);
        if (!response.ok) {
            throw new Error('Failed to fetch projects');
        }
        const data = await response.json();

        // Filter out the profile repository (same name as user), empty repos, and ensure they have a description or size
        const filteredProjects = data.filter(repo =>
            repo.name !== GITHUB_USERNAME &&
            repo.size > 0 &&
            !repo.fork
        );

        // Return top 6 after filtering
        return filteredProjects.slice(0, 6);
    } catch (error) {
        console.error('Error fetching projects:', error);
        return [];
    }
};
