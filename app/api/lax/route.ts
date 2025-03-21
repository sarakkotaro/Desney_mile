import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    // LAX_で始まるIDのフライトを取得
    const flights = await prisma.flight.findMany({
      where: {
        id: {
          startsWith: "LAX_", // LAXで始まるIDをフィルタリング
        },
      },
    });

    // 結果をJSON形式で返す
    return NextResponse.json(flights, { status: 200 });
  } catch (error) {
    console.error("Error fetching LAX flights:", error);
    // エラーが発生した場合のレスポンス
    return NextResponse.json(
      { error: "Error fetching flights" },
      { status: 500 }
    );
  } finally {
    // Prismaの接続を切断
    await prisma.$disconnect();
  }
}
