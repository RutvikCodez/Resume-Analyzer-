"use client"

import { useState } from "react"
import {
  BarChart3,
  Brain,
  TrendingUp,
  Users,
  CheckCircle,
  Clock,
  Zap,
  Target,
  Code2,
  Mic2,
  Award,
  BookOpen,
} from "lucide-react"

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <DashboardSidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar */}
        <DashboardTopbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Content Area */}
        <main className="flex-1 overflow-auto bg-gradient-to-b from-background via-background to-primary/5">
          <div className="p-6 lg:p-8 space-y-8 max-w-7xl mx-auto">
            {/* Welcome Header Section */}
            <section className="fade-in-up">
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                <div>
                  <h1 className="text-3xl lg:text-4xl font-bold text-foreground">Welcome back, Alex</h1>
                  <p className="text-muted-foreground mt-2">Your interview preparation analytics are updated</p>
                </div>
                <button className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/40 hover:scale-105 transition-all w-fit">
                  Start Interview Round
                </button>
              </div>
            </section>

            {/* Metrics Overview Cards */}
            <section className="fade-in-up [animation-delay:100ms]">
              <h2 className="text-xl font-bold mb-4 text-foreground">Overview Metrics</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <MetricCard
                  title="Interview Score"
                  value="87.5"
                  subtitle="+5.2% from last week"
                  icon={BarChart3}
                  progress={87.5}
                  trend="up"
                />
                <MetricCard
                  title="Skills Mastery"
                  value="72%"
                  subtitle="4 of 6 areas strong"
                  icon={Brain}
                  progress={72}
                  trend="stable"
                />
                <MetricCard
                  title="Resume Quality"
                  value="9.2/10"
                  subtitle="Excellent profile"
                  icon={Award}
                  progress={92}
                  trend="up"
                />
                <MetricCard
                  title="AI Insights"
                  value="12"
                  subtitle="New recommendations"
                  icon={Zap}
                  progress={100}
                  trend="neutral"
                />
              </div>
            </section>

            {/* Interview Pipeline Progress */}
            <section className="fade-in-up [animation-delay:200ms]">
              <h2 className="text-xl font-bold mb-4 text-foreground">Interview Pipeline Progress</h2>
              <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
                <PipelineProgress />
              </div>
            </section>

            {/* Resume & JD Analysis + Skill Radar */}
            <section className="fade-in-up [animation-delay:300ms] grid lg:grid-cols-2 gap-6">
              {/* Resume Analysis Widget */}
              <div className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <BookOpen size={20} className="text-primary" />
                  Resume & Job Description
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-primary/5 rounded-xl">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-sm font-semibold text-foreground">Resume Score</span>
                      <span className="text-xl font-bold text-primary">9.2/10</span>
                    </div>
                    <div className="w-full bg-border rounded-full h-2">
                      <div className="bg-primary rounded-full h-2 w-[92%]" />
                    </div>
                  </div>
                  <div className="p-4 bg-accent/5 rounded-xl">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-sm font-semibold text-foreground">JD Match %</span>
                      <span className="text-xl font-bold text-accent">84%</span>
                    </div>
                    <div className="w-full bg-border rounded-full h-2">
                      <div className="bg-accent rounded-full h-2 w-[84%]" />
                    </div>
                  </div>
                  <div className="pt-2 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-3">Key Insights</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>Strong technical experience alignment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>Leadership skills well-documented</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Clock size={16} className="text-accent mt-0.5 flex-shrink-0" />
                        <span>Consider adding project metrics</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <button className="w-full mt-4 py-2 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors">
                  View Full Report
                </button>
              </div>

              {/* Skill Radar Chart */}
              <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Target size={20} className="text-primary" />
                  Skill Gap Analysis
                </h3>
                <div className="flex items-center justify-center py-8">
                  <SkillRadar />
                </div>
                <div className="pt-4 border-t border-border grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                    <span className="text-muted-foreground">Problem Solving</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-accent" />
                    <span className="text-muted-foreground">System Design</span>
                  </div>
                </div>
              </div>
            </section>

            {/* AI Insights & Recommendations */}
            <section className="fade-in-up [animation-delay:400ms]">
              <h2 className="text-xl font-bold mb-4 text-foreground">AI Insights & Recommendations</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <InsightCard
                  icon={Brain}
                  title="Master System Design"
                  description="You're scoring 65% on system design. Focus on scalability and trade-offs."
                  action="Start Practice"
                  priority="high"
                />
                <InsightCard
                  icon={Code2}
                  title="Improve Coding Speed"
                  description="Complete 15-minute challenges to boost your coding interview performance."
                  action="Take Challenge"
                  priority="high"
                />
                <InsightCard
                  icon={Mic2}
                  title="Behavioral Script"
                  description="Prepare 3 STAR stories for common behavioral questions."
                  action="View Templates"
                  priority="medium"
                />
                <InsightCard
                  icon={Users}
                  title="Communication Skills"
                  description="Practice explaining technical concepts in 2-3 minutes to interviewers."
                  action="Practice Now"
                  priority="medium"
                />
                <InsightCard
                  icon={Target}
                  title="Industry Focus"
                  description="Target roles in fintech & SaaS require stronger distributed systems knowledge."
                  action="View Roadmap"
                  priority="low"
                />
                <InsightCard
                  icon={TrendingUp}
                  title="Weekly Goals"
                  description="Complete 3 technical interviews this week to maintain momentum."
                  action="View Goals"
                  priority="medium"
                />
              </div>
            </section>

            {/* Roadmap Timeline */}
            <section className="fade-in-up [animation-delay:500ms]">
              <h2 className="text-xl font-bold mb-4 text-foreground">Your Preparation Roadmap</h2>
              <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
                <div className="space-y-6">
                  <TimelineNode
                    week="Week 1"
                    title="Coding Fundamentals"
                    description="Master arrays, strings, and basic data structures with 20 LeetCode problems"
                    icon={Code2}
                    status="completed"
                  />
                  <TimelineNode
                    week="Week 2"
                    title="DSA & Problem Solving"
                    description="Deep dive into algorithms, sorting, and complex data structures"
                    icon={Brain}
                    status="in-progress"
                  />
                  <TimelineNode
                    week="Week 3"
                    title="System Design Basics"
                    description="Learn scalability, databases, and distributed systems concepts"
                    icon={BarChart3}
                    status="upcoming"
                  />
                  <TimelineNode
                    week="Week 4"
                    title="Mock Interviews"
                    description="Complete 5 full mock interviews with AI interviewer"
                    icon={Mic2}
                    status="upcoming"
                  />
                  <TimelineNode
                    week="Week 5"
                    title="Advanced Topics"
                    description="Specialized knowledge for target company & role"
                    icon={Award}
                    status="upcoming"
                  />
                  <TimelineNode
                    week="Week 6"
                    title="Final Preparation"
                    description="Review, practice, and build confidence before interviews"
                    icon={CheckCircle}
                    status="upcoming"
                  />
                </div>
              </div>
            </section>

            {/* Recent Activity Feed */}
            <section className="fade-in-up [animation-delay:600ms]">
              <h2 className="text-xl font-bold mb-4 text-foreground">Recent Activity</h2>
              <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
                <ActivityFeed />
              </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-border pt-6 pb-12 text-sm text-muted-foreground fade-in-up [animation-delay:700ms]">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                <div>© 2025 AI Interview Simulator. All rights reserved.</div>
                <div className="flex gap-6">
                  <a href="#" className="hover:text-foreground transition-colors">
                    Privacy Policy
                  </a>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Terms of Service
                  </a>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Contact Support
                  </a>
                </div>
              </div>
            </footer>
          </div>
        </main>
      </div>
    </div>
  )
}
