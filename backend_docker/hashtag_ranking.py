import json
import re
from collections import Counter

# ツイートの読み込み
with open("../tweets.json", "r", encoding="utf-8") as f:
    tweets = json.load(f)

all_hashtags = []

# ハッシュタグ抽出関数
def extract_hashtags(text):
    # #以降、空白または#までをハッシュタグとする
    hashtags = re.findall(r'#([^\s#]+)', text)
    return hashtags

for tweet in tweets:
    all_hashtags.extend(extract_hashtags(tweet))

# 出現頻度をカウント
counter = Counter(all_hashtags)
ranking = counter.most_common(50)  # 上位50件を取得

# 結果を保存（リストのタプル形式で保持）
with open("../frontend/public/hashtag_ranking.json", "w", encoding="utf-8") as f:
    json.dump(ranking, f, ensure_ascii=False, indent=2)

print("📊 ハッシュタグランキングを hashtag_ranking.json に保存しました！")
