"use client";

import { useState } from "react";
import Modal from "../components/Modal"; // Modal コンポーネントのインポート
import ParkGallery from "../components/ParkGallery"; // ギャラリーコンポーネントのインポート
import { Park } from "@/types"; // 型をインポート

const parks: Park[] = [
  {
    id: "SHA",
    name: "ディズニーランド上海",
    imageUrl: "/images/SHA.png",
    details: "上海ディズニーランドの詳細情報",
    openingHours: "9:00 AM - 10:00 PM",
    ticketPrice: "500 CNY",
  },
  {
    id: "HKG",
    name: "ディズニーランド香港",
    imageUrl: "/images/HKG.png",
    details: "香港ディズニーランドの詳細情報",
    openingHours: "10:00 AM - 9:00 PM",
    ticketPrice: "450 HKD",
  },
  {
    id: "LAX",
    name: "ディズニーランドロサンゼルス",
    imageUrl: "/images/LAX.png",
    details: "ロサンゼルスディズニーランドの詳細情報",
    openingHours: "8:00 AM - 11:00 PM",
    ticketPrice: "$150 USD",
  },
  {
    id: "MCO",
    name: "ディズニーランドフロリダ",
    imageUrl: "/images/MCO.png",
    details: "フロリダディズニーランドの詳細情報",
    openingHours: "9:00 AM - 10:00 PM",
    ticketPrice: "$140 USD",
  },
  {
    id: "HNL",
    name: "アウラニ・ディズニー・リゾート&スパ",
    imageUrl: "/images/HNL.png",
    details: "アウラニ・ディズニー・リゾート&スパの詳細情報",
    openingHours: "24時間営業（施設によって異なる）",
    ticketPrice: "宿泊料金・体験料金は変動制",
  },
  {
    id: "CDG",
    name: "ディズニーランドパリ",
    imageUrl: "/images/CDG.png",
    details: "パリディズニーランドの詳細情報",
    openingHours: "9:30 AM - 8:00 PM",
    ticketPrice: "90 EUR",
  },
];

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPark, setSelectedPark] = useState<Park | null>(null);

  const openModal = (park: Park) => {
    setSelectedPark(park);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto p-6 relative">
      {/* ログインとサインアップボタンを右上に配置 */}
      <div className="absolute top-6 right-6 flex space-x-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Login
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded">
          Signup
        </button>
      </div>

      <h1 className="text-3xl text-center mt-9">
        『夢の世界へ、マイルで飛び立とう！』
      </h1>
      <h2 className="text-sm text-center mb-9 mt-4">
        Fly to the world of dreams with miles!
      </h2>
      {/* パークのギャラリー */}
      <ParkGallery parks={parks} openModal={openModal} />

      {/* モーダル */}
      <Modal isOpen={isModalOpen} onClose={closeModal} park={selectedPark} />
    </div>
  );
};

export default Home;
