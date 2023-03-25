from fastapi import FastAPI
from exposeScripts import get_tfid_recommendations



app = FastAPI()

@app.get('/')
def index():
    get_tfid_recommendations("Becas SRE – Universidad Autónoma de Coahuila (UAdeC)")
   
    return {"saludo":"adioss"}