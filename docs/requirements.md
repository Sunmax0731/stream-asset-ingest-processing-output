# 要件定義

| 項目 | 内容 |
| --- | --- |
| Rank | 65 |
| Domain | OBSStreaming |
| Idea No. | 3 |
| Repository | stream-asset-ingest-processing-output |
| 主な公開先 | GitHub Release / BOOTH |

## 背景

素材準備、処理、出力確認が手作業だと、配信直前に抜け漏れが起きやすい。

## 目的

配信用素材の取り込み、ノード処理、バッチ実行、録画や出力の確認を一連化する。

## 必須要件

- stream asset job を複数件まとめて検証できる。
- required fields: `id`, `title`, `assetPath`, `operation`, `outputPath`, `owner`。
- warning field: `durationEstimate`。
- 代表シナリオ、QCDS metrics、docs ZIP、release evidence を再生成できる。
