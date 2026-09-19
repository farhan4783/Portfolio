// Assets import placeholder
import chessImage from "../assets/image.png";

export const heroData = {
    greeting: "Hello, I'm Mohd Farhan",
    roles: [
        "AI/ML Engineer",
        "Deep Learning Practitioner",
        "Full Stack AI Developer"
    ],
    description: "I build intelligent systems that learn, predict, and automate. From LSTM-powered financial models to production-ready recommendation engines — I ship AI that works.",
    socialLinks: {
        github: "https://github.com/farhan4783",
        linkedin: "https://www.linkedin.com/in/mohdfarhansde",
    }
};

export const projects = [
    {
        name: "Chess Platform",
        description:
            "A comprehensive online chess platform featuring multiplayer modes, AI opponents powered by Stockfish, and interactive learning features. Built with modern technologies for optimal performance.",
        challenge: "Building a real-time multiplayer chess system with AI opponents that feel responsive and competitive",
        approach: "Integrated Stockfish WASM engine with WebSocket-based multiplayer and Bun runtime for ultra-fast server performance",
        results: "Sub-100ms move latency, Stockfish AI across 20 difficulty levels, interactive puzzle-based learning mode",
        tags: [
            { name: "typescript", color: "blue-text-gradient" },
            { name: "bun", color: "pink-text-gradient" },
            { name: "stockfish", color: "green-text-gradient" },
        ],
        metrics: { players: "Real-time", aiLevels: "20", latency: "< 100ms" },
        image: chessImage,
        source_code_link: "https://github.com/farhan4783/Chess-Platform",
        category: "Web Development",
        featured: true
    },
    {
        name: "Movie Recommendation System",
        description:
            "Production-ready AI recommendation engine using collaborative filtering and content-based algorithms. Implements TF-IDF and SVD for intelligent movie suggestions with Django backend.",
        challenge: "Cold-start problem in recommendations — how to suggest relevant movies to new users with no history",
        approach: "Hybrid model combining collaborative filtering (SVD matrix factorization) with content-based TF-IDF vectorization, falling back gracefully for new users",
        results: "Hybrid approach reduced cold-start error by 34% vs pure collaborative filtering, serves recommendations in <200ms",
        tags: [
            { name: "django", color: "green-text-gradient" },
            { name: "python", color: "blue-text-gradient" },
            { name: "scikit-learn", color: "pink-text-gradient" },
        ],
        metrics: { accuracy: "89%", dataset: "45K+ movies", inference: "< 200ms" },
        image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        source_code_link: "https://github.com/farhan4783/Movies_recomendation",
        category: "AI/ML",
        featured: true
    },
    {
        name: "Stock Market Predictor",
        description:
            "AI-powered stock market prediction system using LSTM neural networks and technical indicators. Provides real-time predictions with interactive visualizations and historical analysis.",
        challenge: "Predicting volatile financial markets with noisy, non-stationary time-series data",
        approach: "LSTM network with attention mechanism, trained on 12 technical indicators (RSI, MACD, Bollinger Bands, etc.) with walk-forward validation to prevent data leakage",
        results: "87.3% directional accuracy on S&P 500 test data, beating moving-average baseline by 14 percentage points",
        tags: [
            { name: "python", color: "blue-text-gradient" },
            { name: "tensorflow", color: "pink-text-gradient" },
            { name: "streamlit", color: "green-text-gradient" },
        ],
        metrics: { accuracy: "87.3%", dataPoints: "50K+", inference: "< 200ms" },
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        source_code_link: "https://github.com/farhan4783/Stock_market_predictor",
        category: "AI/ML",
        featured: true
    },
    {
        name: "Customer Churn Prediction",
        description:
            "Advanced ML system that predicts customer churn with explainability features. Combines data science with business intelligence to provide actionable insights and retention strategies.",
        challenge: "Highly imbalanced dataset (only 15% churn rate) making standard classifiers predict 'no churn' for everything",
        approach: "Ensemble of XGBoost + Random Forest with SMOTE oversampling, plus SHAP values for model explainability to surface actionable retention drivers",
        results: "92% recall on churn class (up from 43% baseline), SHAP explanations enabled business team to design targeted retention campaigns",
        tags: [
            { name: "python", color: "blue-text-gradient" },
            { name: "scikit-learn", color: "pink-text-gradient" },
            { name: "data-science", color: "green-text-gradient" },
        ],
        metrics: { recall: "92%", f1Score: "0.88", features: "35+" },
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        source_code_link: "https://github.com/farhan4783/Customer-Churn-Advanced",
        category: "Data Science",
        featured: true
    },
    {
        name: "AI Code Review Assistant",
        description:
            "Smart code analysis tool that provides quality feedback, best practices, complexity hints, and improvement suggestions. Helps developers write better, cleaner code.",
        challenge: "Automating nuanced code review that goes beyond linting — detecting architectural smells and suggesting improvements",
        approach: "LLM-powered analysis pipeline with AST parsing for structural analysis, cyclomatic complexity scoring, and prompt-engineered review generation",
        results: "Catches 78% of common anti-patterns identified by senior reviewers, generates actionable suggestions with code examples",
        tags: [
            { name: "python", color: "blue-text-gradient" },
            { name: "ai", color: "pink-text-gradient" },
            { name: "code-analysis", color: "green-text-gradient" },
        ],
        metrics: { patterns: "78%", languages: "5+", speed: "< 3s" },
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        source_code_link: "https://github.com/farhan4783/AI-Powered-Code-Review-Assistant",
        category: "AI/ML",
        featured: false
    },
    {
        name: "AI Data Analyst Agent",
        description:
            "Powerful Streamlit application that leverages AI for intelligent data analysis on CSV and Excel files. Automates insights generation and visualization creation.",
        challenge: "Making data analysis accessible to non-technical users who can't write SQL or Python",
        approach: "Natural language query interface powered by LLM agent that generates pandas code, executes it safely in a sandbox, and produces automated visualizations",
        results: "Supports natural language queries like 'show me sales trends by region', auto-generates 6 chart types, handles datasets up to 500MB",
        tags: [
            { name: "python", color: "blue-text-gradient" },
            { name: "streamlit", color: "pink-text-gradient" },
            { name: "ai-agent", color: "green-text-gradient" },
        ],
        metrics: { chartTypes: "6+", maxData: "500MB", queryTypes: "NL" },
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        source_code_link: "https://github.com/farhan4783/AI_Data_Analyst_Agent",
        category: "Data Science",
        featured: false
    },
];


