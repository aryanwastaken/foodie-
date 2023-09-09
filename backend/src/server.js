import express from 'express';
import cors from 'cors';
import foodRouter from './routers/food.router.js'

const app = express();

app.use(cors(
    // {
    // credentials: true,
    // origin: ['https//localhost:3000']
    // }
)
);

app.use('/api/foods', foodRouter);

const PORT = 5000;

app.listen(PORT, () => {
    console.log('listening on port: ',PORT);
})
