import { useState } from "react";

const useInterpretingCallsHook = () => {
  const [interpretingCalls, setInterpretingCalls] = useState<any[]>([]);

  const getInterpretersCalls = async () => {
    const InterpretingCallsData = [
      {
        id: 0,
        applicants: 29,
        web_url: "",
        type: "interpreting_call",
        is_probono: false,
        summary: "Interpreting call for a conference (Staff test)",
        description: "Interpreting call for a conference (Staff test)",
        status: "open",
        time_posted: new Date(new Date().setDate(new Date().getDate() - 2)).toISOString(),
        delivery_deadline: new Date(new Date().setDate(new Date().getDate() + 2)).toISOString(),
        language_pairs: ["eng_esl"],
        volume_amount: 100,
        volume_unit: "words",
        contact_method: "url",
        contact_info: {
          contact_hidden: false,
          email: "no-reply@proz.com",
          full_name: "ProZ.com Interpreting calls",
          show_full_name: true,
          company: "ProZ.com Interpreting calls",
          business_img: "https://sslcdn.proz.com/zf/images/proz-round-logo.png",
          city: "Syracuse",
          country: "US",
        },
        offered_rate: {
          amount: 0,
          currency: "usd",
          unit: "words",
        },
        provider_requirements: {
          proz_members_only: false,
          language_pairs: ["eng_esl"],
          native_language_importance: "preferred",
        },
      },
    ];
    setInterpretingCalls(InterpretingCallsData);
  };

  return { interpretingCalls, getInterpretersCalls };
};

export default useInterpretingCallsHook;
