-- CreateTable
CREATE TABLE "Dekra_finance" (
    "id" SERIAL NOT NULL,
    "Dekra_cash" INTEGER NOT NULL DEFAULT 0,
    "Dekra_usd" INTEGER NOT NULL DEFAULT 0,
    "Dekra_usdt" INTEGER NOT NULL DEFAULT 0,
    "A109_cash" INTEGER NOT NULL DEFAULT 0,
    "A109_cashless" INTEGER NOT NULL DEFAULT 0,
    "Dbt" JSONB NOT NULL,
    "Date" TIMESTAMP(3) NOT NULL DEFAULT NOW(),
    "Caption" INTEGER,

    CONSTRAINT "Dekra_finance_pkey" PRIMARY KEY ("id")
);
