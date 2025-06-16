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

# 結果保存
if response.status_code == 200:
    tweets = response.json().get("data", [])
    contents = [tweet["text"] for tweet in tweets]

    with open("./../tweets.json", "w", encoding="utf-8") as f:
        json.dump(contents, f, ensure_ascii=False, indent=2)

    print(f"{len(contents)} 件のツイートを保存しました。")
else:
    print("エラー:", response.status_code)
    print(response.text)
