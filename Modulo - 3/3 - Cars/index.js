import express from 'express';
import brandsRouter from "./routes/brand.js"



const app = express();
app.use(express.json());
app.use("/marcas", brandsRouter);
app.listen(3000, () => console.log("API Started"));










