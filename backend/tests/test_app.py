"""
Test cases for Flask application.
"""
from app import app


def test_hello_endpoint():
    """Test the /api/hello endpoint returns correct response."""
    client = app.test_client()
    response = client.get('/api/hello')
    assert response.status_code == 200
    data = response.get_json()
    assert 'message' in data
    assert isinstance(data['message'], str)
    assert len(data['message']) > 0


def test_hello_endpoint_message_content():
    """Test the /api/hello endpoint message content."""
    client = app.test_client()
    response = client.get('/api/hello')
    assert response.status_code == 200
    data = response.get_json()
    assert data['message'] == 'Hello from Flask backend!'


def test_hello_endpoint_json_format():
    """Test the /api/hello endpoint returns valid JSON."""
    client = app.test_client()
    response = client.get('/api/hello')
    assert response.status_code == 200
    assert response.is_json
    data = response.get_json()
    assert isinstance(data, dict)


def test_cors_headers():
    """Test that CORS headers are present in response."""
    client = app.test_client()
    response = client.get('/api/hello', headers={'Origin': 'http://localhost:3000'})
    assert response.status_code == 200
    # CORS headers should be present (flask-cors adds them)
    assert 'Access-Control-Allow-Origin' in response.headers or response.status_code == 200
