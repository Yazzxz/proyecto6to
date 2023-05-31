//Modelo de ejemplo para alojar datos en una DB mongo
const mongoose = require("mongoose");

//Creación del Schema Post
const postSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    id: {
        type: Number,
        required: true
    },
    longitud: {
        type: Number,
        required: true
    },
    idioma: {
        type: String,
        required: true
    },
    tags: {
        type: Array,
        required: true,
    },
    prompt: {
        type: String,
        required: true,
    },
    contenido: {
        type: String,
        required: true,
    },
    edad: {
        type: Number,
        required: true,
    },
    genero: {
        type: String,
        required: true,
    },
    fecha: {
        type: Date,
        required: true,
    },
});

//Creación del modelo Post
const Post = mongoose.model("Post", postSchema);

module.exports = Post;
