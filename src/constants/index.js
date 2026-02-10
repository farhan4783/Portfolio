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
        name: "Chess Platform",
        description:
            "A comprehensive online chess platform featuring multiplayer modes, AI opponents powered by Stockfish, and interactive learning features. Built with modern technologies for optimal performance.",
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
        source_code_link: "https://github.com/farhan4783/Chess-Platform",
        category: "Web Development",
        featured: true
    },
    {
        name: "Movie Recommendation System",
        description:
            "Production-ready AI recommendation engine using collaborative filtering and content-based algorithms. Implements TF-IDF and SVD for intelligent movie suggestions with Django backend.",
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
        image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        source_code_link: "https://github.com/farhan4783/Movies_recomendation",
        category: "AI/ML",
        featured: true
    },
    {
        name: "Stock Market Predictor",
        description:
            "AI-powered stock market prediction system using LSTM neural networks and technical indicators. Provides real-time predictions with interactive visualizations and historical analysis.",
        tags: [
            {
                name: "python",
                color: "blue-text-gradient",
            },
            {
                name: "tensorflow",
                color: "pink-text-gradient",
            },
            {
                name: "streamlit",
                color: "green-text-gradient",
            },
        ],
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        source_code_link: "https://github.com/farhan4783/Stock_market_predictor",
        category: "AI/ML",
        featured: true
    },
    {
        name: "Customer Churn Prediction",
        description:
            "Advanced ML system that predicts customer churn with explainability features. Combines data science with business intelligence to provide actionable insights and retention strategies.",
        tags: [
            {
                name: "python",
                color: "blue-text-gradient",
            },
            {
                name: "scikit-learn",
                color: "pink-text-gradient",
            },
            {
                name: "data-science",
                color: "green-text-gradient",
            },
        ],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        source_code_link: "https://github.com/farhan4783/Customer-Churn-Advanced",
        category: "Data Science",
        featured: false
    },
    {
        name: "AI Code Review Assistant",
        description:
            "Smart code analysis tool that provides quality feedback, best practices, complexity hints, and improvement suggestions. Helps developers write better, cleaner code.",
        tags: [
            {
                name: "python",
                color: "blue-text-gradient",
            },
            {
                name: "ai",
                color: "pink-text-gradient",
            },
            {
                name: "code-analysis",
                color: "green-text-gradient",
            },
        ],
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        source_code_link: "https://github.com/farhan4783/AI-Powered-Code-Review-Assistant",
        category: "AI/ML",
        featured: false
    },
    {
        name: "AI Data Analyst Agent",
        description:
            "Powerful Streamlit application that leverages AI for intelligent data analysis on CSV and Excel files. Automates insights generation and visualization creation.",
        tags: [
            {
                name: "python",
                color: "blue-text-gradient",
            },
            {
                name: "streamlit",
                color: "pink-text-gradient",
            },
            {
                name: "ai",
                color: "green-text-gradient",
            },
        ],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        source_code_link: "https://github.com/farhan4783/AI_Data_Analyst_Agent",
        category: "Data Science",
        featured: false
    },
];

