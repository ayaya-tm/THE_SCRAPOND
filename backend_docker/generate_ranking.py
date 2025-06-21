import json
from janome.tokenizer import Tokenizer
from collections import Counter

# ツイートの読み込み
with open("./tweets.json", "r", encoding="utf-8") as f:
    tweets = json.load(f)

# 形態素解析器の準備
tokenizer = Tokenizer()

words = []
stopwords = set([
    "ザセカンド", "the", "second", "ある", "さん", "する", "を", "に", "で", "と", "も",
    "です", "ます", "だ", "THE", "SECOND", "://", "com", "co", "//", "https"
])

for tweet in tweets:
    tokens = tokenizer.tokenize(tweet)
    for token in tokens:
        pos = token.part_of_speech.split(',')[0]
        if pos == "名詞":
            word = token.surface
        elif pos in ["動詞", "形容詞"]:
            word = token.base_form
        else:
            word = None

        if word:
            if (
                len(word) >= 2 and
                word not in stopwords and
                not word.isdigit()  # ✅ 数字のみは除外
            ):
                words.append(word)

# 頻出単語ランキング
counter = Counter(words)
ranking = counter.most_common(50)  # 上位50単語を取得

# 結果を保存
with open("./lib/word_ranking.json", "w", encoding="utf-8") as f:
    json.dump(ranking, f, ensure_ascii=False, indent=2)

print("📊 ランキングを word_ranking.json に保存しました！")
