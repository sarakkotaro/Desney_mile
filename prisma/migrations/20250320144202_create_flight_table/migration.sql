-- CreateTable
CREATE TABLE "Flight" (
    "id" TEXT NOT NULL,
    "miles" INTEGER NOT NULL,
    "program" TEXT NOT NULL,
    "airlines" TEXT[],

    CONSTRAINT "Flight_pkey" PRIMARY KEY ("id")
);
