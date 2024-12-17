const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const secretKey = process.env.SECRET_API_KEY;

console.log("Public API URL:", apiUrl); // Accessible on client and server
console.log("Secret Key:", secretKey);