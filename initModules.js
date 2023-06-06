import sentenceModule from "./src/modules/sentences";
import wordModule from "./src/modules/words";

const initModules = (app) => {
    sentenceModule.init(app);
    wordModule.init(app);
}

export default initModules;