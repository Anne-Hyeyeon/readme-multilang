import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function(req: VercelRequest, res: VercelResponse) {
  const jsons: {title: string}[] = [
    { title: 'Hello, World!' },
    { title: 'Random!' },
    { title: 'Interesting Test' }
  ];

const randomJson:  {title: string} = jsons[Math.floor(Math.random() * jsons.length)];
const timestamp: number = new Date().getTime();


const svgContent = `
    <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
      <text x="10" y="20">${randomJson.title}</text>
    </svg>
  `;

  res.setHeader('Content-Type', 'image/svg+xml');
  res.status(200).send(svgContent + `?t=${timestamp}`);
}
