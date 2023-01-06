"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentModel = exports.AnswerModel = exports.DiscussionModel = void 0;
const mongoose_1 = require("mongoose");
const DiscussionSchema = new mongoose_1.Schema({
    question: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    author: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    likes: Number,
    tags: Array,
    answers: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'DiscussionAnswer'
        }
    ]
}, {
    timestamps: true
});
const AnswerSchema = new mongoose_1.Schema({
    answer: {
        type: String,
        required: true
    },
    author: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User'
    },
    likes: mongoose_1.Schema.Types.Number,
    comments: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'DiscussionComment'
        }
    ]
}, {
    timestamps: true
});
const CommentSchema = new mongoose_1.Schema({
    answer: {
        type: String,
        required: true
    },
    author: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User'
    },
    date: String
}, {
    timestamps: true
});
const DiscussionModel = (0, mongoose_1.model)('Discussion', DiscussionSchema);
exports.DiscussionModel = DiscussionModel;
const AnswerModel = (0, mongoose_1.model)('DiscussionAnswer', AnswerSchema);
exports.AnswerModel = AnswerModel;
const CommentModel = (0, mongoose_1.model)('DiscussionComment', CommentSchema);
exports.CommentModel = CommentModel;
