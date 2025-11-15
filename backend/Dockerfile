FROM python:3.10-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
EXPOSE 5000
CMD ["python", "app.py"]

# Default command: run tests with coverage
CMD ["pytest", "--cov=.", "--cov-report=xml"]
