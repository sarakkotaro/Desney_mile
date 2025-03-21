import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const flights = await prisma.flight.findMany({
      where: {
        id: {
          startsWith: "HNL_", // LAXで始まるIDをフィルタリング
        },
      },
    });

    return new Response(JSON.stringify(flights), { status: 200 });
  } catch (error) {
    console.error("Error fetching LAX flights:", error);
    return new Response("Error fetching flights", { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
