const path = require('path');
const fs = require('fs')

test('main index.html file exists', () => {
  const filePath = path.join("index.html")
  expect(fs.existsSync(filePath)).toBeTruthy();
});

test('Dockerfile exists', () => {
  const filePath = path.join("..", "Dockerfile")
  expect(fs.existsSync(filePath)).toBeTruthy();
});

test('.gitignore file exists', () => {
  const filePath = path.join("..", ".gitignore")
  expect(fs.existsSync(filePath)).toBeTruthy();
});
