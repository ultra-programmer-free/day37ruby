module.exports = {
    // JestでTypeScriptのコードを実行するための設定
    preset: "ts-jest",
    // テストが実行される環境を設定
    // jest-environment-jsdom は、ブラウザライクな環境をエミュレートし、DOM操作を伴うテストが可能なようにする設定
    testEnvironment: "jest-environment-jsdom",
    // 各テストファイルが実行される前に実行されるスクリプト
    setupFilesAfterEnv: ["./jest.setup.js"],
  };