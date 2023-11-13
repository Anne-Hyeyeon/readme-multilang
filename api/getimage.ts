// import type { VercelRequest, VercelResponse } from '@vercel/node';

// export default function(req: VercelRequest, res: VercelResponse) {
//   const jsons: { title: string }[] = [
//     { title: 'Hello, World!' },
//     { title: 'Random!' },
//     { title: 'Interesting Test' }
//   ];

//   const choice = parseInt(req.query.choice as string) || 1;
//   const selectedJson = jsons[Math.max(0, Math.min(choice - 1, jsons.length - 1))];

//   const svgContent = `
//     <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
//       <text x="10" y="20">${selectedJson.title}</text>
//     </svg>
//   `;

//   res.setHeader('Content-Type', 'image/svg+xml');
//   res.status(200).send(svgContent);
// }


const express = require('express');
const session = require('express-session');

const app = express();

app.use(session({
  secret: '7yB93v9RfG5hLkz2Pq4Jq8nS1tW0XmE3'
  resave: false,
  saveUninitialized: true
}));

app.get('/choose', (req, res) => {
  const choice = parseInt(req.query.choice) || 0;
  req.session.choice = choice;
  res.redirect('/svg');
});

app.get('/svg', (req, res) => {
  const jsons = [
    { title: 'Hello, World!' },
    { title: 'Random!' },
    { title: 'Interesting Test' }
  ];

  const choice = req.session.choice || 0;
  const validChoice = choice >= 0 && choice < jsons.length;
  const selectedJson = validChoice ? jsons[choice] : jsons[0];

  const svgContent = `
    <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
      <text x="10" y="20">${selectedJson.title}</text>
    </svg>
  `;

  res.setHeader('Content-Type', 'image/svg+xml');
  res.send(svgContent);
});
