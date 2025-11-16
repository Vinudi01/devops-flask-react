# Gunakan versi python 3.10 yang lebih spesifik
FROM python:3.10-slim

# Tentukan direktori kerja di dalam container
WORKDIR /app

# Salin hanya file yang dibutuhkan untuk instalasi dependencies
COPY requirements.txt .

# Instal dependensi dari requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Salin file yang dibutuhkan saja (gunakan .dockerignore untuk mengecualikan file yang tidak perlu)
COPY app.py .

# Expose port 5000 (pastikan aplikasi Flask berjalan di port ini)
EXPOSE 5000

# Jalankan aplikasi Flask dengan python
CMD ["python", "app.py"]
