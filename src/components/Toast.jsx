import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle, FaExclamationCircle, FaTimes } from 'react-icons/fa';
import '../styles/Toast.css';

const Toast = ({ message, type = 'success', isVisible, onClose, duration = 5000 }) => {
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                onClose();
            }, duration);
            return () => clearTimeout(timer);
        }
    }, [isVisible, duration, onClose]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className={`toast toast-${type}`}
                    initial={{ opacity: 0, y: 50, x: '-50%' }}
                    animate={{ opacity: 1, y: 0, x: '-50%' }}
                    exit={{ opacity: 0, y: 50, x: '-50%' }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="toast-icon">
                        {type === 'success' ? <FaCheckCircle /> : <FaExclamationCircle />}
                    </div>
                    <p className="toast-message">{message}</p>
                    <button className="toast-close" onClick={onClose}>
                        <FaTimes />
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Toast;
