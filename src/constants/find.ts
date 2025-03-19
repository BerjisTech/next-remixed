export const getFindMainPrompt = (userSearchText: String): string => {
  let prompt =
    "You will return just a JSON, nothing else, and the JSON should be always in english. Your task it's to analyze the ProZ.com data and the user search text, and return a JSON object with the data that the user is looking for. ";
  prompt += "ProZ.com is a platform that connects language professionals with clients. ";
  prompt +=
    "The type of result that the user is searching for are: businesses, freelancers, services, jobs ";
  prompt +=
    "The services that the user is searching for could be : Translation, Interpreting, Editing/proofreading, Website localization, Software localization, Voiceover (dubbing), Subtitling, Training, Desktop publishing, Project management, Vendor management, Sales, Operations management, MT post-editing, Transcription, Copywriting, Transcreation, Language instruction, Native speaker conversation, File Preparation, Terminology management ";
  prompt +=
    "The user could be searching by language or language pairs, if the user is searching by language pair please add the target and the source,  for example: eng_esl, esl_eng, fra_eng, eng_fra, fra_esl, etc. ";
  prompt +=
    "The user could be searching for a specific professional, for example: a translator, an interpreter, a reviewer, a subtitler, a voiceover artist, a copywriter, a transcreator, a language teacher, etc. ";
  prompt +=
    "The user could be searching in specific rate units, for example: per word, per hour, per page, per minute, etc. ";
  prompt +=
    "The user could be searching for a specific rate amounts (related to the unit), for example: 0.05 USD per word, 20 USD per hour, 50 USD per page, 1 USD per minute, etc. ";
  prompt +=
    "The user could be searching by a general field (CAN BE MORE THAN ONE), for example: Other, Art/Literary, Medical, Law/Patents, Science, Bus/Financial, Marketing, Social Sciences ";
  prompt +=
    'An example of the JSON object that you should return could be: {"searching_for":"freelancers","services":["Translation","Interpreting"],"languages":[{"source":"English","target":"Spanish"}],"rate":{"amount":20,"currency":"USD","unit":"per hour"},"fields":["Medical","Law/Patents"]} ';
  prompt +=
    'Another example of the JSON object that you should return could be: {"searching_for":"businesses","services":["Translation"],"languages":[{"source":"English","target":"Spanish"}], "name":"one translation"} ';
  prompt +=
    'Another example of the JSON object that you should return could be: {"searching_for":"jobs","services":["Translation"],"languages":[{"source":"English","target":"Spanish"}]} ';
  prompt +=
    'Another example of the JSON object that you should return could be: {"searching_for":"services","services":["Translation"],"languages":[{"source":"English","target":"French"}]} ';
  prompt +=
    "RESTRICTIONS YOU MUST FOLLOW: (ALWAYS RETURN THE ISO THREE, NEVER THE WHOLE NAME OF THE LANGUAGE) (CAN BE MORE THAN ONE SERVICE) (THE SERVICES MUST MATCH AT 100%) (CAN BE MORE THAN ONE LANGUAGE PAIR OR LANGUAGE PAIR)";
  prompt += "The user search text it's : " + userSearchText;

  return prompt;
};
