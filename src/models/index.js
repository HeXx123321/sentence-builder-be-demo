import adjective from "./adjectives/adjective";
import adverb from "./adverbs/adverb";
import conjunction from "./conjunctions/conjunction";
import determiner from "./determiners/determiner";
import noun from "./nouns/noun";
import pronoun from "./pronouns/Pronoun";
import Sentence from "./sentence/Sentence";

const models = {};

models.Sentence = Sentence;
models.adjective = adjective;
models.adverb = adverb;
models.conjunction = conjunction;
models.determiner = determiner;
models.noun = noun;
models.pronoun = pronoun;

export default models;