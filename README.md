# devops-flask-react
devops learn

## Project Structure

- `backend/` - Flask backend application
- `frontend/` - React frontend application
  - `src/` - Source code and test files (test files are in `src/` following Jest conventions)
  - `tests/` - Empty folder kept for SonarQube compatibility

## SonarQube Configuration

SonarQube configuration is in `sonar-project.properties`. Test files are located in:
- Frontend: `frontend/src/*.test.js`
- Backend: `backend/tests/*.py`

The `frontend/tests/` folder is kept empty for SonarQube compatibility.
