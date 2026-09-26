// Assets import
import chessImage from "../assets/image.png";

export const heroData = {
    greeting: "Hello, I'm Mohd Farhan",
    roles: [
        "Data Science & AI Engineer",
        "Full Stack Systems Developer",
        "Machine Learning Practitioner"
    ],
    educationSummary: "B.Tech in Computer Science & Engineering (Data Science Specialization)",
    description: "B.Tech in CSE with Data Science Specialization. I engineer high-concurrency distributed systems and production-grade ML pipelines — from real-time WebSocket platforms and recommendation engines to computer vision.",
    location: "Greater Noida / Delhi NCR, India (Open to Remote / Hybrid / On-site)",
    contact: {
        email: "mohdfarhan4002@gmail.com",
        phone: "+91 9599372101",
        phoneRaw: "919599372101",
    },
    socialLinks: {
        github: "https://github.com/farhan4783",
        linkedin: "https://www.linkedin.com/in/mohdfarhansde",
    }
};

export const caseStudies = [
    {
        id: "chess-platform",
        name: "Chess Platform",
        subtitle: "Real-Time Distributed Multiplayer & Engine System",
        category: "Distributed Systems",
        featured: true,
        isCaseStudy: true,
        image: chessImage,
        source_code_link: "https://github.com/farhan4783/Chess-Platform",
        tags: [
            { name: "typescript", color: "blue-text-gradient" },
            { name: "websockets", color: "pink-text-gradient" },
            { name: "redis", color: "red-text-gradient" },
            { name: "postgresql", color: "blue-text-gradient" },
            { name: "stockfish", color: "green-text-gradient" },
            { name: "bun/node", color: "pink-text-gradient" },
        ],
        metrics: {
            latency: "< 10ms",
            reconnectRecovery: "100%",
            serverCpuLoad: "0% (WASM)",
            aiDifficultyLevels: "20 Levels",
        },
        description:
            "A high-concurrency, real-time multiplayer chess platform engineered with authoritative server-side state validation, in-memory game loops, and client-side Stockfish AI execution via Web Workers.",
        problem:
            "Real-time multiplayer gaming on web and mobile faces severe distributed systems hurdles: clock drift and desynchronization between players on erratic networks, vulnerability to client-side move tampering/cheating, and immense CPU saturation when evaluating chess engines (Stockfish) server-side for multiple concurrent users.",
        solution:
            "Architected a decoupled dual-path architecture: a stateless REST API for auth and profiles, paired with an authoritative stateful WebSocket server. All move validations occur in memory via chess.js, game state and heartbeats are cached in Redis for instantaneous reconnection recovery, and Stockfish AI evaluations are completely offloaded to browser Web Workers via UCI protocol.",
        architecture:
            "1. Dual-Path Architecture: Stateless Express/Prisma REST API (:3000) for player records, rating history, and tournament brackets, separated from stateful WebSocket server (:8080) for full-duplex gameplay.\n2. In-Memory GameManager: Matches execute entirely in memory with sub-10ms tick rates, detaching live moves from PostgreSQL disk writes.\n3. Client-Side Web Worker Thread: Stockfish 16 compiled to WebAssembly runs inside browser Web Workers, parsing UCI commands at depth 10+ with zero server compute overhead.\n4. Redis Pub/Sub & Session Cache: Match rooms are partitioned across Redis message channels, and active game states are serialized with 60-second recovery windows.",
        engineeringDetails: [
            {
                title: "Authoritative Game State Synchronization",
                content: "Clients transmit move intents only ({ from, to, promotion }). The WebSocket server runs an authoritative chess.js state machine to verify move legality, compute monotonic millisecond clock consumption, and broadcast the canonical FEN and time delta to both players simultaneously in <10ms, eliminating client desync and race conditions."
            },
            {
                title: "Disconnection & Reconnection Recovery",
                content: "Engineered a Redis-backed session heartbeat with a 60-second grace window. When a player's socket drops due to network jitter, the active game state is frozen. Upon reconnecting with their signed match JWT, the server reconciles the session, streams the current board state and elapsed clock delta, and resumes play without data loss."
            },
            {
                title: "High-Concurrency Room Management",
                content: "Designed an in-memory room broker partitioned via Redis Pub/Sub channels. Moves in Room A never trigger iterations or broadcasts to Room B. Database persistence is performed asynchronously out-of-band, allowing the platform to scale to thousands of concurrent matches without database I/O bottlenecks."
            }
        ],
        personalImplementation: [
            "Designed and implemented the custom WebSocket message protocol (INIT_GAME, MOVE, RECONNECT, RESIGN, GAME_ALERT).",
            "Engineered the authoritative server-side state machine with chess.js validation and millisecond-precision clock tracking.",
            "Integrated Stockfish.js UCI engine in browser Web Workers, offloading 100% of single-player AI compute to client machines.",
            "Built Redis state serialization and automatic 60-second disconnection reconciliation logic.",
            "Developed the interactive React chessboard UI featuring drag-and-drop moves, legal square highlights, move audio, and captured piece counters."
        ],
        results:
            "Achieved sub-10ms move verification latency. Completely eliminated server CPU overhead for AI matches by running Stockfish in Web Workers. Achieved 100% reconnection recovery on network drops under 60 seconds with zero database write latency on the critical move path."
    },
    {
        id: "movie-maverick",
        name: "Movie Maverick",
        subtitle: "AI Hybrid Recommendation & Conversational Discovery Platform",
        category: "AI/ML & Data Science",
        featured: true,
        isCaseStudy: true,
        image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        source_code_link: "https://github.com/farhan4783/Movies_recomendation",
        tags: [
            { name: "python", color: "blue-text-gradient" },
            { name: "flask", color: "green-text-gradient" },
            { name: "redis", color: "red-text-gradient" },
            { name: "postgresql", color: "blue-text-gradient" },
            { name: "scikit-learn", color: "pink-text-gradient" },
            { name: "gemini-ai", color: "green-text-gradient" },
        ],
        metrics: {
            coldStartImprovement: "34% Error Drop",
            cachedResponseTime: "< 85ms",
            catalogSize: "45K+ Movies",
            pipelineAccuracy: "89%",
        },
        description:
            "An enterprise-grade movie recommendation and discovery system combining collaborative filtering, content-based algorithms, Redis query caching, and Google Gemini AI conversational exploration.",
        problem:
            "Recommending relevant films to new users with zero or sparse watch histories (the cold-start problem) typically results in generic trending lists. Furthermore, running matrix factorizations across 45,000+ movies produces heavy CPU query latency, while traditional filter grids fail to support mood-driven conversational discovery.",
        solution:
            "Engineered a hybrid recommendation engine combining Singular Value Decomposition (SVD) matrix factorization with TF-IDF cosine similarity over movie metadata, backed by weighted Bayesian averages for cold-start users. Integrated Redis caching to achieve sub-85ms response times, and built a conversational AI copilot powered by Google Gemini for natural language discovery.",
        architecture:
            "1. Multi-Tier Recommendation Engine: Combines collaborative filtering (SVD latent vectors) on user ratings with content-based TF-IDF plot/genre embeddings and popularity fallback cascades.\n2. Caching & Persistence: Redis caches pre-computed similarity matrices and top-N recommendations with LRU eviction; PostgreSQL stores relational user ratings, watchlists, and social reviews with full-text search indexes.\n3. Conversational AI Layer: Google Gemini prompt-chaining pipeline with TMDB API tool calling for mood-based recommendations ('Modyverse') and semantic query parsing.\n4. Containerized Microservices: Fully orchestrated via Docker Compose (Flask application, PostgreSQL database, Redis cache).",
        engineeringDetails: [
            {
                title: "Hybrid Recommendation Pipeline & Matrix Factorization",
                content: "Trained an SVD matrix factorization model on user-item interaction matrices to capture latent preferences, paired with a Scikit-Learn TF-IDF vectorizer analyzing movie overviews, genres, cast, and directors. Dynamic score weighting balances novelty with personalization."
            },
            {
                title: "Cold-Start Mitigation Strategy",
                content: "When a user's interaction count is sparse (<5 ratings), the system computes weighted Bayesian averages combined with an onboarding questionnaire feature vector. This hybrid fallback reduced cold-start Mean Absolute Error (MAE) by 34% compared to naive collaborative filtering."
            },
            {
                title: "Redis Caching & Latency Optimization",
                content: "Pre-computed recommendation vectors, cosine similarity tables, and movie poster metadata are cached in Redis with 1-hour TTLs and LRU eviction. This reduced 95th-percentile API response latency from 1,200ms to under 85ms for 95% of incoming user requests."
            },
            {
                title: "Conversational AI Copilot (Modyverse)",
                content: "Integrated Google Gemini with structured prompt templates to extract semantic intent, genres, and mood states from natural language queries (e.g., 'Recommend dark psychological thrillers like Shutter Island with mind-bending twists'), linking directly to catalog query filters."
            }
        ],
        personalImplementation: [
            "Built the complete Flask application architecture with Marshmallow schema validation, JWT authentication, and rate limiting.",
            "Engineered the hybrid recommendation algorithms in Scikit-Learn (SVD + TF-IDF) with persistent model serialization.",
            "Designed and implemented PostgreSQL relational schemas with foreign keys, indexes, and full-text search.",
            "Implemented Redis caching decorators for endpoint acceleration and session tracking.",
            "Integrated Google Gemini API for conversational film discovery and mood matching.",
            "Configured production Docker Compose setup for multi-service deployment."
        ],
        results:
            "Reduced cold-start recommendation error by 34% compared to standard collaborative filtering. Dropped median API response latency from 1.2s to <85ms using Redis caching. Successfully indexed and served 45,000+ movies with full conversational discovery."
    },
    {
        id: "emotion-recognition",
        name: "EmotionAI",
        subtitle: "Real-Time Facial Emotion Recognition & Computer Vision Pipeline",
        category: "Computer Vision",
        featured: true,
        isCaseStudy: true,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        source_code_link: "https://github.com/farhan4783/Emotion-Recognition",
        tags: [
            { name: "python", color: "blue-text-gradient" },
            { name: "fastapi", color: "green-text-gradient" },
            { name: "opencv", color: "red-text-gradient" },
            { name: "deepface", color: "pink-text-gradient" },
            { name: "websockets", color: "blue-text-gradient" },
            { name: "react", color: "green-text-gradient" },
        ],
        metrics: {
            inferenceLatency: "< 45ms",
            accuracy: "88.7%",
            streamingThroughput: "20+ FPS",
            privacyGuarantee: "100% Local/Edge",
        },
        description:
            "A high-throughput computer vision pipeline that detects and analyzes human facial micro-expressions in real-time from webcam video feeds using OpenCV, DeepFace CNNs, and full-duplex WebSockets.",
        problem:
            "Processing continuous webcam video for multi-face emotion classification in real time is notoriously computationally expensive. Standard HTTP POST frame uploads introduce 300ms+ latency and network jitter, while raw frame-by-frame neural network inferences cause severe classification flicker between subtle emotions.",
        solution:
            "Engineered an asynchronous edge-to-server vision pipeline utilizing binary WebSockets over FastAPI. Implemented client-side adaptive frame downsampling with backpressure control, spatial face tracking reuse across consecutive frames, and Exponential Moving Average (EMA) temporal smoothing to eliminate flicker.",
        architecture:
            "1. Client Video Ingestion: HTML5 Canvas captures webcam frames (640x480 @ 15-20 FPS) and emits binary compressed JPEG blobs over persistent WebSocket.\n2. Asynchronous Ingestion Server: FastAPI async WebSocket worker handles concurrent video streams without thread blocking.\n3. Computer Vision Processing: OpenCV pipeline handles grayscale conversion, histogram equalization, and Haar/RetinaFace region-of-interest extraction.\n4. Neural Network Classification: DeepFace lightweight CNN predicts probabilities across 7 core emotion categories (Happy, Sad, Angry, Surprised, Neutral, Fear, Disgust).\n5. Temporal Smoothing & Dispatch: EMA smoothing over 5-frame sliding window, streaming structured confidence scores back to React frontend with Recharts analytics.",
        engineeringDetails: [
            {
                title: "Low-Latency Binary WebSocket Frame Pipeline",
                content: "Replaced HTTP request-response polling with persistent binary WebSockets. Implemented adaptive frame dropping: if server inference queues exceed 50ms, stale unread frames are dropped immediately from the buffer, preventing queue bloat and maintaining a continuous 20+ FPS flow."
            },
            {
                title: "Inference Optimization & Spatial Face Tracking",
                content: "Pre-warmed DeepFace CNN weights in server memory upon connection. Built a spatial face bounding box cache using IoU overlap: face localization is refreshed every 4th frame, while intervening frames track the region of interest directly, cutting total inference computation by 45%."
            },
            {
                title: "Temporal Smoothing & Jitter Elimination",
                content: "Raw frame classifications frequently oscillate between adjacent emotions due to lighting or micro-movements. Developed an Exponential Moving Average (EMA, alpha=0.35) over a 5-frame sliding window on output probability vectors, stabilizing predictions and producing smooth emotional transitions."
            },
            {
                title: "Privacy-Preserving Edge Architecture",
                content: "Video frames are processed in-memory during the ~40ms classification window and immediately deallocated. No video feeds or face images are stored to disk or transmitted to third-party APIs, ensuring 100% user privacy."
            }
        ],
        personalImplementation: [
            "Engineered the asynchronous FastAPI backend managing bi-directional binary WebSocket streaming for multiple concurrent clients.",
            "Built the OpenCV image preprocessing pipeline (face localization, histogram equalization, crop normalization).",
            "Implemented the DeepFace classification inference engine with custom confidence weighting and EMA smoothing algorithms.",
            "Developed the responsive React frontend with live webcam feed, emotion radar meters, and session analytics graphs using Recharts.",
            "Optimized memory management to guarantee zero memory leaks during extended real-time streaming sessions."
        ],
        results:
            "Delivered sub-45ms end-to-end classification latency per frame. Achieved 88.7% classification accuracy across 7 core emotion states. Maintained a consistent 20+ FPS stream with zero UI stuttering and 100% privacy compliance."
    }
];

export const additionalProjects = [
    {
        id: "stock-market-predictor",
        name: "Stock Market Predictor",
        subtitle: "Attention-LSTM Deep Learning Time-Series Model",
        description:
            "Deep learning financial prediction system using LSTM neural networks and technical indicators to forecast market movement with walk-forward validation.",
        challenge: "Handling extreme market volatility and non-stationary time-series data without data leakage.",
        approach: "LSTM network with attention mechanism, trained on 12 technical indicators (RSI, MACD, Bollinger Bands) with walk-forward validation.",
        results: "87.3% directional accuracy on S&P 500 test data, outperforming moving-average baseline by 14 percentage points.",
        tags: [
            { name: "python", color: "blue-text-gradient" },
            { name: "tensorflow", color: "pink-text-gradient" },
            { name: "streamlit", color: "green-text-gradient" },
            { name: "time-series", color: "blue-text-gradient" },
        ],
        metrics: { accuracy: "87.3%", dataPoints: "50K+", inference: "< 200ms" },
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        source_code_link: "https://github.com/farhan4783/Stock_market_predictor",
        category: "AI/ML & Data Science",
        featured: false
    },
    {
        id: "customer-churn",
        name: "Customer Churn Prediction",
        subtitle: "Interpretable Machine Learning with SMOTE & SHAP",
        description:
            "End-to-end ML system that predicts customer attrition and surfaces root causes using tree ensembles and SHAP explainability.",
        challenge: "Severe class imbalance (15% churn rate) causing standard models to predict false negatives on high-value churners.",
        approach: "Ensemble of XGBoost and Random Forest with SMOTE oversampling, paired with TreeSHAP values for feature attribution.",
        results: "92% recall on churn class (up from 43% baseline), providing actionable retention drivers for business decision makers.",
        tags: [
            { name: "python", color: "blue-text-gradient" },
            { name: "scikit-learn", color: "pink-text-gradient" },
            { name: "xgboost", color: "green-text-gradient" },
            { name: "shap", color: "red-text-gradient" },
        ],
        metrics: { recall: "92%", f1Score: "0.88", features: "35+" },
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        source_code_link: "https://github.com/farhan4783/Customer-Churn-Advanced",
        category: "AI/ML & Data Science",
        featured: false
    },
    {
        id: "code-review-assistant",
        name: "AI Code Review Assistant",
        subtitle: "Static Analysis & LLM Code Auditing Pipeline",
        description:
            "Automated code analysis tool that parses Python ASTs, calculates cyclomatic complexity, and generates structured code improvement suggestions via LLMs.",
        challenge: "Automating nuanced code review beyond trivial linting to detect architectural anti-patterns and performance bottlenecks.",
        approach: "Multi-stage pipeline combining Python AST structural parsing with prompt-engineered LLM evaluation chains.",
        results: "Identified 78% of common anti-patterns matched by senior reviewers and generates concrete refactoring diffs.",
        tags: [
            { name: "python", color: "blue-text-gradient" },
            { name: "ast", color: "green-text-gradient" },
            { name: "llm", color: "pink-text-gradient" },
            { name: "code-analysis", color: "blue-text-gradient" },
        ],
        metrics: { patternDetection: "78%", languages: "Python", reviewTime: "< 3s" },
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        source_code_link: "https://github.com/farhan4783/AI-Powered-Code-Review-Assistant",
        category: "AI/ML & Data Science",
        featured: false
    },
    {
        id: "data-analyst-agent",
        name: "AI Data Analyst Agent",
        subtitle: "Autonomous Natural Language to Pandas Data Pipeline",
        description:
            "Streamlit application empowering non-technical users to query CSV and Excel datasets via natural language queries with automated charting.",
        challenge: "Translating ambiguous plain-English business queries into executable Pandas transformations safely without data leakage.",
        approach: "LLM agent with safe sandboxed code execution, automatic schema introspection, and Matplotlib/Plotly chart generation.",
        results: "Processes tabular datasets up to 500MB, supporting 6+ automated visualization formats with zero SQL required.",
        tags: [
            { name: "python", color: "blue-text-gradient" },
            { name: "streamlit", color: "pink-text-gradient" },
            { name: "pandas", color: "green-text-gradient" },
            { name: "ai-agent", color: "blue-text-gradient" },
        ],
        metrics: { chartTypes: "6+", maxDataset: "500MB", interface: "Natural Language" },
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        source_code_link: "https://github.com/farhan4783/AI_Data_Analyst_Agent",
        category: "AI/ML & Data Science",
        featured: false
    }
];

// Unified projects export for backward compatibility
export const projects = [...caseStudies, ...additionalProjects];
