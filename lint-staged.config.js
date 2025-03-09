module.exports = {
  // JavaScript와 TypeScript 파일에 대해 실행
  '*.{js,jsx,ts,tsx}': [
    'eslint --fix', // ESLint로 검사 및 자동 수정
    'prettier --write', // Prettier로 포맷팅
  ],
};
