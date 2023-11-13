import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function(req: VercelRequest, res: VercelResponse) {
  const jsons: { title: string }[] = [
    { title: 'Hello, World!' },
    { title: 'Random!' },
    { title: 'Interesting Test' }
  ];

  const randomJson: { title: string } = jsons[Math.floor(Math.random() * jsons.length)];

  const svgContent = `
    <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
      <text x="10" y="20">${randomJson.title}</text>
    </svg>
  `;

  const callbackUrl = req.query.callback as string | undefined;

  if (callbackUrl) {
    res.redirect(callbackUrl);
  } else {
    // callback URL이 없는 경우 SVG 컨텐츠를 반환합니다.
    res.setHeader('Content-Type', 'image/svg+xml');
    res.status(200).send(svgContent);
  }
}
