"use client";

import { useParams } from "next/navigation";

const parks = [
  {
    id: "SHA",
    name: "ディズニーランド上海",
    imageUrl: "/images/SHA.png",
    milesRequired: 70000,
    details: "上海ディズニーランドの詳細情報",
  },
  {
    id: "HKG",
    name: "ディズニーランド香港",
    imageUrl: "/images/HKG.png",
    milesRequired: 35000,
    details: "香港ディズニーランドの詳細情報",
  },
  // 他のパークも追加
];

const ParkDetails: React.FC = () => {
  const { id } = useParams();
  const park = parks.find((p) => p.id === id);

  if (!park) return <div>該当するパークが見つかりません。</div>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl">{park.name}</h1>
      <img src={park.imageUrl} alt={park.name} className="w-full h-auto" />
      <p>{park.details}</p>
      <p>
        <strong>必要マイル数:</strong> {park.milesRequired} マイル
      </p>
    </div>
  );
};

export default ParkDetails;
