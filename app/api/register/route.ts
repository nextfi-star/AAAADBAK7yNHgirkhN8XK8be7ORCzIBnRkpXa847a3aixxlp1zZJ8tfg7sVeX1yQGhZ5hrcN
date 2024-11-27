// export const registerUser = async (data: {
//   email: string;
//   password: string;
//   phone: string;
//   refid?: string;
// }) => {
//   const response = await fetch('/api/v1/register', { 
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data),
//   });

//   if (!response.ok) {
//     const error = await response.json();
//     throw new Error(error.message || 'Registration failed');
//   }

//   return response.json();
// };
