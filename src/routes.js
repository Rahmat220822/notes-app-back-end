const { addNoteHandler, getAllNoteHandler, getNoteByIdHandler, editNoteByIdHandler, deleteNoteByIdHandler } = require('./handler');

const routes = [
    {
        // menyimpan  data
        method: 'POST',
        path: '/notes',
        handler: addNoteHandler,
    },
    {
        // Menampilkan data
        method : 'GET',
        path : '/notes',
        handler: getAllNoteHandler,
    },
    {
        // untuk menangani permintaan HTTP GET pada path '/notes/{id}'.
        method : 'GET',
        path: '/notes/{id}',
        handler: getNoteByIdHandler,
    },
    {
        // mengubah data
        method: 'PUT',
        path: '/notes/{id}',
        handler: editNoteByIdHandler,
    },
    {
        // menghapus data
        method : 'DELETE',
        path: '/notes/{id}',
        handler: deleteNoteByIdHandler,
    },
];

module.exports = routes;