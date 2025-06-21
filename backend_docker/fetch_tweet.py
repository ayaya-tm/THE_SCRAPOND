import os
import requests
import json

# 環境変数からトークンを取得
BEARER_TOKEN = os.getenv("BEARER_TOKEN")

if not BEARER_TOKEN:
    raise EnvironmentError("環境変数 BEARER_TOKEN が設定されていません")

# 認証ヘッダー
headers = {
    "Authorization": f"Bearer {BEARER_TOKEN}"
}

# 検索クエリ
query = "THE SECOND OR #THESECOND OR ザセカンド"
url = "https://api.twitter.com/2/tweets/search/recent"
params = {
    "query": f"({query}) lang:ja -is:retweet",
    "max_results": 100,
    "tweet.fields": "created_at,text"
}

# リクエスト送信
response = requests.get(url, headers=headers, params=params)

if response.status_code == 200:
    tweets = response.json().get("data", [])
    new_contents = [tweet["text"] for tweet in tweets]

    # 既存のtweets.jsonを読み込み（なければ空リスト）
    try:
        with open("./lib/tweets.json", "r", encoding="utf-8") as f:
            old_contents = json.load(f)
    except FileNotFoundError:
        old_contents = []

    # 新旧ツイートを合体
    combined = old_contents + new_contents

    # 重複削除（順序は保証されないがシンプルな方法）
    combined = list(set(combined))

    # ファイルに書き込み（上書き保存）
    with open("./lib/tweets.json", "w", encoding="utf-8") as f:
        json.dump(combined, f, ensure_ascii=False, indent=2)

    print(f"{len(new_contents)} 件の新規ツイートを追記しました。合計 {len(combined)} 件です。")
else:
    print("エラー:", response.status_code)
    print(response.text)
