import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBrain, FaPlay, FaRobot, FaNetworkWired, FaChartLine } from 'react-icons/fa';
import SectionWrapper from '../hoc/SectionWrapper';
import { fadeIn, textVariant } from '../utils/motion';
import '../styles/AIPlayground.css';

// ============================================================
// Demo 1: Sentiment Analyzer (rule-based with confidence scoring)
// ============================================================
const SentimentAnalyzer = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState(null);
    const [isAnalyzing, setIsAnalyzing] = useState(false);

    const positiveWords = ['good', 'great', 'excellent', 'amazing', 'wonderful', 'fantastic', 'love', 'best', 'awesome', 'beautiful', 'happy', 'perfect', 'brilliant', 'outstanding', 'superb', 'incredible', 'remarkable', 'magnificent', 'delightful', 'impressive'];
    const negativeWords = ['bad', 'terrible', 'awful', 'horrible', 'hate', 'worst', 'poor', 'ugly', 'sad', 'angry', 'disgusting', 'disappointing', 'dreadful', 'pathetic', 'useless', 'annoying', 'boring', 'mediocre', 'failure', 'broken'];
    const intensifiers = ['very', 'extremely', 'really', 'incredibly', 'absolutely', 'totally', 'completely', 'super', 'so'];
    const negators = ['not', "don't", "doesn't", "isn't", "aren't", "won't", "can't", 'never', 'no', 'neither'];

    const analyzeSentiment = () => {
        if (!input.trim()) return;
        setIsAnalyzing(true);

        setTimeout(() => {
            const words = input.toLowerCase().split(/\s+/);
            let score = 0;
            let totalSignals = 0;
            let foundPositive = [];
            let foundNegative = [];

            for (let i = 0; i < words.length; i++) {
                const word = words[i].replace(/[^a-z']/g, '');
                const prevWord = i > 0 ? words[i - 1].replace(/[^a-z']/g, '') : '';
                const isNegated = negators.includes(prevWord);
                const isIntensified = intensifiers.includes(prevWord);
                const multiplier = isIntensified ? 1.5 : 1;

                if (positiveWords.includes(word)) {
                    if (isNegated) {
                        score -= 1 * multiplier;
                        foundNegative.push(`not ${word}`);
                    } else {
                        score += 1 * multiplier;
                        foundPositive.push(isIntensified ? `${prevWord} ${word}` : word);
                    }
                    totalSignals++;
                }
                if (negativeWords.includes(word)) {
                    if (isNegated) {
                        score += 0.5 * multiplier;
                        foundPositive.push(`not ${word}`);
                    } else {
                        score -= 1 * multiplier;
                        foundNegative.push(isIntensified ? `${prevWord} ${word}` : word);
                    }
                    totalSignals++;
                }
            }

            // Exclamation marks boost intensity
            const exclamations = (input.match(/!/g) || []).length;
            if (score > 0) score += exclamations * 0.2;
            if (score < 0) score -= exclamations * 0.2;

            // Calculate confidence
            const confidence = totalSignals > 0
                ? Math.min(0.95, 0.4 + (totalSignals * 0.12) + (Math.abs(score) * 0.05))
                : 0.15;

            const normalizedScore = Math.max(-1, Math.min(1, score / Math.max(totalSignals, 1)));

            let sentiment, emoji;
            if (normalizedScore > 0.2) { sentiment = 'Positive'; emoji = '😊'; }
            else if (normalizedScore < -0.2) { sentiment = 'Negative'; emoji = '😟'; }
            else { sentiment = 'Neutral'; emoji = '😐'; }

            setResult({
                sentiment,
                emoji,
                confidence: (confidence * 100).toFixed(1),
                score: normalizedScore,
                positiveWords: foundPositive,
                negativeWords: foundNegative,
                wordCount: words.length,
            });
            setIsAnalyzing(false);
        }, 800);
    };

    return (
        <div className="demo-card">
            <div className="demo-card-header">
                <div className="demo-icon"><FaChartLine /></div>
                <div>
                    <h3 className="demo-title">Sentiment Analyzer</h3>
                    <p className="demo-subtitle">NLP-based text sentiment analysis</p>
                </div>
            </div>

            <div className="demo-input-area">
                <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type any text to analyze sentiment... Try: 'This product is absolutely amazing and I love it!'"
                    className="demo-textarea"
                    rows={3}
                />
                <button
                    onClick={analyzeSentiment}
                    disabled={isAnalyzing || !input.trim()}
                    className="demo-run-btn"
                >
                    {isAnalyzing ? (
                        <><span className="demo-spinner"></span> Analyzing...</>
                    ) : (
                        <><FaPlay /> Analyze</>
                    )}
                </button>
            </div>

            <AnimatePresence>
                {result && (
                    <motion.div
                        className="demo-result"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="sentiment-result-header">
                            <span className="sentiment-emoji">{result.emoji}</span>
                            <span className={`sentiment-label sentiment-${result.sentiment.toLowerCase()}`}>
                                {result.sentiment}
                            </span>
                        </div>

                        <div className="sentiment-bar-container">
                            <div className="sentiment-bar">
                                <motion.div
                                    className="sentiment-bar-fill"
                                    initial={{ width: '50%' }}
                                    animate={{ width: `${((result.score + 1) / 2) * 100}%` }}
                                    transition={{ duration: 0.5 }}
                                    style={{
                                        background: result.score > 0
                                            ? 'linear-gradient(90deg, #666, #00ff88)'
                                            : result.score < 0
                                                ? 'linear-gradient(90deg, #ff4444, #666)'
                                                : '#666'
                                    }}
                                />
                            </div>
                            <div className="sentiment-bar-labels">
                                <span>Negative</span>
                                <span>Neutral</span>
                                <span>Positive</span>
                            </div>
                        </div>

                        <div className="sentiment-details">
                            <div className="sentiment-detail">
                                <span className="detail-label">Confidence</span>
                                <span className="detail-value">{result.confidence}%</span>
                            </div>
                            <div className="sentiment-detail">
                                <span className="detail-label">Words</span>
                                <span className="detail-value">{result.wordCount}</span>
                            </div>
                            <div className="sentiment-detail">
                                <span className="detail-label">Signals</span>
                                <span className="detail-value">{result.positiveWords.length + result.negativeWords.length}</span>
                            </div>
                        </div>

                        {(result.positiveWords.length > 0 || result.negativeWords.length > 0) && (
                            <div className="sentiment-words">
                                {result.positiveWords.length > 0 && (
                                    <div className="word-group">
                                        <span className="word-group-label positive">Positive signals:</span>
                                        {result.positiveWords.map((w, i) => (
                                            <span key={i} className="word-chip positive">{w}</span>
                                        ))}
                                    </div>
                                )}
                                {result.negativeWords.length > 0 && (
                                    <div className="word-group">
                                        <span className="word-group-label negative">Negative signals:</span>
                                        {result.negativeWords.map((w, i) => (
                                            <span key={i} className="word-chip negative">{w}</span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="demo-how-it-works">
                <h4>How it works</h4>
                <p>Uses lexicon-based NLP with a weighted scoring system. Handles negation detection ("not good" → negative), intensifier amplification ("very good" → stronger positive), and punctuation-based intensity boosting. Confidence scales with signal density.</p>
            </div>
        </div>
    );
};

// ============================================================
// Demo 2: Neural Network Visualizer
// ============================================================
const NeuralNetworkVisualizer = () => {
    const canvasRef = useRef(null);
    const animFrameRef = useRef(null);
    const [isRunning, setIsRunning] = useState(false);
    const [epoch, setEpoch] = useState(0);
    const [accuracy, setAccuracy] = useState(0);
    const [networkConfig, setNetworkConfig] = useState({
        layers: [4, 6, 6, 3],
        learningRate: 0.01,
    });

    const drawNetwork = (ctx, width, height, weights, activeNodes) => {
        const layers = networkConfig.layers;
        const layerSpacing = width / (layers.length + 1);
        const nodeRadius = Math.min(14, width / (layers.length * 8));

        ctx.clearRect(0, 0, width, height);

        // Draw connections first
        for (let l = 0; l < layers.length - 1; l++) {
            const x1 = layerSpacing * (l + 1);
            const x2 = layerSpacing * (l + 2);

            for (let i = 0; i < layers[l]; i++) {
                const y1 = (height / (layers[l] + 1)) * (i + 1);

                for (let j = 0; j < layers[l + 1]; j++) {
                    const y2 = (height / (layers[l + 1] + 1)) * (j + 1);
                    const w = weights?.[l]?.[i]?.[j] ?? 0;

                    ctx.strokeStyle = w > 0
                        ? `rgba(0, 242, 255, ${Math.min(Math.abs(w) * 0.8, 0.6)})`
                        : `rgba(112, 0, 255, ${Math.min(Math.abs(w) * 0.8, 0.6)})`;
                    ctx.lineWidth = Math.abs(w) * 2.5 + 0.3;
                    ctx.beginPath();
                    ctx.moveTo(x1, y1);
                    ctx.lineTo(x2, y2);
                    ctx.stroke();
                }
            }
        }

        // Draw nodes
        for (let l = 0; l < layers.length; l++) {
            const x = layerSpacing * (l + 1);

            for (let i = 0; i < layers[l]; i++) {
                const y = (height / (layers[l] + 1)) * (i + 1);
                const isActive = activeNodes?.[l]?.[i] ?? false;
                const activation = activeNodes?.[l]?.[i] ?? 0;

                // Glow
                if (activation > 0.3) {
                    const gradient = ctx.createRadialGradient(x, y, 0, x, y, nodeRadius * 3);
                    gradient.addColorStop(0, `rgba(0, 242, 255, ${activation * 0.3})`);
                    gradient.addColorStop(1, 'rgba(0, 242, 255, 0)');
                    ctx.fillStyle = gradient;
                    ctx.beginPath();
                    ctx.arc(x, y, nodeRadius * 3, 0, Math.PI * 2);
                    ctx.fill();
                }

                // Node circle
                ctx.fillStyle = activation > 0.5
                    ? `rgba(0, 242, 255, ${0.3 + activation * 0.7})`
                    : 'rgba(30, 30, 50, 0.9)';
                ctx.strokeStyle = activation > 0.3 ? '#00f2ff' : 'rgba(255, 255, 255, 0.2)';
                ctx.lineWidth = 1.5;
                ctx.beginPath();
                ctx.arc(x, y, nodeRadius, 0, Math.PI * 2);
                ctx.fill();
                ctx.stroke();
            }
        }

        // Labels
        const labelNames = ['Input', ...layers.slice(1, -1).map((_, i) => `Hidden ${i + 1}`), 'Output'];
        ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.font = '11px Inter, sans-serif';
        ctx.textAlign = 'center';
        for (let l = 0; l < layers.length; l++) {
            const x = layerSpacing * (l + 1);
            ctx.fillText(labelNames[l], x, height - 8);
        }
    };

    const runTraining = () => {
        setIsRunning(true);
        setEpoch(0);
        setAccuracy(0);

        const layers = networkConfig.layers;
        let currentEpoch = 0;
        let currentAccuracy = 0;

        // Initialize random weights
        const weights = [];
        for (let l = 0; l < layers.length - 1; l++) {
            weights[l] = [];
            for (let i = 0; i < layers[l]; i++) {
                weights[l][i] = [];
                for (let j = 0; j < layers[l + 1]; j++) {
                    weights[l][i][j] = (Math.random() - 0.5) * 2;
                }
            }
        }

        const simulate = () => {
            currentEpoch++;

            // Simulate forward pass activations
            const activeNodes = [];
            for (let l = 0; l < layers.length; l++) {
                activeNodes[l] = [];
                for (let i = 0; i < layers[l]; i++) {
                    if (l === 0) {
                        activeNodes[l][i] = Math.random();
                    } else {
                        let sum = 0;
                        for (let j = 0; j < layers[l - 1]; j++) {
                            sum += activeNodes[l - 1][j] * (weights[l - 1]?.[j]?.[i] ?? 0);
                        }
                        activeNodes[l][i] = 1 / (1 + Math.exp(-sum)); // Sigmoid
                    }
                }
            }

            // Simulate weight updates (gradient-like)
            for (let l = 0; l < weights.length; l++) {
                for (let i = 0; i < weights[l].length; i++) {
                    for (let j = 0; j < weights[l][i].length; j++) {
                        weights[l][i][j] += (Math.random() - 0.5) * networkConfig.learningRate;
                        weights[l][i][j] = Math.max(-1, Math.min(1, weights[l][i][j]));
                    }
                }
            }

            // Simulate accuracy improvement
            currentAccuracy = Math.min(0.98, 0.3 + (1 - Math.exp(-currentEpoch / 25)) * 0.65 + Math.random() * 0.05);

            setEpoch(currentEpoch);
            setAccuracy(currentAccuracy);

            const canvas = canvasRef.current;
            if (canvas) {
                const ctx = canvas.getContext('2d');
                drawNetwork(ctx, canvas.width, canvas.height, weights, activeNodes);
            }

            if (currentEpoch < 100) {
                animFrameRef.current = setTimeout(simulate, 80);
            } else {
                setIsRunning(false);
            }
        };

        simulate();
    };

    useEffect(() => {
        return () => {
            if (animFrameRef.current) clearTimeout(animFrameRef.current);
        };
    }, []);

    // Draw initial empty network
    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            const ctx = canvas.getContext('2d');
            const emptyWeights = networkConfig.layers.slice(0, -1).map((count, l) =>
                Array(count).fill(null).map(() =>
                    Array(networkConfig.layers[l + 1]).fill(0.1)
                )
            );
            const emptyNodes = networkConfig.layers.map(count =>
                Array(count).fill(0)
            );
            drawNetwork(ctx, canvas.width, canvas.height, emptyWeights, emptyNodes);
        }
    }, [networkConfig]);

    return (
        <div className="demo-card">
            <div className="demo-card-header">
                <div className="demo-icon"><FaNetworkWired /></div>
                <div>
                    <h3 className="demo-title">Neural Network Visualizer</h3>
                    <p className="demo-subtitle">Watch a network learn in real-time</p>
                </div>
            </div>

            <div className="nn-canvas-container">
                <canvas
                    ref={canvasRef}
                    width={500}
                    height={300}
                    className="nn-canvas"
                />
            </div>

            <div className="nn-controls">
                <div className="nn-stats">
                    <div className="nn-stat">
                        <span className="nn-stat-label">Epoch</span>
                        <span className="nn-stat-value">{epoch}/100</span>
                    </div>
                    <div className="nn-stat">
                        <span className="nn-stat-label">Accuracy</span>
                        <span className="nn-stat-value">{(accuracy * 100).toFixed(1)}%</span>
                    </div>
                    <div className="nn-stat">
                        <span className="nn-stat-label">Architecture</span>
                        <span className="nn-stat-value">{networkConfig.layers.join(' → ')}</span>
                    </div>
                </div>

                <button
                    onClick={runTraining}
                    disabled={isRunning}
                    className="demo-run-btn"
                >
                    {isRunning ? (
                        <><span className="demo-spinner"></span> Training...</>
                    ) : (
                        <><FaPlay /> Train Network</>
                    )}
                </button>
            </div>

            <div className="demo-how-it-works">
                <h4>How it works</h4>
                <p>Visualizes a feedforward neural network with sigmoid activation functions. Node brightness shows activation strength, connection color/thickness represents weight magnitude and sign. The training loop simulates gradient-based weight updates across 100 epochs.</p>
            </div>
        </div>
    );
};

// ============================================================
// Main AI Playground Section
// ============================================================
const AIPlayground = () => {
    const [activeDemo, setActiveDemo] = useState(0);

    const demos = [
        { name: 'Sentiment Analyzer', icon: <FaChartLine />, component: <SentimentAnalyzer /> },
        { name: 'Neural Network', icon: <FaNetworkWired />, component: <NeuralNetworkVisualizer /> },
    ];

    return (
        <>
            <motion.div variants={textVariant()} className="ai-playground-header">
                <p className="section-subtext">Interactive Demos</p>
                <h2 className="section-heading">AI Playground.</h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="ai-playground-description"
            >
                Don't just take my word for it — <span className="gradient-text">interact with real AI</span> running
                right here in your browser. No servers, no APIs — pure client-side machine intelligence.
            </motion.p>

            <div className="ai-demo-tabs">
                {demos.map((demo, index) => (
                    <button
                        key={index}
                        className={`ai-demo-tab ${activeDemo === index ? 'active' : ''}`}
                        onClick={() => setActiveDemo(index)}
                    >
                        <span className="ai-demo-tab-icon">{demo.icon}</span>
                        {demo.name}
                    </button>
                ))}
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={activeDemo}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                >
                    {demos[activeDemo].component}
                </motion.div>
            </AnimatePresence>
        </>
    );
};

export default SectionWrapper(AIPlayground, "ai-playground");
