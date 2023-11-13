import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function(req: VercelRequest, res: VercelResponse) {
  const jsons: { title: string }[] = [
    { title: 'Hello, World!' },
    { title: 'Random!' },
    { title: 'Interesting Test' }
  ];

  const choice = parseInt(req.query.choice as string);
  const validChoice = choice >= 1 && choice <= jsons.length;
  const selectedJson = validChoice ? jsons[choice - 1] : jsons[0];

  const svgContent = `
    <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
      <text x="10" y="20">${selectedJson.title}</text>
    </svg>
  `;

  // callback 파라미터를 읽어옵니다
  const callbackUrl = req.query.callback as string | undefined;

  res.setHeader('Content-Type', 'image/svg+xml');

  if (callbackUrl) {
    res.redirect(callbackUrl);
  } else {
    res.status(200).send(svgContent);
  }
}
