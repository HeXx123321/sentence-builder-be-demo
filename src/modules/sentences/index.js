import sentenceRouter from "./routes";

const sentenceModule = {
    init: (app) => {
        app.use("/api/v0.1", sentenceRouter);
        console.log(" - Module: Sentence Module Loaded")
    }
}

export default sentenceModule;
