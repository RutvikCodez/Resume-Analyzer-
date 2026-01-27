import {
  Award,
  Brain,
  Clock,
  FileText,
  Mic,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

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
    points: [
      "Role-based interview questions",
      "Real-time feedback & improvement tips",
    ],
  },
  {
    Icon: Brain,
    title: "Confidence Coaching",
    desc: "Get personalized tips on body language, tone, and answers. Watch your confidence score improve interview after interview.",
    points: [
      "Clarity and confidence metrics",
      "Personalized improvement roadmap",
    ],
  },
  {
    Icon: Target,
    title: "Career Roadmap",
    desc: "Not just interviews—get a complete pathway to your dream role with skill gaps, learning resources, and timeline planning.",
    points: ["Skill gap analysis", "Role-specific learning paths"],
  },
];

export const features: ProblemCardType[] = [
  {
    Icon: FileText,
    title: "Resume Analyzer",
    desc: "ATS scoring & optimization",
  },
  {
    Icon: Zap,
    title: "Resume Rewriting",
    desc: "AI-powered resume improvement",
  },
  {
    Icon: Mic,
    title: "Mock Interviews",
    desc: "Technical & behavioral practice",
  },
  {
    Icon: Brain,
    title: "AI Feedback",
    desc: "Detailed interview analysis",
  },
  {
    Icon: Award,
    title: "Confidence Scoring",
    desc: "Track your improvement",
  },
  {
    Icon: Target,
    title: "Role Practice",
    desc: "Job-specific preparation",
  },
  {
    Icon: TrendingUp,
    title: "Real-time Suggestions",
    desc: "Live interview tips",
  },
  {
    Icon: Clock,
    title: "Career Roadmap",
    desc: "Your path to success",
  },
];

export const analyzerData: ProblemCardType[] = [
  {
    Icon: FileText,
    title: "ATS Parsing",
    desc: "See exactly how ATS systems parse your resume",
  },
  {
    Icon: Zap,
    title: "Keyword Optimization",
    desc: "Add keywords that match job descriptions",
  },
  {
    Icon: Award,
    title: "Structure Feedback",
    desc: "Industry-specific formatting recommendations",
  },
  {
    Icon: TrendingUp,
    title: "Score Improvement",
    desc: "Track your progress in real-time",
  },
];

export const suggestions: string[] = [
  "Add Python, React to skills section",
  "Quantify achievements with metrics",
  "Add 3 more industry keywords",
];

export const metrics: StatsItemType[] = [
  { label: "Clarity Score", value: "85%" },
  { label: "Confidence", value: "92%" },
];

export const interviewFeatures: ProblemCardType[] = [
  {
    Icon: Mic,
    title: "Voice & Video Simulations",
    desc: "Realistic interview conditions",
  },
  {
    Icon: Target,
    title: "Role-Based Questions",
    desc: "Behavioral & technical interviews",
  },
  {
    Icon: Brain,
    title: "Real-time AI Feedback",
    desc: "Clarity and confidence analysis",
  },
  {
    Icon: TrendingUp,
    title: "Improvement Reports",
    desc: "Detailed actionable insights",
  },
];
