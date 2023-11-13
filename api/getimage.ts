import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function(req: VercelRequest, res: VercelResponse) {
  const jsons: { title: string }[] = [
    { title: 'Hello, World!' },
    { title: 'Random!' },
    { title: 'Interesting Test' }
  ];

  const choice = parseInt(req.query.choice as string) || 1;
  const selectedJson = jsons[Math.max(0, Math.min(choice - 1, jsons.length - 1))];

  const svgContent = `
    <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
      <text x="10" y="20">${selectedJson.title}</text>
    </svg>
  `;

  res.setHeader('Content-Type', 'image/svg+xml');
  const redirectUrl = 'https://github.com/Anne-Hyeyeon';
  res.redirect(302, redirectUrl); 
  res.status(200).send(svgContent);
}
