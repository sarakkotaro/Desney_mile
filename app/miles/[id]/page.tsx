"use client";

import { usePathname } from "next/navigation";

// 出発地を東京 (HNL) に固定
const departure = "東京";

// 各ディズニーパークへのマイル情報
const milesData = {
  SHA: { destination: "上海ディズニーランド", miles: 20000 },
  HKG: { destination: "香港ディズニーランド", miles: 25000 },
  LAX: { destination: "ロサンゼルスディズニーランド", miles: 50000 },
  MCO: {
    destination: "フロリダ ウォルト・ディズニー・ワールド・リゾート",
    miles: 60000,
  },
  HNL: { destination: "アウラニ・ディズニー・リゾート&スパ", miles: 0 },
  CDG: { destination: "パリディズニーランド", miles: 55000 },
} as const; // 👈 `as const` をつけてリテラル型にして意図しない変更を防ぐ！

// `milesData` のキーを型として定義
type ParkId = keyof typeof milesData;

const MilesPage: React.FC = () => {
  const pathname = usePathname();
  const id = pathname?.split("/")[2] as ParkId; // 👈 型アサーションを追加

  const milesInfo = milesData[id]; // 型安全にアクセスできる

  if (!milesInfo) {
    return (
      <div className="text-center mt-10">マイル情報が見つかりません。</div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-center">
        {departure} から {milesInfo.destination} への必要マイル数
      </h1>
      <p className="text-center text-xl mt-4">
        <strong>{milesInfo.miles}</strong> マイル
      </p>
    </div>
  );
};

export default MilesPage;
