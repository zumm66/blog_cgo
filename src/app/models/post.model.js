const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Post = new Schema(
    {
        author: { type: String },
        title: { type: String, required: true },
        detail: { type: String },
        image: { type: String },
        description: { type: String },
        slug: { type: String, slug: "title", unique: true },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Post", Post);
