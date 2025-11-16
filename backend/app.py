import os
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)

# Configure CORS with specific origins for security
# For production, use HTTPS and set CORS_ORIGINS environment variable
# Example: CORS_ORIGINS=https://yourdomain.com,https://www.yourdomain.com
# For development, HTTP is acceptable on localhost
default_origins = 'http://localhost:3000,http://127.0.0.1:3000'  # NOSONAR - HTTP acceptable for localhost dev
allowed_origins = os.getenv('CORS_ORIGINS', default_origins).split(',')
CORS(app, origins=allowed_origins, supports_credentials=True)

@app.route("/api/hello")
def hello():
    return jsonify({"message": "Hello from Flask backend!"})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
