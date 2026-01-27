import { Brain, Clock, FileText, Target, Users, Zap } from "lucide-react";

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
