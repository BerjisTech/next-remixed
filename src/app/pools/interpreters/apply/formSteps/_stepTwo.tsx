"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/shadcn/button";
import Link from "next/link";
import { Input } from "@/components/shadcn/input";
import { Checkbox } from "@/components/shadcn/checkbox";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/shadcn/select";
import { LANGUAGES } from "@/constants/common";

// Returns the localized language name given a language code.
const getLanguageByCode = (code: string): string | undefined => {
  const language = LANGUAGES.find((l) => l.language_code === code);
  return language?.language_name;
};

// Converts a pair string (e.g. "eng_rus") into a full language pair name.
const GetLanguagePairName = (pair: string): string => {
  const languagePair = pair.split("_");

  // Convert "spa" to "esl" if necessary.
  if (languagePair[0] === "spa") {
    languagePair[0] = "esl";
  }
  if (languagePair[1] === "spa") {
    languagePair[1] = "esl";
  }

  const sourceLanguage = getLanguageByCode(languagePair[0]);
  const targetLanguage = getLanguageByCode(languagePair[1]);
  return `${sourceLanguage} to ${targetLanguage}`;
};

// Generates a list of years from the current year down to the startYear.
const getYearsList = (startYear: number = 2000): number[] => {
  const currentYear = new Date().getFullYear();
  const years = [];
  for (let year = currentYear; year >= startYear; year--) {
    years.push(year);
  }
  return years;
};

interface LanguagePair {
  id: string;
  value: string;
  display: string;
}

interface StepTwoProps {
  nextStep: () => void;
  prevStep: () => void;
  entityId: number;
}

const StepTwo = ({ nextStep, prevStep, entityId }: StepTwoProps) => {
  // State to store the selected language pairs.
  const [selectedLanguages, setSelectedLanguages] = useState<LanguagePair[]>([]);
  const [selectedValue, setSelectedValue] = useState<string>("");

  // State to hold available language pairs fetched from the API.
  // Expected to be an object with language pair codes as keys.
  const [availableLanguagePairs, setAvailableLanguagePairs] = useState<Record<
    string,
    string
  > | null>(null);

  // Fetch language pairs from the provided API endpoint.
  useEffect(() => {
    async function fetchLanguagePairs() {
      try {
        console.log("Fetching language pairs");
        const response = await fetch(`/next/api/user/pairs?entityId=${entityId}`);
        //console.log("Response", response);
        if (response.ok) {
          const data = await response.json();
          //console.log("Data", data);
          setAvailableLanguagePairs(data);
        } else {
          console.error("Failed to fetch language pairs.");
        }
      } catch (error) {
        console.error("Error fetching language pairs:", error);
      }
    }
    fetchLanguagePairs();
  }, [entityId]);

  // Add the selected language pair to state.
  const handleAddLanguagePair = () => {
    if (selectedValue) {
      if (selectedLanguages.some((pair) => pair.value === selectedValue)) return;
      const newPair: LanguagePair = {
        id: selectedValue,
        value: selectedValue,
        display: GetLanguagePairName(selectedValue),
      };
      setSelectedLanguages([...selectedLanguages, newPair]);
    }
  };

  // Generate the list of years.
  const yearsList = getYearsList(2000);

  return (
    <div className="p-8 bg-accent rounded-lg border-t-primary">
      <h2 className="text-primary font-semibold mb-4 text-2xl">
        Specify the languages in which you offer interpreting services.
      </h2>
      <p className="text-grey-700 mb-4">
        Drag and drop to sort language pairs in order of preference.
      </p>

      {/* Selected Language Pairs */}
      <div className="mb-6 space-y-2">
        {selectedLanguages.map((pair) => (
          <div
            key={pair.id}
            className="flex items-center justify-between bg-gray-100 p-3 rounded-md shadow-sm"
          >
            <span className="text-grey-800">{pair.display}</span>
            <span className="cursor-move">⋮⋮</span>
          </div>
        ))}
      </div>

      {/* Add Language Pair */}
      <div className="flex items-center gap-2 mb-6">
        <Select onValueChange={(value) => setSelectedValue(value)}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select language" />
          </SelectTrigger>
          <SelectContent>
            {availableLanguagePairs ? (
              Object.keys(availableLanguagePairs).map((pairKey) => (
                <SelectItem key={pairKey} value={pairKey}>
                  {GetLanguagePairName(pairKey)}
                </SelectItem>
              ))
            ) : (
              <SelectItem value="loading" disabled>
                Loading...
              </SelectItem>
            )}
          </SelectContent>
        </Select>
        <Button onClick={handleAddLanguagePair}>Add</Button>
      </div>

      <p className="text-grey-700 text-sm mb-6">
        This list includes any remaining "working" languages from your ProZ.com profile.{" "}
        <Link href="#" className="text-primary underline">
          Add more language pairs.
        </Link>
      </p>

      {/* Interpreting Services */}
      <h3 className="font-semibold mb-2">Interpreting services you provide</h3>
      <div className="grid grid-cols-3 gap-4 mb-6">
        {["Consecutive", "Simultaneous", "Whispered"].map((mode) => (
          <label key={mode} className="flex items-center">
            <Checkbox className="mr-2" />
            {mode}
          </label>
        ))}
      </div>

      {/* Modalities */}
      <h3 className="font-semibold mb-2">Modalities</h3>
      <div className="grid grid-cols-3 gap-4 mb-6">
        {["On-site", "Telephone", "Video"].map((modality) => (
          <label key={modality} className="flex items-center">
            <Checkbox className="mr-2" />
            {modality}
          </label>
        ))}
      </div>

      {/* Subject Matter Experience */}
      <h3 className="font-semibold mb-2">Subject matter experience</h3>
      <div className="grid grid-cols-2 gap-4 mb-6">
        {["Medical", "Legal", "Education", "Community"].map((subject) => (
          <label key={subject} className="flex items-center">
            <Checkbox className="mr-2" />
            {subject}
          </label>
        ))}
      </div>

      {/* Describe Interpreting Services */}
      <h3 className="font-semibold mb-2">Describe your interpreting services</h3>
      <p className="text-grey-700 mb-4 text-sm">
        Some opportunities require updated background checks. Please authorize a personal background
        check below. If you do not authorize the background checks, jobs from these clients will not
        be available to you.
      </p>

      <label className="block text-grey-700 mb-2">Interpreting bio</label>
      <textarea
        className="w-full p-3 border rounded mb-4"
        placeholder="Enter a short description of your interpreting services and background."
      ></textarea>

      <p className="text-sm text-grey-500 mb-4">
        Enter a short description of your interpreting services and background. Plain text only—HTML
        tags are not allowed. <strong>500 characters max.</strong>
      </p>

      {/* Interpreting Tagline */}
      <label className="block text-grey-700 mb-2">Interpreting tagline</label>
      <Input type="text" placeholder="Lorem" className="mb-4" />

      <p className="text-sm text-grey-500 mb-6">
        Sell yourself as a professional interpreter. Your tagline will be shown next to your name in
        the pool. <strong>55 characters max.</strong>
      </p>

      {/* Year Started */}
      <label className="block text-grey-700 mb-2">
        Year when you started to work as an interpreter
      </label>
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select Year" />
        </SelectTrigger>
        <SelectContent>
          {yearsList.map((year) => (
            <SelectItem key={year} value={year.toString()}>
              {year}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6">
        <Button onClick={prevStep} variant="outline">
          Back
        </Button>
        <Button onClick={nextStep} className="bg-primary text-white">
          Next
        </Button>
      </div>
    </div>
  );
};

export default StepTwo;
