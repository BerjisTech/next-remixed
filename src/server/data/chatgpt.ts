// import {fetchAccessToken} from "@/server/php-api/apiAuth";
// import {getApiBaseUrl} from "@/utils/helpers";
// import {executeQuery} from "@/server/database/mysql/queryHelper";

export const sendRequestToChatgptApi = async (prompt: string): Promise<any> => {
  try {
    const url = "https://api.openai.com/v1/chat/completions";
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer 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`,
    };

    const msg_obj = {
      role: "system",
      content: prompt,
    };

    const json_obj = {
      model: "gpt-3.5-turbo",
      messages: [msg_obj],
    };

    const res = await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(json_obj),
    });

    const result = await res.json();
    return {
      is_success: true,
      content: result.choices[0].message.content,
      usage: result.usage,
    };
  } catch (error) {
    return error;
  }
};
