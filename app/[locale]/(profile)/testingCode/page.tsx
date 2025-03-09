'use client';

import { useUserStore } from '@/hooks/useUserData'
import { useEffect, useState } from 'react';

interface Payment {
  adata: string;
  address: string | null;
  amount: number;
  coin: string;
  hash: string | null;
  id: number;
  sid: string;
  time: number;
  type: string;
  uid: string;
}

const TestingCode = () => {
  // Получаем overview из глобального состояния
  const user = useUserStore((state) => state.user?.overview?.payments);
  const [payments, setPayments] = useState<Payment[]>([]);
  useEffect(() => {
    if (user) {
      setPayments(user);
    }
  }, [user]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">История платежей</h2>
      {payments.length > 0 ? (
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border p-2">ID</th>
              <th className="border p-2">Монета</th>
              <th className="border p-2">Сумма</th>
              <th className="border p-2">Дата</th>
              <th className="border p-2">Тип</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment.id}>
                <td className="border p-2">{payment.id}</td>
                <td className="border p-2">{payment.coin}</td>
                <td className="border p-2">{payment.amount}</td>
                <td className="border p-2">
                  {new Date(payment.time * 1000).toLocaleDateString('en-GB')}
                </td>
                <td className="border p-2">{payment.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Нет платежей</p>
      )}
    </div>
  );
}
export default TestingCode