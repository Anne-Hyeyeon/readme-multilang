import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function(req: VercelRequest, res: VercelResponse) {
  const images: string[] = [
    'https://github.com/Anne-Hyeyeon/mystorage/blob/main/multilang/github_multilang_ko.png?raw=true',
    'https://github.com/Anne-Hyeyeon/mystorage/blob/main/multilang/github_multilang_en.png?raw=true',
    'https://example.com/image3.jpg',
  ];

  const randomImage: string = images[Math.floor(Math.random() * images.length)];

  res.redirect(randomImage);
}
