import express from "express";
import Routes from "./routes.js";
import errorMiddleware from "./middlewares/error.middleware.js";

const app = express();

app.use(express.json());
app.use(Routes());
app.use(errorMiddleware);

const PORT = process.env.PORT;

const bootstrap = async () => {
    try {
        


        app.listen(PORT, () => console.log(`Server is running ${PORT}`));
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
bootstrap();