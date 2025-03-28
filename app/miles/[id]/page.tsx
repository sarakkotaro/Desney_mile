// app/miles/[id]/page.tsx
"use client";

import { usePathname } from "next/navigation";

const departure = "東京";

// フライトデータ
const flightsData = {
  LAX: [
    {
      id: 1,
      miles: 40000,

      icon: "/images/ANA.png",
      milesType: "ANA miles",
      operatedBy: "ANA",
    },
    {
      id: 2,
      miles: 50000,

      icon: "/images/jal.png",
      milesType: "JL miles",
      operatedBy: "JAL",
    },
    {
      id: 3,
      miles: 50000,

      icon: "/images/ana.png",
      milesType: "ANA miles",
      operatedBy: "ANA",
    },
    {
      id: 4,
      miles: 50000,

      icon: "/images/Alaska.png",
      milesType: "AS miles",
      operatedBy: "AA",
    },
    {
      id: 5,
      miles: 50000,

      icon: "/images/jal.png",
      milesType: "JL miles",
      operatedBy: "American Airlines",
    },
    {
      id: 6,
      miles: 51500,

      icon: "/images/BA.png",
      milesType: "BA miles",
      operatedBy: "AA,JAL",
    },
    {
      id: 7,
      miles: 55000,

      icon: "/images/ana.png",
      milesType: "ANA miles",
      operatedBy: "ANA",
    },
    {
      id: 8,
      miles: 60000,
      icon: "/images/virgin.png",
      milesType: "VS miles",
      operatedBy: "シンガポール航空",
    },
    {
      id: 9,
      miles: 60000,

      icon: "/images/JAL.png",
      milesType: "JAL miles",
      operatedBy: "AA,JAL",
    },
  ],
  CDG: [
    {
      id: 10,
      miles: 42000,
      icon: "/images/virgin.png",
      milesType: " VS miles ",
      operatedBy: "Air France",
    },
    {
      id: 11,
      miles: 45000,
      icon: "/images/ana.png",
      milesType: "ANA miles",
      operatedBy: "ANA",
    },
    {
      id: 12,
      miles: 52000,
      icon: "/images/jal.png",
      milesType: "  JL miles ",
      operatedBy: "JAL",
    },
    {
      id: 13,
      miles: 55000,
      icon: "/images/ana.png",
      milesType: "NH miles",
      operatedBy: "ANA",
    },
    {
      id: 14,
      miles: 55000,
      icon: "/images/jal.png",
      milesType: "JL miles",
      operatedBy: "Air France",
    },
    {
      id: 15,
      miles: 60000,
      icon: "/images/ana.png",
      milesType: "NH miles",
      operatedBy: "ANA",
    },
    {
      id: 16,
      miles: 60000,
      icon: "/images/ana.png",
      milesType: "NH miles",
      operatedBy: "ANA",
    },
    {
      id: 17,
      miles: 62000,
      icon: "/images/jal.png",
      milesType: "BA miles",
      operatedBy: "JAL",
    },
    {
      id: 18,
      miles: 65000,
      icon: "/images/ana.png",
      milesType: "VS miles",
      operatedBy: "ANA",
    },
    {
      id: 19,
      miles: 70000,
      icon: "/images/jal.png",
      milesType: "AA miles",
      operatedBy: "JAL",
    },
    {
      id: 20,
      miles: 17000,
      icon: "/images/ana.png",
      milesType: "NH miles",
      operatedBy: "ANA",
    },
    {
      id: 21,
      miles: 20000,
      icon: "/images/ana.png",
      milesType: "NH miles",
      operatedBy: "ANA",
    },
    {
      id: 22,
      miles: 20000,
      icon: "/images/jal.png",
      milesType: "JL miles",
      operatedBy: "JAL",
    },
    {
      id: 23,
      miles: 20000,
      icon: "/images/CX.png",
      milesType: "CX miles",
      operatedBy: "AA, QR, CX",
    },
    {
      id: 24,
      miles: 22000,
      icon: "/images/ba.png",
      milesType: "BA miles",
      operatedBy: "AA, QR, CX, JL",
    },
    {
      id: 25,
      miles: 23000,
      icon: "/images/ana.png",
      milesType: "NH miles",
      operatedBy: "ANA",
    },
    {
      id: 26,
      miles: 23000,
      icon: "/images/ana.png",
      milesType: "NH miles",
      operatedBy: "エアカナダ,UA, ANA",
    },
    {
      id: 27,
      miles: 23000,
      icon: "/images/ana.png",
      milesType: "VS miles",
      operatedBy: "ANA",
    },
    {
      id: 28,
      miles: 23000,
      icon: "/images/CX.png",
      milesType: "JL miles",
      operatedBy: "CX",
    },
    {
      id: 29,
      miles: 25000,
      icon: "/images/SQ.png",
      milesType: "SQ miles",
      operatedBy: "エアカナダ,UA, ANA",
    },
  ],
  HKG: [
    {
      id: 20,
      miles: 17000,
      icon: "/images/ana.png",
      milesType: "NH miles",
      operatedBy: "ANA",
    },
    {
      id: 21,
      miles: 20000,
      icon: "/images/ana.png",
      milesType: "NH miles",
      operatedBy: "ANA",
    },
    {
      id: 22,
      miles: 20000,
      icon: "/images/jal.png",
      milesType: "JL miles",
      operatedBy: "JAL",
    },
    {
      id: 23,
      miles: 20000,
      icon: "/images/CX.png",
      milesType: "CX miles",
      operatedBy: "AA, QR, CX",
    },
    {
      id: 24,
      miles: 22000,
      icon: "/images/ba.png",
      milesType: "BA miles",
      operatedBy: "AA, QR, CX, JL",
    },
    {
      id: 25,
      miles: 23000,
      icon: "/images/ana.png",
      milesType: "NH miles",
      operatedBy: "ANA",
    },
    {
      id: 26,
      miles: 23000,
      icon: "/images/ana.png",
      milesType: "NH miles",
      operatedBy: "エアカナダ,UA, ANA",
    },
    {
      id: 27,
      miles: 23000,
      icon: "/images/ana.png",
      milesType: "VS miles",
      operatedBy: "ANA",
    },
    {
      id: 28,
      miles: 23000,
      icon: "/images/CX.png",
      milesType: "JL miles",
      operatedBy: "CX",
    },
    {
      id: 29,
      miles: 25000,
      icon: "/images/SQ.png",
      milesType: "SQ miles",
      operatedBy: "エアカナダ,UA, ANA",
    },
  ],
  SHA: [
    {
      id: 40,
      miles: 17000,
      icon: "/images/ana.png",
      milesType: "NH miles",
      operatedBy: "ANA",
    },
    {
      id: 41,
      miles: 18000,
      icon: "/images/ba.png",
      milesType: "BA miles",
      operatedBy: "JAL",
    },
    {
      id: 42,
      miles: 19200,
      icon: "/images/qf.png",
      milesType: "QF miles",
      operatedBy: "Jetstar",
    },
    {
      id: 43,
      miles: 20000,
      icon: "/images/ana.png",
      milesType: "NH miles",
      operatedBy: "ANA",
    },
    {
      id: 44,
      miles: 20000,
      icon: "/images/jal.png",
      milesType: "JL miles",
      operatedBy: "JAL",
    },
    {
      id: 45,
      miles: 20000,
      icon: "/images/cx.png",
      milesType: "CX miles",
      operatedBy: "CA",
    },
    {
      id: 46,
      miles: 23000,
      icon: "/images/ana.png",
      milesType: "NH miles",
      operatedBy: "ANA",
    },
    {
      id: 47,
      miles: 23000,
      icon: "/images/ana.png",
      milesType: "NH miles",
      operatedBy: "AC, CA, NH",
    },
    {
      id: 48,
      miles: 23000,
      icon: "/images/ana.png",
      milesType: "VS miles",
      operatedBy: "ANA",
    },
    {
      id: 49,
      miles: 23000,
      icon: "/images/jal.png",
      milesType: "JL miles",
      operatedBy: "MU",
    },
  ],
  MCO: [
    {
      id: 50,
      miles: 50000,
      icon: "/images/alaska.png",
      milesType: "AS miles",
      operatedBy: "AS, AA",
    },
    {
      id: 51,
      miles: 55000,
      icon: "/images/ana.png",
      milesType: "NH miles",
      operatedBy: "Star Alliance",
    },
    {
      id: 52,
      miles: 60000,
      icon: "/images/cx.png",
      milesType: "CX miles",
      operatedBy: "AS, AA, BA, CX",
    },
    {
      id: 53,
      miles: 65000,
      icon: "/images/aa.png",
      milesType: "AA miles",
      operatedBy: "AA",
    },
    {
      id: 54,
      miles: 65000,
      icon: "/images/alaska.png",
      milesType: "AS miles",
      operatedBy: "AS, AA",
    },
    {
      id: 55,
      miles: 69000,
      icon: "/images/af.png",
      milesType: "AF miles",
      operatedBy: "SkyTeam and more",
    },
    {
      id: 56,
      miles: 70000,
      icon: "/images/av.png",
      milesType: "AV miles",
      operatedBy: "Star Alliance",
    },
    {
      id: 57,
      miles: 70000,
      icon: "/images/ua.png",
      milesType: "UA miles",
      operatedBy: "Star Alliance",
    },
    {
      id: 58,
      miles: 70000,
      icon: "/images/ua.png",
      milesType: "UA miles",
      operatedBy: "UA",
    },
    {
      id: 59,
      miles: 70000,
      icon: "/images/dl.png",
      milesType: "DL miles",
      operatedBy: "DL",
    },
  ],
  HNL: [
    {
      id: 60,
      miles: 35000,
      icon: "/images/ana.png",
      milesType: "NH miles",
      operatedBy: "ANA",
    },
    {
      id: 61,
      miles: 40000,
      icon: "/images/ana.png",
      milesType: "NH miles",
      operatedBy: "ANA",
    },
    {
      id: 62,
      miles: 40000,
      icon: "/images/lh.png",
      milesType: "LH miles",
      operatedBy: "UA, NH",
    },
    {
      id: 63,
      miles: 40000,
      icon: "/images/jal.png",
      milesType: "JL miles",
      operatedBy: "JAL",
    },
    {
      id: 64,
      miles: 40000,
      icon: "/images/virgin.png",
      milesType: "VS miles",
      operatedBy: "DL",
    },
    {
      id: 65,
      miles: 40000,
      icon: "/images/jal.png",
      milesType: "JL miles",
      operatedBy: "JAL",
    },
    {
      id: 66,
      miles: 41500,
      icon: "/images/ba.png",
      milesType: "BA miles",
      operatedBy: "JAL",
    },
    {
      id: 67,
      miles: 43000,
      icon: "/images/ana.png",
      milesType: "NH miles",
      operatedBy: "ANA",
    },
    {
      id: 68,
      miles: 43000,
      icon: "/images/ana.png",
      milesType: "NH miles",
      operatedBy: "ANA, HA, UA",
    },
    {
      id: 69,
      miles: 45000,
      icon: "/images/virgin.png",
      milesType: "VS miles",
      operatedBy: "ANA",
    },
  ],
};

// 各目的地ごとの必要マイル数
const milesData: Record<string, { destination: string }> = {
  LAX: { destination: "ディズニーランドロサンゼルス" },
  CDG: { destination: "ディズニーランド・パリ" },
  HKG: { destination: "ディズニーランド・香港" },
  SHA: { destination: "ディズニーランド・上海" },
  MCO: { destination: "ディズニーランド・フロリダ" },
  HNL: { destination: "アウラニ・ディズニー・リゾート&スパ" },
};

const MilesPage: React.FC = () => {
  const pathname = usePathname();
  const id = pathname?.split("/")[2] as keyof typeof flightsData; // ✅ 型を明示

  const milesInfo = milesData[id];
  const flights = flightsData[id] || []; // ✅ ここでエラーを防ぐ！

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
      {/* 画像を表示 */}
      <div className="text-center my-4">
        <img
          src={`/images/${id}park.png`} // id に応じた画像を表示
          alt={`${id} park`}
          className="h-auto mx-auto"
        />
      </div>

      {/* フライトリストの表示 */}
      <div className="space-y-4 mt-8 px-6">
        {flights.map((flight) => (
          <div
            key={flight.id}
            className="border p-4 rounded-md flex items-center justify-between space-x-4"
          >
            {/* アイコンとフライト情報 */}
            <div className="flex items-center space-x-6">
              <img src={flight.icon} className="w-12 h-12 object-contain" />
              <div className="flex space-x-6">
                <p className="text-lg font-semibold">{flight.miles}</p>
                <p className="text-lg">{flight.milesType}</p>
                <p className="text-lg">
                  <span className="font-bold text-blue-600">Operated:</span>{" "}
                  {flight.operatedBy}
                </p>
              </div>
            </div>

            {/* 保存ボタン */}
            <button className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 focus:outline-none transition duration-200">
              保存
            </button>
          </div>
        ))}
      </div>
      {/* BACKボタン */}
      <div className="mt-8 text-center">
        <button
          onClick={() => window.history.back()}
          className="bg-gray-500 text-white py-2 px-4 rounded-full shadow-lg"
        >
          BACK
        </button>
      </div>
    </div>
  );
};

export default MilesPage;
