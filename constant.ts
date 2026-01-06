import {
  BarChart3,
  Brain,
  Code2,
  FileText,
  Github,
  HelpCircle,
  LayoutDashboard,
  Linkedin,
  MessageSquare,
  Mic2,
  Settings,
  Shield,
  Target,
  TrendingUp,
  Twitter,
  User,
  Users,
} from 'lucide-react'

export const NAV_LINKS = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Features',
    href: '/features',
  },
  {
    label: 'How It Works',
    href: '/how-it-works',
  },
  {
    label: 'Services',
    href: '/services',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
]

export const featuresGridData: featuresGridPropsType[] = [
  {
    icon: Mic2,
    title: 'AI Voice Interviewer',
    description:
      "Natural conversations with AI powered by ElevenLabs. Practice like it's real.",
    color: 'from-primary/10 to-primary/5',
  },
  {
    icon: Code2,
    title: 'Live Code Editor',
    description:
      'Write, test, and execute code in real-time during technical interviews.',
    color: 'from-accent/10 to-accent/5',
  },
  {
    icon: Brain,
    title: 'Smart Behavioral AI',
    description:
      'Master STAR method with intelligent follow-up questions and evaluation.',
    color: 'from-primary/10 to-primary/5',
  },
  {
    icon: Target,
    title: 'Skill Gap Analysis',
    description:
      'Detailed insights into your strengths and personalized improvement plans.',
    color: 'from-accent/10 to-accent/5',
  },
  {
    icon: BarChart3,
    title: 'Performance Analytics',
    description:
      'Track your progress with comprehensive scoring and detailed metrics.',
    color: 'from-primary/10 to-primary/5',
  },
  {
    icon: FileText,
    title: 'Resume Analysis',
    description:
      'AI parses your resume and generates relevant, personalized questions.',
    color: 'from-accent/10 to-accent/5',
  },
]

export const howItWorkSectionGridData: howItWorkSectionGridPropsType[] = [
  {
    step: '01',
    title: 'Sign Up',
    description: 'Create your account and upload your resume in seconds',
    icon: Users,
  },
  {
    step: '02',
    title: 'Choose Type',
    description: 'Select from technical, or system design interviews',
    icon: Target,
  },
  {
    step: '03',
    title: 'Practice',
    description: 'Engage with AI interviewer in real-time conversations',
    icon: Mic2,
  },
  {
    step: '04',
    title: 'Improve',
    description: 'Get detailed feedback and track your progress',
    icon: TrendingUp,
  },
]

export const interviewTypesGridGridData: interviewTypesGridPropsType[] = [
  {
    title: 'Screening Round',
    icon: MessageSquare,
    desc: 'Initial conversations and culture fit assessment',
  },
  {
    title: 'Technical Round',
    icon: Brain,
    desc: 'Deep dive into technical knowledge and problem-solving',
  },
  {
    title: 'Coding Round',
    icon: Code2,
    desc: 'Live coding challenges with real-time execution',
  },
  {
    title: 'System Design',
    icon: Target,
    desc: 'Design scalable systems and architectures',
  },
  {
    title: 'Behavioral Round',
    icon: Users,
    desc: 'STAR method coaching and soft skills evaluation',
  },
  {
    title: 'Panel Interview',
    icon: Shield,
    desc: 'Multiple interviewer simulation scenarios',
  },
]

export const FAQSectionGridData: FAQSectionGridPropsType[] = [
  {
    q: 'How realistic are the AI interviews?',
    a: 'Our AI uses advanced language models trained on thousands of real interviews. The conversations adapt to your responses and feel remarkably human-like.',
  },
  {
    q: 'Can I practice for specific companies?',
    a: 'Yes! You can customize interview scenarios based on target companies, roles, and interview types to match your specific needs.',
  },
  {
    q: "What's included in the free plan?",
    a: 'The free plan includes 3 practice interviews per month with basic AI feedback and access to screening round simulations.',
  },
  {
    q: 'How does the AI feedback work?',
    a: 'After each interview, our AI analyzes your responses, communication style, technical accuracy, and provides detailed, actionable feedback for improvement.',
  },
  {
    q: 'Can I cancel my subscription anytime?',
    a: "You can cancel your subscription at any time with no questions asked. You'll retain access until the end of your billing period.",
  },
]

export const footerLinksData: FooterLinksPropsType[] = [
  {
    title: 'Product',
    type: 'links',
    items: [
      { label: 'Features', href: '/features' },
      { label: 'Services', href: '/services' },
      { label: 'Pricing', href: '/pricing' },
    ],
  },
  {
    title: 'Company',
    type: 'links',
    items: [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Blog', href: '#' },
    ],
  },
  {
    title: 'Follow',
    type: 'social',
    items: [
      { label: 'Twitter', href: '#', icon: Twitter },
      { label: 'LinkedIn', href: '#', icon: Linkedin },
      { label: 'GitHub', href: '#', icon: Github },
    ],
  },
]

export const dashboardMenuItems: dashboardMenuItemsPropsType[] = [
    { icon: LayoutDashboard, title: "Dashboard", href: "/dashboard", badge: null },
    { icon: FileText, title: "Resume Analysis", href: "/dashboard/resume", badge: "2" },
    { icon: BarChart3, title: "Interview Pipeline", href: "/dashboard/pipeline", badge: null },
    { icon: Target, title: "Skill Gap", href: "/dashboard/skills", badge: null },
    { icon: User, title: "Profile", href: "/dashboard/profile", badge: null },
    { icon: Settings, title: "Settings", href: "/dashboard/settings", badge: null },
    { icon: HelpCircle, title: "Support", href: "/dashboard/support", badge: null },
  ]
