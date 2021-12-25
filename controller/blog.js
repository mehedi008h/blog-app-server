import mongoose from 'mongoose';
import Blog from '../models/blog.js';

export const getBlogs = async (req, res) => {
    try {
        const blog = await Blog.find();
        res.status(200).json(blog);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createBlog = async (req, res) => {
    const blog = req.body;
    const newBlog = new Blog({ ...blog, createdAt: new Date().toISOString() });

    try {
        await newBlog.save();
        res.status(201).json(newBlog);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}