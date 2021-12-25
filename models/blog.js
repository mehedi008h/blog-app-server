import mongoose from 'mongoose';

const blogSchema = mongoose.Schema({
    title: String,
    description: String,
    tags: [String],
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const Blog = mongoose.model('Blog', blogSchema);
export default Blog;