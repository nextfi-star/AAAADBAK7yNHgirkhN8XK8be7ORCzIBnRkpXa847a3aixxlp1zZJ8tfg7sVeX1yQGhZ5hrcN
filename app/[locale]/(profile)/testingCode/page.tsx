'use client'
import React, { useEffect, useState } from 'react';
import { investAction, InvestActionPayload } from '@/utils/api';
import { getInvestPackets } from '@/utils/api';
import { useUserStore } from '@/hooks/useUserData';

export type InvestPacket = {
  id: number;
  coin: string;
  rtime: number;       // время в секундах, например, 2592000 для 30 дней
  percent: number;
  amount_limit: number;
  packet: number;
};

const InvestCreateSelect: React.FC = () => {
  const csrf = useUserStore((state) => state.user?.csrf);
  const [packets, setPackets] = useState<InvestPacket[]>([]);
  const [selectedPacketId, setSelectedPacketId] = useState<number | null>(null);
  const [amount, setAmount] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  // Получаем список пакетов с сервера
  useEffect(() => {
    const fetchPackets = async () => {
      try {
        const result = await getInvestPackets();
        if (result.success) {
          setPackets(result.packets);
        } else {
          setMessage(`Ошибка: ${result.message}`);
        }
      } catch (error) {
        setMessage('Ошибка сети при загрузке пакетов');
      }
    };
    fetchPackets();
  }, []);

  // Выбираем объект пакета по выбранному ID
  const selectedPacket = packets.find(pkt => pkt.id === selectedPacketId);

  const formatDays = (rtime: number): number => {
    return Math.floor(rtime / 86400);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!csrf) {
      setMessage('CSRF токен отсутствует');
      return;
    }
    if (!selectedPacket) {
      setMessage('Пожалуйста, выберите инвестиционный пакет');
      return;
    }
    if (!amount) {
      setMessage('Пожалуйста, введите сумму инвестиций');
      return;
    }

    const payload: InvestActionPayload = {
      type: 'invest_create',
      coin: selectedPacket.coin,
      amount: parseFloat(amount),
      csrf,
      id: selectedPacket.id,
      packet: selectedPacket.packet,
    };

    try {
      const result = await investAction(payload);
      if (result.success) {
        setMessage('Инвестиция успешно создана');
      } else {
        setMessage(`Ошибка: ${result.message}`);
      }
    } catch (error) {
      setMessage('Ошибка при отправке запроса');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: '400px',
        margin: '20px auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
      }}
    >
      <label>Выберите инвестиционный пакет:</label>
      <select
        value={selectedPacketId !== null ? selectedPacketId.toString() : ''}
        onChange={(e) => setSelectedPacketId(Number(e.target.value))}
        className="bg-black"
      >
        <option value="">-- Выберите пакет --</option>
        {packets.map(pkt => (
          <option key={pkt.id} value={pkt.id}>
            {pkt.coin} – {formatDays(pkt.rtime)} дней – {pkt.percent}%
          </option>
        ))}
      </select>

      <label>Введите сумму инвестиций:</label>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Введите сумму"
      />

      <button type="submit">Инвестировать</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default InvestCreateSelect;
