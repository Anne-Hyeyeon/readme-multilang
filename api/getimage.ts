module.exports = (req, res) => {
  const images = [
    'https://raw.githubusercontent.com/Anne-Hyeyeon/mystorage/main/multilang/github_multilang_en.png',
    'https://raw.githubusercontent.com/Anne-Hyeyeon/mystorage/main/multilang/github_multilang_ko.png',
  ];

  const randomImage = images[Math.floor(Math.random() * images.length)];

  res.status(200).json({ imageUrl: randomImage });
};
