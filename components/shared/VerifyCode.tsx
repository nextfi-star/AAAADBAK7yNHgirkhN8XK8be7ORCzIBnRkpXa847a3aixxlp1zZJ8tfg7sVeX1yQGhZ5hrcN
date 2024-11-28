'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { loginUser } from '@/utils/api';

const VerifyCode = () => {
  const [vcode, setVcode] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const payload = { vcode }; // Передаем только код
      const response = await loginUser(payload); // Используем loginUser для верификации кода

      if (response.response === 'success') {
        router.push('/login'); // Перенаправляем на страницу входа
      } else {
        setError(response.message || 'Verification failed');
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred during verification');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="verify-code-form">
      <h1>Verify Your Code</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter verification code"
          value={vcode}
          onChange={(e) => setVcode(e.target.value)}
        />
        {error && <p className="error">{error}</p>}
        <button type="submit" disabled={isLoading || !vcode}>
          {isLoading ? 'Verifying...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default VerifyCode;
