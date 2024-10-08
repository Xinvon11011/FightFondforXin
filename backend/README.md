# RealXin Flask Backend

This is the backend server for the **RealXin Sparkling Generative App**. It processes requests related to AI-generated house floorplans, interacting with TensorFlow and ML5 models.

## Setup

### Requirements

- Python 3.10+
- Flask
- Gunicorn (for production)
- Other dependencies listed in `requirements.txt`

### How to Run Locally

1. Clone this repository.
2. Install dependencies: `pip install -r requirements.txt`
3. Run the Flask app: `python app.py`
4. Visit `http://127.0.0.1:5000/` in your browser to verify the backend is working.

### Deployment (Heroku)

1. Install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli).
2. Log in to Heroku: `heroku login`
3. Create a new Heroku app: `heroku create`
4. Deploy your app: `git push heroku main`
5. Scale your app: `heroku ps:scale web=1`

Once deployed, your backend will be live on Heroku.
