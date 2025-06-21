FROM python:3.11-slim
WORKDIR /app
COPY dockerfiles/backend/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY backend_docker/ .
CMD ["python", "generate_ranking.py"]
#CMD ["python", "fetch_tweet.py", "&&", "python", "generate_ranking.py"]
