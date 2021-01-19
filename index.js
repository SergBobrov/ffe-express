import express from 'express';

const PORT = process.env.PROT || 3000;
const app = express();

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}...`);
});

