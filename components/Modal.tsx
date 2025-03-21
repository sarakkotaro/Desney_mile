import React from "react";
import Link from "next/link";
import { Park } from "../types";

// モーダルに渡す型定義
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  park: Park | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, park }) => {
  if (!isOpen || !park) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative bg-white rounded-lg p-6 w-3/4 max-w-3xl">
        {/* 閉じるボタン */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-3xl text-gray-600"
        >
          &times;
        </button>

        {/* パーク情報 */}
        <h2 className="text-xl mb-4">{park.name}</h2>
        <p>{park.details}</p>
        <p>
          <strong>営業時間:</strong> {park.openingHours}
        </p>
        <p>
          <strong>チケット価格:</strong> {park.ticketPrice}
        </p>
        <p>
          テキストテキストテキストテキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキストテキストテキストテキスト
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </p>

        {/* ✅ 各パークごとのマイル一覧ページへ遷移するボタン */}
        <div className="mt-4 text-center">
          <Link href={`/miles/${park.id}`}>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition">
              {park.name} への必要マイル数を見る
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Modal;
