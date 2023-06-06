import getNotifications from "./getNotifications.js";
import markReadNotification from "./markNotificationRead.js";
import deleteNotification from "./deleteNotification.js";

const sentenceController = {};

sentenceController.getSentence = getSentence;
sentenceController.deleteSentence  = deleteSentence;
sentenceController.updateSentence = updateSentence;

export default sentenceController;
