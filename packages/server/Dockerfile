FROM nikolaik/python-nodejs:latest

RUN pip install --upgrade pop && \
    pip install --no-cache-dir scikit-learn numpy

WORKDIR /usr/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "src/index.js"]