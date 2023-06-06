import wordRouter from "./routes";

const wordModule = {
    init: (app) => {
        app.use("/api/v0.1", wordRouter);
        console.log(" - Module: Word Module Loaded")
    }
}

export default wordModule;
