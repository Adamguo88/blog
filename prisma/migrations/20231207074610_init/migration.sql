-- CreateTable
CREATE TABLE "Login" (
    "ID" TEXT NOT NULL PRIMARY KEY,
    "Username" TEXT NOT NULL,
    "Password" TEXT NOT NULL,
    "Created" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Updated" DATETIME NOT NULL,
    CONSTRAINT "Login_ID_fkey" FOREIGN KEY ("ID") REFERENCES "User" ("ID") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "User" (
    "ID" TEXT NOT NULL PRIMARY KEY,
    "Name" TEXT NOT NULL,
    "Birthday" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Role" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Login_ID_key" ON "Login"("ID");

-- CreateIndex
CREATE UNIQUE INDEX "Login_Username_key" ON "Login"("Username");

-- CreateIndex
CREATE UNIQUE INDEX "User_ID_key" ON "User"("ID");

-- CreateIndex
CREATE UNIQUE INDEX "User_Email_key" ON "User"("Email");
