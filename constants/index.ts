import { Brain, Clock, FileText, Mic, Target, Users, Zap } from "lucide-react";

export const stats: StatsItemType[] = [
  { value: "50K+", label: "Active Users" },
  { value: "87%", label: "ATS Score Improvement" },
  { value: "3x", label: "Interview Success Rate" },
];

export const problmes: ProblemCardType[] = [
  {
    Icon: FileText,
    title: "ATS Rejection",
    desc: "Resumes get filtered out before humans even see them",
  },
  {
    Icon: Users,
    title: "No Interview Feedback",
    desc: "You bomb interviews with no idea what went wrong",
  },
  {
    Icon: Brain,
    title: "Lack of Confidence",
    desc: "Nervousness and self-doubt sabotage your performance",
  },
  {
    Icon: Target,
    title: "Poor Resume Format",
    desc: "Keywords and structure don't match what recruiters expect",
  },
  {
    Icon: Zap,
    title: "No Practice",
    desc: "No realistic way to simulate actual interview conditions",
  },
  {
    Icon: Clock,
    title: "Wasted Time",
    desc: "Generic advice doesn't address your specific weaknesses",
  },
];

export const solution: SolutionCardType[] = [
  {
    Icon: FileText,
    title: "Smart Resume Analysis",
    desc: "Our AI instantly parses your resume, scores it against job descriptions, and suggests keyword optimizations for ATS systems.",
    points: ["Real-time ATS scoring", "Keyword optimization recommendations"],
  },
  {
    Icon: Mic,
    title: "AI-Powered Mock Interviews",
    desc: "Practice with realistic interviews that adapt to your role, measure your confidence, and give detailed feedback on every answer.",
    points: ["Role-based interview questions", "Real-time feedback & improvement tips"],
  },
  {
    Icon: Brain,
    title: "Confidence Coaching",
    desc: "Get personalized tips on body language, tone, and answers. Watch your confidence score improve interview after interview.",
    points: ["Clarity and confidence metrics", "Personalized improvement roadmap"],
  },
  {
    Icon: Target,
    title: "Career Roadmap",
    desc: "Not just interviews—get a complete pathway to your dream role with skill gaps, learning resources, and timeline planning.",
    points: ["Skill gap analysis", "Role-specific learning paths"],
  },
];