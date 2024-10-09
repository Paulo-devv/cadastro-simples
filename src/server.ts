import express from "express";
import beerRoutes from './routes/routes';

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/', beerRoutes)
app.listen(PORT, () => {
    console.log(`Server running on the port http://localhost:${PORT}`)
});


export default app;