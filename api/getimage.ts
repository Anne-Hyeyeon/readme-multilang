import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function(req: VercelRequest, res: VercelResponse) {
  const jsons: { title: string }[] = [
    { title: 'Hello, World!' },
    { title: 'Random!' },
    { title: 'Interesting Test' }
  ];

  const randomJson: { title: string } = jsons[Math.floor(Math.random() * jsons.length)];

  const svgContent = `
    <svg width="820" height="200" xmlns="http://www.w3.org/2000/svg">
      <style>
        .title {
          fill: #0070f3;
          font-size: 24px;
          font-family: 'Helvetica', sans-serif;
          text-anchor: middle;
        }
      </style>
      <text x="410" y="100" class="title" dominant-baseline="middle">${randomJson.title}</text>
    </svg>
  `;

  const callbackUrl = req.query.callback as string | undefined;

  if (callbackUrl) {
    res.redirect(callbackUrl);
  } else {
    res.setHeader('Content-Type', 'image/svg+xml');
    res.status(200).send(svgContent);
  }
}
