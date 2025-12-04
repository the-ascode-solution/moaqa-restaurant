import express from 'express';
import Review from '../models/Review';

const router = express.Router();

router.post('/submit', async (req, res) => {
    const { content, userId } = req.body;
    const newReview = new Review({
        content,
        userId,
        // ...existing code...
        status: 'pending', // Set status to pending
    });

    try {
        await newReview.save();
        res.status(201).json(newReview);
    } catch (error) {
        res.status(500).json({ message: 'Error submitting review' });