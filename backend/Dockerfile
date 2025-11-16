# Gunakan image Python 3.10
FROM python:3.10-slim

# Tentukan direktori kerja di dalam container
WORKDIR /app

# Salin requirements.txt untuk install dependencies
COPY requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Salin kode aplikasi backend
COPY . .

# Expose port Flask (5000)
EXPOSE 5000

# Untuk menjalankan tes (optional, hanya jika ingin melakukan testing di dalam container)
# CMD ["pytest", "--cov=app", "--cov-report=lcov", "--cov-report=xml"]

# Jalankan aplikasi Flask
CMD ["python", "app.py"]
