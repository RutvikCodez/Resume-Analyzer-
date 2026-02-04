-- CreateEnum
CREATE TYPE "ResumeSection" AS ENUM ('ATS', 'TONE', 'CONTENT', 'STRUCTURE', 'SKILLS');

-- CreateEnum
CREATE TYPE "TipType" AS ENUM ('good', 'improve');

-- CreateTable
CREATE TABLE "ResumeTip" (
    "id" TEXT NOT NULL,
    "resumeId" TEXT NOT NULL,
    "section" "ResumeSection" NOT NULL,
    "type" "TipType" NOT NULL,
    "tip" TEXT NOT NULL,

    CONSTRAINT "ResumeTip_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ResumeTip" ADD CONSTRAINT "ResumeTip_resumeId_fkey" FOREIGN KEY ("resumeId") REFERENCES "Resume"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
