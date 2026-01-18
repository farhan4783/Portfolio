// Assets import placeholder
import chessImage from "../assets/image.png";

export const heroData = {
    greeting: "Hello, I'm Mohd Farhan",
    roles: [
        "Computer Science Student",
        "Full Stack Developer",
        "AI/ML Enthusiast"
    ],
    description: "Building the future with code. Specialized in Python, Flutter, and AI/ML. Crafting digital experiences that merge creativity with raw technical power."
};

export const projects = [
    {
        name: "Online Chess Platform",
        description:
            "A complete online chess platform featuring multiplayer modes and AI opponents powered by Stockfish. Built with performance in mind using Bun and TypeScript.",
        tags: [
            {
                name: "typescript",
                color: "blue-text-gradient",
            },
            {
                name: "bun",
                color: "pink-text-gradient",
            },
            {
                name: "stockfish",
                color: "green-text-gradient",
            },
        ],
        image: chessImage,
        source_code_link: "https://github.com/farhan4783/chess-platform",
    },
    {
        name: "Movie Rec. System",
        description:
            "Production-ready AI recommendation engine capable of scaling to millions of movies. Uses TF-IDF and SVD for content-based filtering with a Django backend.",
        tags: [
            {
                name: "django",
                color: "green-text-gradient",
            },
            {
                name: "python",
                color: "blue-text-gradient",
            },
            {
                name: "scikit-learn",
                color: "pink-text-gradient",
            },
        ],
        image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // Movie Placeholder
        source_code_link: "https://github.com/farhan4783/Movies_recomendation",
    },
];
