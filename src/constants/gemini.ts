export const generationConfig: any = {
  temperature: 0.1,
  topP: 0,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
  responseSchema: {
    type: "object",
    properties: {
      searching_for: {
        type: "string",
        enum: [
          "businesses",
          "freelancers",
          "services",
          "jobs",
          "forums",
          "membership",
          "bus_membership",
          "users",
        ],
      },
      services: {
        type: "array",
        items: {
          type: "string",
          enum: [
            "Translation",
            "Interpreting",
            "Editing/proofreading",
            "Website localization",
            "Software localization",
            "Voiceover (dubbing)",
            "Subtitling",
            "Training",
            "Desktop publishing",
            "Project management",
            "Vendor management",
            "Sales",
            "Operations management",
            "MT post-editing",
            "Transcription",
            "Copywriting",
            "Transcreation",
            "Language instruction",
            "Native speaker conversation",
            "File Preparation",
            "Terminology management",
          ],
        },
      },
      languages: {
        type: "array",
        items: {
          type: "object",
          properties: {
            source: {
              type: "string",
            },
            target: {
              type: "string",
            },
          },
        },
      },
      rate: {
        type: "object",
        properties: {
          amount: {
            type: "string",
          },
          currency: {
            type: "string",
          },
          unit: {
            type: "string",
            enum: ["hour", "word", "page", "minute"],
          },
        },
      },
      fields: {
        type: "array",
        items: {
          type: "string",
        },
      },
      keyword: {
        type: "string",
      },
    },
    required: ["searching_for"],
  },
};

export const geminiAiPrompt: any = [
  {
    text: "you will respond what the user needs, and never send all the services, just what is needed. I need you understand the following examples with inputs and outputs, and based on the user text you will respond. Also, take in account that the languages MUST BE THERE if the user wrote those, and MUST BE in ISO THREE",
  },
  {
    text: "input: I'm looking for a freelance translator from English to Spanish specializing in medical texts.",
  },
  {
    text: "output: {searching_for: 'freelancers', services: ['Translation'], languages: [{source: 'eng', target: 'esl'}], fields: ['Medical']}",
  },
  { text: "input: I need a translator urgently for a legal document from English to Spanish." },
  {
    text: "output: {searching_for: 'freelancers', services: ['Translation'], languages: [{source: 'eng', target: 'esl'}], fields: ['Law/Patents']}",
  },
  {
    text: "input: Are there any translation companies with experience in subtitling from English to French?",
  },
  {
    text: "output: {searching_for: 'businesses', services: ['Subtitling'], languages: [{source: 'eng', target: 'fra'}]}",
  },
  { text: "input: I'm looking for a job as a freelance translator from English to Spanish." },
  {
    text: "output: {searching_for: 'jobs', services: ['Translation'], languages: [{source: 'eng', target: 'esl'}]}",
  },
  { text: "input: bsas-translators srl" },
  { text: "output: {searching_for: 'businesses', keyword: 'bsas-translators'}" },
  { text: "input: Native Localization" },
  { text: "output: {searching_for: 'businesses', keyword: 'Native Localization'}" },
  { text: "input: spanish english translators" },
  {
    text: "output: {searching_for: 'freelancers', services: ['Translation'], languages: [{source: 'eng', target: 'esl'}]}",
  },
  { text: "input: voiceover in english" },
  {
    text: "output: {'searching_for':'freelancers','services':['Voiceover (dubbing)'],'languages':[{'source':'eng'}]}",
  },
  { text: "input: post editing french" },
  {
    text: "output: {'searching_for':'freelancers','services':['MT Post-editing'],'languages':[{'source':'fra'}]}",
  },
  { text: "input: desk publishing in germany" },
  {
    text: "output: {'searching_for':'freelancers','services':['Desktop Publishing'],'languages':[{'target':'deu'}]}",
  },
  { text: "input: editing or similar?" },
  { text: "output: {'searching_for':'freelancers','services':['Editing/Proofreading']}" },
  { text: "input: proofreading?" },
  { text: "output: {'searching_for':'freelancers','services':['Editing/Proofreading']}" },
  { text: "input: jobs in english to spanish" },
  { text: "output: {'searching_for': 'jobs', 'languages': [{'source': 'eng', 'target': 'esl'}]}" },
  { text: "input: jobs" },
  { text: "output: {'searching_for': 'jobs'}" },
  { text: "input: proz.com" },
  { text: "output: {'searching_for': 'businesses', 'keyword': 'proz.com'}" },
  { text: "input: new forums" },
  { text: "output: {'searching_for': 'forums', 'keyword': 'new forums'}" },
  { text: "input: foros en español" },
  { text: "output: {'searching_for': 'forums', 'languages': [{'target': 'spa'}]}" },
  { text: "input: surprise me" },
  { text: "output: {'searching_for': 'jobs'}" },
  { text: "input: surprise me" },
  { text: "output: {'searching_for': 'forums'}" },
  { text: "input: business memberships" },
  { text: "output: {'searching_for': 'memberships', 'keyword': 'business'}" },
  { text: "input: membership" },
  { text: "output: {'searching_for': 'memberships'}" },
  { text: "input: professional membership" },
  { text: "output: {'searching_for': 'memberships', 'keyword': 'professional'}" },
  { text: "input: english to spanish" },
  {
    text: "output: {'searching_for': 'freelancers', 'services': ['Translation'], 'languages': [{'source': 'eng', 'target': 'esl'}]}",
  },
  { text: "input: Nicolas calcagno" },
  { text: "output: {'searching_for': 'users', 'keyword': 'Nicolas calcagno'}" },
  { text: "input: Lukas fonseca" },
  { text: "output: {'searching_for': 'users', 'keyword': 'Lukas fonseca'}" },
  { text: "input: LocHere" },
  { text: "output: {'searching_for': 'businesses', 'keyword': 'LocHere'}" },
  { text: "input: PureFluent" },
  { text: "output: {'searching_for': 'businesses', 'keyword': 'PureFluent'}" },
  { text: "input: laura finch" },
  { text: "output: {'searching_for': 'users', 'keyword': 'laura finch'}" },
  { text: "input: interpreting in argentina" },
  {
    text: "output: {'searching_for': 'freelancers', 'services': ['Interpreting'], 'languages': [{'target': 'spa'}]}",
  },
  { text: "input: foro jared tabor" },
  { text: "output: {'searching_for': 'forums', 'keyword': 'jared tabor'}" },
  { text: "input: traductores frances a español" },
  {
    text: "output: {'searching_for': 'freelancers', 'services': ['Translation'], 'languages': [{'source': 'fra', 'target': 'esl'}]}",
  },
  { text: "input: interpretes frances italiano " },
  {
    text: "output: {'searching_for': 'freelancers', 'services': ['Interpreting'], 'languages': [{'source': 'fra', 'target': 'ita'}]}",
  },
];
