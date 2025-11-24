-- AlterTable
ALTER TABLE "Contact" ADD COLUMN     "phone" TEXT,
ADD COLUMN     "service" TEXT;

-- CreateTable
CREATE TABLE "SecurityLog" (
    "id" SERIAL NOT NULL,
    "ip" TEXT NOT NULL,
    "endpoint" TEXT NOT NULL,
    "payload" TEXT NOT NULL,
    "attackType" TEXT NOT NULL,
    "blocked" BOOLEAN NOT NULL DEFAULT true,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SecurityLog_pkey" PRIMARY KEY ("id")
);
