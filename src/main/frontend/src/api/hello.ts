import axios from './axios';

export async function fetchHello(): Promise<string> {
  const res = await axios.get('/hello');
  return res.data; // Spring Boot에서 단순 문자열이면 string
}