import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const flightsData = [
  { miles: 40000, program: "NH miles", airlines: ["ANA"], id: "LAX_1" },
  { miles: 50000, program: "JL miles", airlines: ["JAL"], id: "LAX_2" },
  { miles: 50000, program: "NH miles", airlines: ["ANA"], id: "LAX_3" },
  {
    miles: 50000,
    program: "AS miles",
    airlines: ["アメリカン航空"],
    id: "LAX_4",
  },
  {
    miles: 50000,
    program: "JL miles",
    airlines: ["アメリカン航空"],
    id: "LAX_5",
  },
  {
    miles: 51500,
    program: "BA miles",
    airlines: ["アメリカン航空", "JAL"],
    id: "LAX_6",
  },
  { miles: 55000, program: "NH miles", airlines: ["ANA"], id: "LAX_7" },
  {
    miles: 60000,
    program: "VS miles",
    airlines: ["シンガポール航空"],
    id: "LAX_8",
  },
  {
    miles: 60000,
    program: "JL miles",
    airlines: ["アメリカン航空", "JAL"],
    id: "LAX_9",
  },
];

async function main() {
  await Promise.all(
    flightsData.map((flight) =>
      prisma.flight.create({
        data: flight,
      })
    )
  );
  console.log("フライト情報がデータベースに追加されました");
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
