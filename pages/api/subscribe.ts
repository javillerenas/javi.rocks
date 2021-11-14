import type { NextApiRequest, NextApiResponse } from 'next';

const REVUE_BASE_URL = 'https://www.getrevue.co/api';

/**
 * @description
 * Endpoint for subscribing an email to my Revue newsletter
 * 
 * @params
 *    `email` – The email to register
 * 
 * @returns
 *    `error` – error message if there's an error
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  const result = await fetch(`${REVUE_BASE_URL}/v2/subscribers`, {
    method: 'POST',
    headers: {
      Authorization: `Token ${process.env.REVUE_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email })
  });
  const data = await result.json();

  if (!result.ok) {
    return res.status(500).json({ error: data.error.email[0] });
  }

  return res.status(201).json({ error: '' });
}
