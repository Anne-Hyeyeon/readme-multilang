import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function (req: VercelRequest, res: VercelResponse) {
  const tarotMsgs: { id: number, title: string, message: string }[] = [
  { "id": 0, "title": "코딩 타로점 안내", "message": "개발자 여러분, 오늘의 코딩 운세가 궁금하신가요? \n코딩 요정에게 물어보세요! \n당신의 프로그래밍 여정에 특별한 통찰과 영감을 제공해 드릴 거에요." },
  { "id": 1, "title": "새로운 시작", "message": "오늘은 'Hello, World!'를 넘어서 새로운 프로젝트를 시작할 때입니다!" },
  { "id": 2, "title": "완벽한 코드", "message": "버그 없는 코드를 작성할 수 있는 날입니다. \n못 믿으시겠다면 말고요..." },
  { "id": 3, "title": "언어 학습", "message": "새로운 프로그래밍 언어를 배워보세요. \n 혹시 타입스크립트는 어떠세요?" },
  { "id": 4, "title": "창의적 회의", "message": "팀 회의에서 당신의 아이디어가 빛을 발할 것입니다. \n그렇지만 미팅은 여전히 지루할 거예요." },
  { "id": 5, "title": "리팩토링의 기회", "message": "오늘은 코드 리팩토링에 좋은 날입니다. \n혹시... 함수 하나가 전체 파일을 차지하고 있지는 않나요?" },
  { "id": 6, "title": "휴식의 중요성", "message": "스트레스가 많은 날이네요. \n코딩 대신 산책을 추천합니다." },
  { "id": 7, "title": "주의 깊은 코딩", "message": "오늘은 예상치 못한 에러에 조심하세요. \n특히 세미콜론을 잊지 마세요." },
  { "id": 8, "title": "용감한 디버깅", "message": "끈질긴 버그에 맞서 싸우세요 용사여!!! \n오늘은 당신이 승자입니다." },
  { "id": 9, "title": "장기 프로젝트", "message": "장기 프로젝트에 힘을 쏟을 때입니다. \n커피를 준비하세요!" },
  { "id": 10, "title": "새로운 시작", "message": "오래된 코드를 과감히 버리세요. \n새로운 시작이 기다리고 있습니다." },
  { "id": 11, "title": "협업의 힘", "message": "다른 개발자와 협업해서 큰 문제를 해결하세요. \n집단 지성이 최고랍니다." },
  { "id": 12, "title": "기술적 도전", "message": "오늘은 새로운 기술 스택에 도전해보세요. \n아마도... 블록체인?" },
  { "id": 13, "title": "학습과 성장", "message": "기술의 트렌드가 빠르게 바뀝니다. \n오늘은 새로운 것을 배워보세요!" },
  { "id": 14, "title": "열정 유지", "message": "프로젝트에 대한 열정을 잃지 마세요. \n당신의 코드가 세상을 바꿀 수 있습니다." },
  { "id": 15, "title": "복잡함 속의 해결책", "message": "복잡한 코드에도 명확한 해결책이 있습니다. \n잠시 뒤로 물러서서 큰 그림을 보세요." },
  { "id": 16, "title": "성공을 향하여", "message": "당신의 노력이 큰 성공으로 이어질 것입니다. \n거의 다 왔어요. 포기하지 마세요!" },
  { "id": 17, "title": "학습의 가치", "message": "항상 배우는 자세를 유지하세요. \n그리고 그것이 당신의 '버그'가 아닌 '기능'임을 기억하세요!" },
  { "id": 18, "title": "직관의 힘", "message": "직관을 믿으세요. 그리고 그 직관이 당신을 \n새로운 라이브러리로 인도하게 하세요." },
  { "id": 19, "title": "지식의 확장", "message": "오늘은 새로운 기술 서적을 구매하기 좋은 날입니다. \n당장 교보문고로 달려 가세요." },
  { "id": 20, "title": "동료와의 소통", "message": "동료에게 반갑게 인사하고, 격려의 말을 건네 보세요. \n이상하게 쳐다보면 어쩔 수 없지만요..." },
  { "id": 21, "title": "일상에서의 탈출", "message": "오늘은 코딩 대신 데이트 어떠세요? \n당장 반차 결재를 올리러 가자고요!" },
  { "id": 22, "title": "새로운 도전", "message": "오늘은 새로운 기술적 도전을 시작하기 좋은 날입니다. \n당신의 IDE가 준비되어 있습니다!" },
  { "id": 23, "title": "혼자만의 시간", "message": "혼자만의 시간을 가져보세요. \n코드와 당신, 그리고 당신의 생각만이 존재하는 시간을요." }  ];

  const callbackUrl = req.query.callback as string | undefined;

  let randomTarotMsg;
  if (callbackUrl) {
    randomTarotMsg = tarotMsgs[Math.floor(Math.random() * tarotMsgs.length)];
  } else {
    randomTarotMsg = tarotMsgs[Math.floor(Math.random() * tarotMsgs.length)];
  }

  const svgContent = `
  <svg width="820" height="250" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="backgroundGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#807097;stop-opacity:1" /> 
      <stop offset="100%" style="stop-color:#647979;stop-opacity:1" /> 
    </linearGradient>
  </defs>
  <style>
    .title {
      fill: white;
      font-size: 24px;
      font-family: 'Helvetica', sans-serif;
      text-anchor: middle;
      font-weight: bold;
    }
    .message {
      fill: white;
      font-size: 20px;
      font-family: 'Arial', sans-serif;
      text-anchor: middle;
    }
  </style>
  <rect width="100%" height="100%" fill="url(#backgroundGradient)" />
  <text x="410" y="60" class="title">
      <tspan x="410" dy="0">🔮${randomTarotMsg.title}</tspan>
  </text>
<text x="410" y="120" class="message">
   <tspan x="410" dy="1.2em">💻${randomTarotMsg.message.split('\n')[0]}</tspan>
    <tspan x="410" dy="1.2em">${randomTarotMsg.message.split('\n')[1]}</tspan>
    <tspan x="410" dy="1.2em">${randomTarotMsg.message.split('\n')[2]}</tspan>
  </text>
</svg>
  `;

  if (callbackUrl) {
    res.redirect(callbackUrl);
  } else {
    res.setHeader('Content-Type', 'image/svg+xml');
    res.status(200).send(svgContent);
  }
}
