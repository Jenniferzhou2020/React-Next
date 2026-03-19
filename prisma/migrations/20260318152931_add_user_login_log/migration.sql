-- CreateTable
CREATE TABLE "user_login_logs" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER,
    "ipAddress" TEXT,
    "userAgent" TEXT,
    "success" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_login_logs_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "user_login_logs" ADD CONSTRAINT "user_login_logs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
