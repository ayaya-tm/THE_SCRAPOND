# Node公式イメージを使用
FROM node:20-slim
WORKDIR /app
COPY ./frontend_docker/ . 
RUN npm install
# Viteサーバー起動（ホットリロード対応）
CMD ["npm", "run", "dev"]
