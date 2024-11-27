export const registerUser = async (data: {
  email: string;
  password: string;
  phone: string;
  refid?: string;
}) => {
  try {
    const response = await fetch('http://nextfi.site:5000/api/v1/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    if (response.ok) {
      return result;
    } else {
      throw new Error(result.message);
    }
  } catch (error: any) {
    throw new Error(error.message || 'An error occurred during registration');
  }
};
export const loginUser = async (payload: { email?: string; phone?: string; password: string }) => {
  const response = await fetch('http://nextfi.site:5000/api/v1/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Login failed');
  }

  return response.json();
};