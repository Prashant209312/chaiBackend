const express = require('express');


const app = express();
const jokes = [
    {
        id: 1,
        title: "Atom Trust Issues",
        content: "Why don't scientists trust atoms? Because they make up everything!",
        category: "Science",
        rating: 4.5
    },
    {
        id: 2,
        title: "Scarecrow Award",
        content: "Why did the scarecrow win an award? Because he was outstanding in his field!",
        category: "Humor",
        rating: 4.7
    },
    {
        id: 3,
        title: "Ocean Conversation",
        content: "What did the ocean say to the beach? Nothing, it just waved!",
        category: "Puns",
        rating: 4.2
    },
    {
        id: 4,
        title: "Math Jokes",
        content: "Parallel lines have so much in common. It's a shame they'll never meet!",
        category: "Math",
        rating: 4.8
    },
    {
        id: 5,
        title: "Dad Jokes",
        content: "Why did the bicycle fall over? Because it was two-tired!",
        category: "Dad Jokes",
        rating: 4.4
    }
];


app.get('/', (req, res) => {
    res.send('Server is ready');
});

const port = 3000;

// const server = app.listen(port, () => {
//     console.log(`Server is running at http://localhost:${port}`);
// });
app.get('/jokes', (req, res) => {
    res.send(jokes)
})
app.listen(port, () => {
    console.log('server is listining')
})
// server.on('error', (err) => {
//     console.error('Server error:', err.message);
// });