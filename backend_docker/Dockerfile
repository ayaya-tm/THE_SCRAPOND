FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
CMD ["python", "generate_ranking.py"]
# CMD ["sh", "-c", "pip list > /app/pip_list.txt && echo \"$BEARER_TOKEN\" >> /app/pip_list.txt && cat /app/pip_list.txt"]
