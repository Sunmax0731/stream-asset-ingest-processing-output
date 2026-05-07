export const productProfile = {
  "repository": "stream-asset-ingest-processing-output",
  "title": "素材取り込み・処理キュー・出力確認",
  "domain": "OBSStreaming",
  "hostApp": null,
  "rank": 65,
  "tier": "P2",
  "ideaNo": 3,
  "overview": "配信用素材の取り込み、ノード処理、バッチ実行、録画や出力の確認を一連化する。",
  "problem": "素材準備、処理、出力確認が手作業だと、配信直前に抜け漏れが起きやすい。",
  "differentiation": "配信素材の入力から出力確認までを、再実行可能な軽量キューにする。",
  "publish": "GitHub Release / BOOTH",
  "surface": "OBSStreaming product spec + CLI validation core",
  "entity": "stream asset job",
  "requiredFields": [
    "id",
    "title",
    "assetPath",
    "operation",
    "outputPath",
    "owner"
  ],
  "warningField": "durationEstimate",
  "qcdsManualTestCap": "S-",
  "qcdsTarget": "A-",
  "benchmarkRepos": [
    "Sunmax0731/project-portfolio-generator",
    "Sunmax0731/release-output-check-flow",
    "Sunmax0731/movie-telop-transcriber",
    "Sunmax0731/codex-remote-android"
  ]
};
