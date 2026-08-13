# SEO 運用ドキュメント — 株式会社丸義オフィシャルサイト

最終更新：2026-08-13

正規URL（www 付きに統一）: `https://www.maruyoshi-official.com/`

---

## 1. 情報源となるファイル

事実情報（NAP・求人条件）は必ず以下から参照する。ハードコードしない。

| ファイル | 内容 |
| --- | --- |
| `lib/site.ts` | 会社名・代表者・住所・郵便番号・メール・Instagram・求人条件・`canonical()` |
| `lib/schema.ts` | Organization / WebSite / LocalBusiness / BreadcrumbList / FAQPage / Service / Article の各 JSON-LD ビルダー |
| `lib/services.ts` | サービス詳細ページ4件のコンテンツ |
| `lib/columns.ts` | コラム記事12件のコンテンツ |
| `lib/faqs.ts` | 求人・協力会社のFAQ（画面表示と FAQPage 構造化データの共通ソース） |
| `lib/works.ts` | 施工実績（**現在は空**。実データ投入までインデックスされない） |

住所や求人条件を変更するときは `lib/site.ts` を直せば、表示・構造化データの両方に反映される。

---

## 2. キーワード → URL 対応表

ページごとに検索意図を分担している。同じキーワードを複数ページで狙わない（カニバリを防ぐため）。

### サービス獲得系

| 主要キーワード | 対応URL |
| --- | --- |
| 板橋区 左官工事 / 板橋区 左官 / 東京 左官工事 / 東京都 左官業者 | `/service/sakan` |
| 板橋区 土間コンクリート / 板橋区 土間コンクリート工事 / 東京 土間コンクリート工事 | `/service/doma-concrete` |
| コンクリート打設 東京 | `/service/concrete-placement` |
| コンクリート均し 東京 / コンクリート押え 東京 | `/service/screeding-finishing` |
| 板橋区 左官工事（地域意図が強いもの） | `/area/itabashi` |
| 左官工事 土間コンクリート 事業内容（一覧・比較意図） | `/service` |

### 求人系

| 主要キーワード | 対応URL |
| --- | --- |
| 東京 左官 求人 / 板橋区 左官 求人 / 東京 土間コンクリート 求人 / 板橋区 建設 求人 / 土間屋 求人 東京 | `/recruit` |
| 左官 未経験 求人（情報収集フェーズ） | `/column/mikeiken-sakan` → `/recruit` へ誘導 |
| 左官職人 仕事内容 | `/column/sakan-shokunin-shigoto` → `/recruit` へ誘導 |

### 協力会社系

| 主要キーワード | 対応URL |
| --- | --- |
| 左官 協力会社募集 / 土間コンクリート 協力会社募集 / 土間屋 協力会社募集 / 東京 左官 協力会社 / 東京 土間 協力会社 | `/partner` |

### 情報検索系（コンテンツクラスター）

すべて `/column/` 配下。各記事から関連サービスページへ内部リンクしている。

---

## 3. title 一覧

ルート `app/layout.tsx` の `title.template` が `%s｜株式会社丸義` を付与する。
**各ページの title に社名を書かないこと**（二重表記の原因になる）。
社名の位置を変える必要があるページのみ `title: { absolute: '...' }` を使う（現在は `/company` のみ）。

| URL | title |
| --- | --- |
| `/` | 板橋区の左官工事・土間コンクリート工事｜株式会社丸義 |
| `/service` | 左官工事・土間コンクリート工事｜東京都板橋区｜株式会社丸義 |
| `/service/sakan` | 左官工事｜板橋区・東京都内対応｜株式会社丸義 |
| `/service/doma-concrete` | 土間コンクリート工事｜板橋区・東京都内対応｜株式会社丸義 |
| `/service/concrete-placement` | コンクリート打設｜東京都内の現場対応｜株式会社丸義 |
| `/service/screeding-finishing` | コンクリート均し・押え仕上げ｜東京都内対応｜株式会社丸義 |
| `/area/itabashi` | 板橋区の左官工事・土間コンクリート工事｜株式会社丸義 |
| `/strength` | 丸義の強み・施工品質｜板橋区の左官工事｜株式会社丸義 |
| `/recruit` | 左官・土間コンクリート求人｜東京都板橋区｜株式会社丸義 |
| `/partner` | 左官・土間コンクリート協力会社募集｜東京｜株式会社丸義 |
| `/company` | 会社概要｜株式会社丸義｜東京都板橋区 |
| `/contact` | お問い合わせ｜株式会社丸義 |
| `/column` | 施工コラム｜左官・土間コンクリートの基礎知識｜株式会社丸義 |
| `/column/[slug]` | 各記事の `metaTitle`＋｜株式会社丸義（`lib/columns.ts`） |
| `/works` | 施工実績｜左官・土間コンクリート工事｜株式会社丸義（**現在 noindex**） |
| 404 | ページが見つかりません｜株式会社丸義（noindex） |

---

## 4. meta description

全ページで固有。使い回しはしていない。
定義場所：静的ページは各 `app/**/page.tsx`、動的ページは `lib/services.ts` / `lib/columns.ts` の `metaDescription`。

書き方の方針：

- 「地域 ＋ サービス ＋ そのページ固有の内容」を自然な日本語で入れる
- 120字前後を目安にする
- キーワードを詰め込まない

---

## 5. canonical

- `metadataBase` = `https://www.maruyoshi-official.com`（`app/layout.tsx`）
- 全ページで self canonical を明示（`alternates.canonical`）
- **新しいページを追加したら必ず `alternates: { canonical: canonical('/path') }` を書くこと。**
  書き忘れると `app/layout.tsx` のトップページ canonical を継承してしまう。
- non-www → www は `next.config.mjs` の `redirects()` で 308 恒久リダイレクト。
  ホストが非www のときだけマッチするためループしない。
  Vercel のドメイン設定側でも同方向のリダイレクトを設定している場合は、どちらか一方に統一するとリクエストが1回で済む。

---

## 6. 構造化データ一覧

| スキーマ | 出力ページ | 実装 |
| --- | --- | --- |
| `Organization` | `/` のみ | `lib/schema.ts` → `app/page.tsx` |
| `WebSite` | `/` のみ | 同上 |
| `HomeAndConstructionBusiness`（LocalBusiness系） | `/company`, `/area/itabashi` | `lib/schema.ts` |
| `BreadcrumbList` | 全下層ページ | `components/Breadcrumbs.tsx`（表示と同一データから生成） |
| `Service` | `/service/[slug]` 4件 | `lib/schema.ts` |
| `FAQPage` | `/recruit`, `/partner`, `/area/itabashi`, `/service/[slug]`, FAQ を持つ `/column/[slug]` | `lib/faqs.ts` ほか |
| `Article` | `/column/[slug]` 12件 | `lib/schema.ts` |
| `JobPosting` | **`/recruit` のみ** | `app/recruit/page.tsx` |
| `CreativeWork` | `/works/[slug]`（実データ投入後） | `app/works/[slug]/page.tsx` |

### 出力している NAP・営業情報

| 項目 | 値 | 反映先 |
| --- | --- | --- |
| 電話番号 | 080-1116-1864（構造化データは `+81-80-1116-1864`） | Organization / LocalBusiness / JobPosting `hiringOrganization` / `applicationContact` |
| 営業時間 | 月〜金 08:00〜17:00 | LocalBusiness `openingHoursSpecification` |

営業時間は「基本8:00〜17:00・イレギュラーあり」との情報にもとづく。
構造化データには基本時間のみを記載し、**変動する旨は必ず画面側に併記する**
（`lib/site.ts` の `BUSINESS_HOURS.note`）。曜日は求人ページ記載の「土日祝休み・週休2日制」に合わせて月〜金としている。
実際の受付曜日が異なる場合は `BUSINESS_HOURS.schemaDays` を修正すること。

### 意図的に出力していない項目

存在が確認できないため捏造していない。実際の情報が判明したら追加する。

- 口コミ・評価（`aggregateRating` / `review`）
- 受賞歴
- 建設業許可番号（**未取得のため記載しない**。取得したら会社概要と LocalBusiness に追加する）
- JobPosting の `validThrough`（募集期限が未設定のため）
- JobPosting の `directApply`（応募がサイト内で完結しないため。メールアプリを開く方式）

---

## 7. JobPosting（Google for Jobs）の運用ルール

`app/recruit/page.tsx` に定義。**求人詳細ページにのみ出力**しており、トップページや一覧には付けていない。

守ること：

1. **`datePosted` を定期的に更新する。** 現在 `RECRUIT_UPDATED = '2026-08-13'`。募集を継続する限り、内容を見直したタイミングで更新する。古いままだと Google 側で掲載が落ちやすい。
2. **募集を終了したら JobPosting を削除する。** ページごと noindex にするか、`JsonLd` の出力を外す。期限切れ求人を残さない。
3. **構造化データの内容は必ず画面にも表示する。** 給与・休日・就業時間・福利厚生を変更する場合は、`lib/site.ts` の `JOB` と `components/pages/RecruitContent.tsx` の両方を更新する。
4. **`validThrough` を勝手に作らない。** 実際の募集期限が決まったときだけ追加する。
5. **`directApply: true` にしない。** 現在はメール送信での応募のため Google の DirectApply 条件を満たさない。サイト内で応募が完結するフォーム（サーバー送信）を実装したうえで判断する。

### 将来 Indexing API を使う場合

Indexing API は **求人ページ（JobPosting）とライブ配信ページのみ**が対象。通常ページには使わない。
求人内容を頻繁に更新する運用になった場合に限り、以下の構成を検討する。

- Google Cloud でサービスアカウントを作成し、Indexing API を有効化
- Search Console でそのサービスアカウントを対象プロパティの所有者として追加
- `/recruit` の内容を更新するデプロイ時に `URL_UPDATED` 通知を送る仕組みを追加
- 募集終了時は `URL_DELETED` を送る

現時点では未実装。通常の sitemap 送信で十分。

---

## 8. sitemap / robots

- `app/sitemap.ts` — `lib/` のデータ配列から自動生成。サービス詳細・コラムを追加すれば自動で載る。
- `app/robots.ts` — 全ページクロール許可、`Sitemap:` 行あり。

### sitemap に含まれるURL（25件）

```
/
/service
/service/sakan
/service/doma-concrete
/service/concrete-placement
/service/screeding-finishing
/area/itabashi
/recruit
/partner
/strength
/company
/contact
/column
/column/sakan-toha
/column/doma-concrete-toha
/column/dasetsu-kara-shiage
/column/narashi-sagyo-toha
/column/osae-sagyo-toha
/column/kanagote-shiage
/column/doma-concrete-hibiware
/column/concrete-yojo
/column/kojo-soko-doma
/column/chushajo-doma-nagare
/column/sakan-shokunin-shigoto
/column/mikeiken-sakan
```

`/works` と `/works/[slug]` は実績データが空のため**含まれない**（`lib/works.ts` の `HAS_WORKS` で自動制御）。

### lastModified の更新

`app/sitemap.ts` 冒頭の `UPDATED` 定数が静的ページの更新日。
コラムは `lib/columns.ts` の `dateModified` を参照する。**記事を書き換えたら `dateModified` も更新すること。**

---

## 9. Search Console で人間側が行う作業

コード側では完結しないため、デプロイ後に以下を実施する。

1. **プロパティの登録**
   `https://www.maruyoshi-official.com/` をプロパティとして登録する。
   ドメインプロパティ（DNS認証）で登録すると www / non-www をまとめて扱えるため推奨。
2. **所有権確認**
   HTMLタグ方式を使う場合のみ、Search Console が発行したコードを環境変数
   `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` に設定して再デプロイする。
   **コードはこちらで生成できないため、必ず Search Console から取得すること。**
3. **サイトマップ送信**
   「サイトマップ」から `sitemap.xml` を送信する。
4. **URL検査 → インデックス登録をリクエスト**
   優先順に実施する。
   - `/`
   - `/service/sakan`
   - `/service/doma-concrete`
   - `/service/concrete-placement`
   - `/service/screeding-finishing`
   - `/area/itabashi`
   - `/recruit`
   - `/partner`
   - `/column` および主要記事
5. **リッチリザルト確認**
   - リッチリザルトテストで `/recruit` の JobPosting を検証
   - Search Console の「求人情報」レポートでエラーがないか確認
   - パンくず・FAQ のレポートも確認
6. **旧URLの確認**
   non-www でインデックスされていたURLが www へ 308 で転送されているか、URL検査で確認する。
7. **Googleビジネスプロフィール（MEO）**
   コード側では対応できない。板橋区徳丸の所在地で登録し、サイトのNAPと完全一致させる。
   カテゴリは「左官工事業」「コンクリート工事業」などを設定する。

---

## 10. 今後追加すべき施工実績

`lib/works.ts` の `WORKS` 配列に追加する。**架空の事例は絶対に作らないこと。**
配列が空の間 `/works` は noindex かつサイトマップ対象外で、フッター導線にも出ない。
データを1件でも追加すると、自動的にインデックス対象・導線表示に切り替わる。

登録に必要な情報：

- 施工エリア（例：東京都板橋区）
- 施工種別（`ServiceSlug` のいずれか）
- 建物種別（マンション / 物流倉庫 / 戸建住宅 など）
- 工事内容の概要
- 施工面積・工期（確認できる場合のみ）
- 施工上のポイント
- 施工写真（`public/images/works/` に配置。ファイル名は内容がわかるもの）
- 写真の alt（**キーワード列挙は禁止**。「土間コンクリートを金鏝で押えている施工中の様子」のように内容を説明する）
- 担当者コメント（任意）

優先して揃えたい事例：

1. 板橋区内の土間コンクリート工事（駐車場または倉庫）
2. 工場・物流倉庫の床（金鏝仕上げ）
3. マンション共用部の左官工事
4. 戸建住宅のガレージ土間
5. 改修工事での既存土間の打ち替え

---

## 11. 今後追加すべきコラム

既存12記事のクラスターを補強する方向で追加する。**順位目的の薄い記事を量産しない。**

候補：

- 刷毛引き仕上げとは？金鏝仕上げとの使い分け
- 土間コンクリートの目地はなぜ必要か
- ワイヤーメッシュと鉄筋の違い・配置位置
- 冬場のコンクリート工事で注意すること
- 雨天時のコンクリート打設はどう判断するか
- 土間コンクリートの厚みはどう決まるか
- コンクリート土間の表面が粉を吹く原因と対策
- 左官技能士とは？資格の内容と受検の流れ

記事を追加したら：

1. `lib/columns.ts` の `COLUMNS` に追加（`slug` は英小文字ハイフン区切り）
2. 関連サービス・関連コラムの `relatedServices` / `relatedColumns` を双方向に設定する
3. サイトマップは自動反映されるので作業不要

---

## 12. SEO 運用時の注意事項

### やってはいけないこと

- **キーワードの詰め込み。** フッターのキーワード一覧、ティッカーでの反復列挙は今回すべて削除済み。復活させない。
- **meta keywords の設定。** Google は使用しておらず、現在は全ページで未設定。追加しない。
- **薄いページの量産。** 特に「東京23区それぞれの地域ページ」のような実体のない量産は禁止。地域ページは実際に拠点がある `/area/itabashi` のみとする。
- **事実の捏造。** 施工実績件数、創業年数、施工精度の具体的数値、事故実績、口コミ、受賞歴。今回「水平精度±2mm以内」という根拠不明の記載を削除している。
- **同一文章の使い回し。** サービス詳細ページ・コラムはすべて固有の文章で構成している。

### 新しいページを追加するときのチェックリスト

- [ ] `title` に社名を含めていない（template が自動付与する）
- [ ] `description` が他ページと重複していない
- [ ] `alternates.canonical` を設定した
- [ ] H1 がページの主題として1つだけある
- [ ] H2 / H3 の階層が論理的（見た目のための見出しタグを使っていない）
- [ ] パンくず（`Breadcrumbs`）を設置した
- [ ] OGP の `title` / `description` / `url` / `images` を設定した
- [ ] 本文が初期HTMLに含まれている（`useEffect` 後にしか表示されない重要テキストがない）
- [ ] 画像に内容を説明する alt がある
- [ ] 関連ページへの内部リンクがあり、アンカーテキストでリンク先がわかる
- [ ] `npm run build` がエラー0で通る

### 内部リンクの方針

アンカーテキストは「詳しくはこちら」ではなく、リンク先が分かる自然な日本語にする。

良い例：「板橋区の土間コンクリート工事を見る」「コンクリートの押え作業とは？」
避ける例：「詳しくはこちら」「板橋区 左官工事 土間コンクリート 東京」

設計している導線：

```
トップ → 事業内容 → サービス詳細 → 関連コラム → お問い合わせ
コラム → 関連サービス
サービス詳細 → 関連サービス / 関連コラム / 板橋区エリア / 協力会社募集
求人コラム → 求人ページ
地域ページ → 各サービス詳細 / 協力会社募集 / 求人
```

すべての重要ページはトップから3クリック以内で到達できる（フッターに全ページのリンクがあるため実質1クリック）。

### パフォーマンス

- アニメーションは `transform` / `opacity` のみを使用し、レイアウト計算を発生させない
- `prefers-reduced-motion: reduce` 指定時はアニメーションとスムーススクロールを無効化（`app/globals.css` / `SmoothScrollProvider`）
- 数値カウンターは **SSR時点で最終値を出力**し、JSは演出としてのみ動く（`components/ui/CountUpStat.tsx`）。0で取得される問題への対策なので、この方式を崩さないこと
- 新規ページはサーバーコンポーネントで作り、アニメーションが必要な箇所だけ `components/ui/Reveal.tsx` で包む
- 画像は `next/image` を使い、`sizes` を必ず指定する。LCP になる画像だけ `priority` を付ける

---

## 13. 未確認の会社情報（要確認）

以下はサイト上に記載があるが、事実確認が取れていない項目。
**内容が異なる場合は速やかに修正が必要。** 求人条件は JobPosting 構造化データにも反映されているため、
実態と違うと Google for Jobs 側で問題になる。

| 項目 | サイト上の記載 | 記載場所 |
| --- | --- | --- |
| 賞与 | 年2回 | `/recruit` 募集要項・福利厚生、JobPosting |
| 夏季休暇 | あり | `/recruit` 福利厚生・休日詳細 |
| 年末年始休暇 | あり | `/recruit` 福利厚生・休日詳細 |
| 資格取得支援 | あり | `/recruit` FAQ・入社後の流れ、`/strength` |
| 単身用社宅 | あり（要相談） | `/recruit`、JobPosting |
| 年間休日 | 128日 | `/`、`/recruit`、`/strength`、JobPosting |
| 月平均残業 | 10時間 | 同上 |
| 採用予定人数 | 10名 | `/`、`/strength`、JobPosting `totalJobOpenings` |
| 試用期間 | 3ヶ月 | `/`、`/recruit` |
| 月給 / 日給 | 197,000円〜 / 10,000円 | `/`、`/recruit`、JobPosting |
| 通勤手当 | 月20,000円まで | 同上 |
| 対応エリア | 埼玉県南部・神奈川県北部・千葉県西部 | `/company`、`/partner` |
| 返信目安 | 2営業日以内 | 各CTA |
| 電話受付曜日 | 月〜金（土日祝休み） | フッター・`/contact`・`/company`・`/area/itabashi`・LocalBusiness |

電話受付曜日は「土日祝休み・週休2日制」という求人ページの記載から推定して設定している。
**実際には土曜も電話を受けている場合は、`lib/site.ts` の `BUSINESS_HOURS.schemaDays` と
`daysDisplay` を修正すること。** 構造化データの営業時間が実態と違うと、
Google の検索結果に誤った営業時間が表示される。

### 確認済みの情報（2026-08-13 時点）

- 電話番号：080-1116-1864 — 反映済み
- 営業時間：基本 8:00〜17:00、イレギュラーあり — 反映済み（変動する旨も併記）
- **建設業許可：未取得** — サイト上に許可に関する記載は一切していない。
  取得した際は許可番号を会社概要に追加し、LocalBusiness の構造化データにも反映する。
  E-E-A-T（信頼性）の裏付けとして効果が大きい。

### 判明すれば追加を推奨する情報

- **加入している労災保険・社会保険の詳細** — 協力会社の判断材料になる
- **Googleビジネスプロフィールの登録** — 電話番号が用意できたため登録の要件が揃った。
  NAP（会社名・住所・電話番号）をサイトと完全一致させて登録する
