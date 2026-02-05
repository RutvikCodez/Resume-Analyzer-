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

export const analyzerData: SolutionCardType[] = [
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

export const interviewFeatures: SolutionCardType[] = [
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

export const processSteps: StatsItemType[] = [
  {
    label: "Upload Resume",
    value: "Share your resume—takes just 30 seconds",
  },
  {
    label: "Get ATS Score",
    value: "See how recruiters see your resume instantly",
  },
  {
    label: "Improve Resume",
    value: "Follow AI recommendations to optimize",
  },
  {
    label: "Start Interviews",
    value: "Practice with AI-powered mock interviews",
  },
  {
    label: "Get Feedback",
    value: "Detailed analysis on every answer",
  },
  {
    label: "Track Progress",
    value: "Watch your confidence grow",
  },
  {
    label: "Apply Confidently",
    value: "You're ready to land interviews",
  },
];

export const usecases: ProblemCardType[] = [
  {
    title: "College Students",
    desc: "Land your first job with a strong resume and interview prep",
  },
  {
    title: "Fresh Graduates",
    desc: "Transition from campus to career with confidence",
  },
  {
    title: "Career Switchers",
    desc: "Learn how to position yourself in a new field",
  },
  {
    title: "Developers",
    desc: "Master technical interviews with role-specific practice",
  },
  {
    title: "MBA Candidates",
    desc: "Ace consulting and PM interviews",
  },
  { title: "Professionals", desc: "Level up and land senior roles" },
];

export const services: StatsItemType[] = [
  {
    label: "AI + Expert Coaching",
    value:
      "Not just AI—our system combines machine learning with career coaching expertise",
  },
  {
    label: "ATS-Optimized",
    value: "Your resume actually passes recruiters' automated systems",
  },
  {
    label: "Real Interview Simulations",
    value: "Practice exactly like the real thing—voice, video, timing",
  },
  {
    label: "Affordable Pricing",
    value: "Get premium features without premium price tags",
  },
  {
    label: "Instant Results",
    value: "Get actionable feedback in minutes, not days",
  },
  {
    label: "No Generic Advice",
    value: "Everything is personalized to your role, industry, and goals",
  },
];

export const platformData: ProblemCardType[] = [
  {
    title: "Resume Dashboard",
    desc: "Track your ATS scores, improvements, and version history",
    Icon: FileText,
  },
  {
    title: "Interview Reports",
    desc: "Detailed feedback, video playback, and metrics from every practice session",
    Icon: Mic,
  },
  {
    title: "Skill Heatmap",
    desc: "Visualize your strengths and gaps across technical and soft skills",
    Icon: TrendingUp,
  },
];

export const faqs: ProblemCardType[] = [
  {
    title: "Is CareerForge AI free?",
    desc: "We offer a free resume analysis and one mock interview. Unlimited access starts at just $9.99/month.",
  },
  {
    title: "How accurate is the ATS score?",
    desc: "Our ATS parser uses the same technology as leading resume screening systems. 95%+ accuracy.",
  },
  {
    title: "Do I need experience to use CareerForge?",
    desc: "No! We support everyone from fresh graduates to senior professionals with tailored guidance.",
  },
  {
    title: "Is the interview feedback AI or from humans?",
    desc: "AI-powered real-time feedback, with optional human expert review for premium members.",
  },
  {
    title: "Can I download my reports?",
    desc: "Yes! Export resumes, interview transcripts, feedback reports, and improvement plans as PDF.",
  },
  {
    title: "Does this work for all job roles?",
    desc: "Yes! Our system supports 500+ job roles across tech, finance, marketing, operations, and more.",
  },
  {
    title: "Is my data secure?",
    desc: "Enterprise-grade encryption, GDPR compliant, and zero data sharing with third parties.",
  },
  {
    title: "Can I cancel anytime?",
    desc: "Absolutely. No contracts, no hidden fees. Cancel your subscription anytime.",
  },
];

export const footerSections = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Mobile App", "Security"],
  },
  {
    title: "Company",
    links: ["About", "Blog", "Careers", "Contact"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Support"],
  },
];

export const sidebarData: navLinksType[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: "LayoutDashboard",
  },
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: "LayoutDashboard",
  },
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: "LayoutDashboard",
  },
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: "LayoutDashboard",
  },
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: "LayoutDashboard",
  },
];

export const AIResponseFormat = `
      interface Feedback {
      overallScore: number; //max 100
      ATS: {
        score: number; //rate based on ATS suitability
        tips: {
          type: "good" | "improve";
          tip: string; //give 3-4 tips
        }[];
      };
      toneAndStyle: {
        score: number; //max 100
        tips: {
          type: "good" | "improve";
          tip: string; //make it a short "title" for the actual explanation
          explanation: string; //explain in detail here
        }[]; //give 3-4 tips
      };
      content: {
        score: number; //max 100
        tips: {
          type: "good" | "improve";
          tip: string; //make it a short "title" for the actual explanation
          explanation: string; //explain in detail here
        }[]; //give 3-4 tips
      };
      structure: {
        score: number; //max 100
        tips: {
          type: "good" | "improve";
          tip: string; //make it a short "title" for the actual explanation
          explanation: string; //explain in detail here
        }[]; //give 3-4 tips
      };
      skills: {
        score: number; //max 100
        tips: {
          type: "good" | "improve";
          tip: string; //make it a short "title" for the actual explanation
          explanation: string; //explain in detail here
        }[]; //give 3-4 tips
      };
      experience: {
        jobTitle: string;
        company: string;
        startDate: string; // YYYY-MM format
        endDate: string;   // YYYY-MM format or "Present"
        description: string;
      }[];
      education: {
        schoolName: string;
        educationLevel: string; // e.g., Diploma, BTech
        startDate: string;      // YYYY-MM
        endDate: string;        // YYYY-MM
        cgpaOrMark?: string;    // optional
      }[];
    }`;

export const prepareInstructions = (resumeText: string) => {
  return `You are an expert in ATS (Applicant Tracking System) and resume analysis.
  Please analyze and rate this resume and suggest how to improve it.
  The rating can be low if the resume is bad.
  Be thorough and detailed. Don't be afraid to point out any mistakes or areas for improvement.
  If there is a lot to improve, don't hesitate to give low scores. This is to help the user to improve their resume.
  Provide the feedback using the following format: ${AIResponseFormat}
  Return the analysis as a JSON object, without any other text and without the backticks.
  Do not include any other text or comments.
  Resume:
${resumeText}
  `;
};

