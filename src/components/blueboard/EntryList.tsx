import React from "react";
import { AgencyRating } from "@/interfaces/blueboard";

interface EntryListProps {
  entries: AgencyRating[];
}

export const EntryList: React.FC<EntryListProps> = ({ entries }) => {
  return (
    <div className="grid gap-4">
      {entries.map((entry) => (
        <div key={entry.agency_rating_id} className="bg-white p-6 rounded-lg shadow">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-semibold">{entry.name}</h3>
              <p className="text-sm text-gray-500">Country: {entry.country}</p>
            </div>
            <div className="flex items-center">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-xl ${
                      i < Number(entry.would_work_for) ? "text-yellow-400" : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-600">({entry.avg_lwa?.toFixed(1)})</span>
            </div>
          </div>
          {entry.comment && (
            <div className="mt-2">
              <p className="text-gray-700">{entry.comment}</p>
            </div>
          )}
          {entry.comment_reply && (
            <div className="mt-2 p-3 bg-gray-50 rounded">
              <p className="text-sm text-gray-600">
                <span className="font-medium">Reply: </span>
                {entry.comment_reply}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
