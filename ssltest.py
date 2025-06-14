import requests

def fetch_url(url):
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36"
    }
    response = requests.get(url, headers=headers)
    
    print("✅ Success!")
    print(f"Status Code: {response.status_code}")
    print(f"Final URL: {response.url}")
    print("Headers:")
    print(dict(response.headers))

if __name__ == "__main__":
    target_url = "https://x.com/"  # ここにアクセスしたいURLを入れてね
    fetch_url(target_url)
