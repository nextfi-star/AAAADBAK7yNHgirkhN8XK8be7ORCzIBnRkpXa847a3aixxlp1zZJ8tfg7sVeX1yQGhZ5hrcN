// 'use client';

// import { useUserStore } from '@/hooks/useUserData'
// import { useEffect, useState } from 'react';

// interface Payment {
//   adata: string;
//   address: string | null;
//   amount: number;
//   coin: string;
//   hash: string | null;
//   id: number;
//   sid: string;
//   time: number;
//   type: string;
//   uid: string;
// }

// const TestingCode = () => {
//   // Получаем overview из глобального состояния
//   const user = useUserStore((state) => state.user?.overview?.payments);
//   const [payments, setPayments] = useState<Payment[]>([]);
//   useEffect(() => {
//     if (user) {
//       setPayments(user);
//     }
//   }, [user]);

//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-4">История платежей</h2>
//       {payments.length > 0 ? (
//         <table className="w-full border-collapse">
//           <thead>
//             <tr>
//               <th className="border p-2">ID</th>
//               <th className="border p-2">Монета</th>
//               <th className="border p-2">Сумма</th>
//               <th className="border p-2">Дата</th>
//               <th className="border p-2">Тип</th>
//             </tr>
//           </thead>
//           <tbody>
//             {payments.map((payment) => (
//               <tr key={payment.id}>
//                 <td className="border p-2">{payment.id}</td>
//                 <td className="border p-2">{payment.coin}</td>
//                 <td className="border p-2">{payment.amount}</td>
//                 <td className="border p-2">
//                   {new Date(payment.time * 1000).toLocaleDateString('en-GB')}
//                 </td>
//                 <td className="border p-2">{payment.type}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>Нет платежей</p>
//       )}
//     </div>
//   );
// }
// export default TestingCode

'use client';

import { useUserStore } from '@/hooks/useUserData'
import { uploadFile } from '@/utils/api'
import { useState } from 'react';

export default function Verification() {
  // Получаем CSRF токен из глобального состояния пользователя
  const csrf = useUserStore((state) => state.user?.csrf) || '';
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [region, setRegion] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setMessage('Выберите файл перед загрузкой');
      return;
    }
    if (!csrf) {
      setMessage('Ошибка: CSRF токен отсутствует');
      return;
    }

    setLoading(true);
    const result = await uploadFile(csrf, selectedFile, 'upload_verif', region);
    setLoading(false);

    if (result.response === 'success') {
      setMessage('✅ Файл успешно загружен и отправлен на проверку');
    } else {
      setMessage(`❌ Ошибка: ${result.message}`);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Верификация пользователя</h2>
      <div className="mb-4">
        <label className="block font-medium mb-1">Выберите файл:</label>
        <input type="file" onChange={handleFileChange} />
      </div>
      <div className="mb-4">
        <label className="block font-medium mb-1">Страна/регион:</label>
        <input
          type="text"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          className="border p-2 rounded w-full"
          maxLength={15} // Сервер не принимает region длиннее 15 символов
          placeholder="Введите название страны (необязательно)"
        />
      </div>
      <button
        onClick={handleUpload}
        className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        disabled={loading}
      >
        {loading ? 'Загрузка...' : 'Отправить'}
      </button>
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
}
