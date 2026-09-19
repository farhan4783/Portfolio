import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Preloader.css';

const Preloader = () => {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);
    const [statusText, setStatusText] = useState('Initializing neural networks...');

    const statusMessages = [
        'Initializing neural networks...',
        'Loading 3D assets...',
        'Connecting AI models...',
        'Preparing portfolio data...',
        'Optimizing experience...',
        'Almost ready...'
    ];

    useEffect(() => {
        let currentProgress = 0;
        const totalDuration = 2000; // 2 seconds total
        const stepTime = 30;
        const steps = totalDuration / stepTime;
        const increment = 100 / steps;

        const interval = setInterval(() => {
            currentProgress += increment + (Math.random() * increment * 0.5);

            if (currentProgress >= 100) {
                currentProgress = 100;
                clearInterval(interval);
                setTimeout(() => setLoading(false), 400);
            }

            setProgress(Math.min(100, Math.floor(currentProgress)));

            // Update status message based on progress
            const messageIndex = Math.min(
                Math.floor((currentProgress / 100) * statusMessages.length),
                statusMessages.length - 1
            );
            setStatusText(statusMessages[messageIndex]);
        }, stepTime);

        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    className="preloader"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="preloader-content">
                        <motion.div
                            className="preloader-logo"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h1>Farhan<span className="dot">.AI</span></h1>
                        </motion.div>

                        {/* Neural network animation nodes */}
                        <div className="preloader-nodes">
                            {[...Array(5)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="preloader-node"
                                    animate={{
                                        scale: [1, 1.3, 1],
                                        opacity: [0.3, 1, 0.3],
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        delay: i * 0.2,
                                    }}
                                />
                            ))}
                        </div>

                        <div className="progress-container">
                            <div className="progress-bar" style={{ width: `${progress}%` }}></div>
                        </div>

                        <div className="preloader-status">
                            <p className="loading-text">{progress}%</p>
                            <p className="status-text">{statusText}</p>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
