-- CreateTable
CREATE TABLE "ProjectFO" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT NOT NULL DEFAULT '',
    "name" TEXT NOT NULL,
    "item" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "ProjectFO_name_key" ON "ProjectFO"("name");

-- CreateIndex
CREATE UNIQUE INDEX "ProjectFO_item_key" ON "ProjectFO"("item");
