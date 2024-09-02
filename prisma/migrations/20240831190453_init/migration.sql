-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "login" TEXT NOT NULL,
    "senha" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "User_login_key" ON "User"("login");
