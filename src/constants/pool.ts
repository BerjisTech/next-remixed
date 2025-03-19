import AiReadyLinguistsModel from "@/server/models/Mongoose/Pools/AiReadyLinguists";
import CertifiedProModel from "@/server/models/Mongoose/Pools/CertifiedPro";
import CopywriterModel from "@/server/models/Mongoose/Pools/Copywriter";
import GameLocalizerModel from "@/server/models/Mongoose/Pools/GameLocalizer";
import InterpreterModel from "@/server/models/Mongoose/Pools/Interpreter";
import LanguageInstructorModel from "@/server/models/Mongoose/Pools/LanguageInstructor";
import LiteraryTranslatorModel from "@/server/models/Mongoose/Pools/LiteraryTranslator";
import MentorModel from "@/server/models/Mongoose/Pools/Mentor";
import NativeSpeakerConversationPartnerModel from "@/server/models/Mongoose/Pools/NativeSpeakerConversationPartner";
import PharmaceuticalTranslatorModel from "@/server/models/Mongoose/Pools/PharmaceuticalTranslator";
import ProjectManagerModel from "@/server/models/Mongoose/Pools/ProjectManager";
import StudentModel from "@/server/models/Mongoose/Pools/Student";
import SubtitlerModel from "@/server/models/Mongoose/Pools/Subtitlers";
import TrainerModel from "@/server/models/Mongoose/Pools/Trainer";
import { Model } from "mongoose";

export const POOL_CATEGORIES: Record<string, string> = {
  interpreters: "Interpreter Pool",
  subtitlers: "Subtitler Pool",
  "game-localizers": "Game Localizer Pool",
  "pharmaceutical-translators": "Pharmaceutical Translator Pool",
  "literary-translators": "Literary Translator Pool",
  "project-managers": "Project Manager Pool",
  "certified-pros": "Certified Pro Pool",
  students: "Student Pool",
  copywriters: "Copywriter Pool",
  "language-instructors": "Language Instructor Pool",
  "native-speaker-conversation-partners": "Native Speaker Conversation Partner Pool",
  mentors: "Mentor Pool",
  trainers: "Trainer Pool",
  "ai-ready-linguists": "AI Ready Linguists Pool",
};

export const POOLS_MODELS_MAP: Record<keyof typeof POOL_CATEGORIES, Model<any>> = {
  interpreters: InterpreterModel,
  "literary-translators": LiteraryTranslatorModel,
  subtitlers: SubtitlerModel,
  "game-localizers": GameLocalizerModel,
  "pharmaceutical-translators": PharmaceuticalTranslatorModel,
  "project-managers": ProjectManagerModel,
  "certified-pros": CertifiedProModel,
  students: StudentModel,
  copywriters: CopywriterModel,
  "language-instructors": LanguageInstructorModel,
  "native-speaker-conversation-partners": NativeSpeakerConversationPartnerModel,
  mentors: MentorModel,
  trainers: TrainerModel,
  "ai-ready-linguists": AiReadyLinguistsModel,
};
