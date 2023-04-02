from fastapi import FastAPI
from .routes.beca import beca

app = FastAPI()

app.include_router(beca)
@app.get('/')
def index():
    return {}