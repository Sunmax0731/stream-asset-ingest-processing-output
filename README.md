# 素材取り込み・処理キュー・出力確認

配信用素材の取り込み、ノード処理、バッチ実行、録画や出力の確認を一連化する。

| 項目 | 内容 |
| --- | --- |
| Rank | 65 |
| Domain | OBSStreaming |
| Idea No. | 3 |
| Repository | stream-asset-ingest-processing-output |
| 主な公開先 | GitHub Release / BOOTH |

## Implementation

- `src/product-profile.mjs`: プロダクト定義。
- `src/core.mjs`: 入力正規化とバッチ評価。
- `src/validators.mjs`: 必須項目と warning 項目の検査。
- `src/review-model.mjs`: UI/レビュー向けモデル。
- `src/report.mjs`: Markdown / HTML レポート生成。
- `src/cli.mjs`: CLI。

## Validation

`npm test` で代表シナリオ、QCDS、docs ZIP、文字化けを検証します。

## Strict QCDS Docs

- [Remote benchmark](docs/qcds-remote-benchmark.md)
- [Strict metrics](docs/qcds-strict-metrics.json)
- [Traceability matrix](docs/traceability-matrix.md)
- [Release evidence](docs/release-evidence.json)
