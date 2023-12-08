-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Login" (
    "ID" TEXT NOT NULL PRIMARY KEY,
    "Username" TEXT NOT NULL,
    "Password" TEXT NOT NULL,
    "Created" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Updated" DATETIME NOT NULL,
    "userID" TEXT,
    CONSTRAINT "Login_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User" ("ID") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Login" ("Created", "ID", "Password", "Updated", "Username") SELECT "Created", "ID", "Password", "Updated", "Username" FROM "Login";
DROP TABLE "Login";
ALTER TABLE "new_Login" RENAME TO "Login";
CREATE UNIQUE INDEX "Login_ID_key" ON "Login"("ID");
CREATE UNIQUE INDEX "Login_Username_key" ON "Login"("Username");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
