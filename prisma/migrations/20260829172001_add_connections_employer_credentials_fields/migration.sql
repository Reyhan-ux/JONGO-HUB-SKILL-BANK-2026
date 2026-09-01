/*
  Warnings:

  - You are about to drop the column `issuedAt` on the `Credential` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `Connection` table without a default value. This is not possible if the table is not empty.
  - Added the required column `studentName` to the `Credential` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Connection" ADD COLUMN     "applicationId" TEXT,
ADD COLUMN     "employerId" TEXT,
ADD COLUMN     "jobId" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "status" SET DEFAULT 'Introduced';

-- AlterTable
ALTER TABLE "Credential" DROP COLUMN "issuedAt",
ADD COLUMN     "issueDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "issuer" TEXT NOT NULL DEFAULT 'Jongo Hub Academic & Engineering Board',
ADD COLUMN     "programTrack" TEXT,
ADD COLUMN     "studentName" TEXT NOT NULL,
ADD COLUMN     "verificationStatus" TEXT NOT NULL DEFAULT 'Valid';

-- AlterTable
ALTER TABLE "Employer" ADD COLUMN     "hiredFellowsCount" INTEGER NOT NULL DEFAULT 0;

-- AddForeignKey
ALTER TABLE "Connection" ADD CONSTRAINT "Connection_employerId_fkey" FOREIGN KEY ("employerId") REFERENCES "Employer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Connection" ADD CONSTRAINT "Connection_applicationId_fkey" FOREIGN KEY ("applicationId") REFERENCES "Application"("id") ON DELETE SET NULL ON UPDATE CASCADE;
