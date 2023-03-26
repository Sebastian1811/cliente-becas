from fastapi import FastAPI
from rec.exposeScripts import get_tfid_recommendations, getAllBecas
from bb.sum import sum 
from rec.beca import * 
import numpy as np
app = FastAPI()

@app.get('/')
def index():
    recs, ids = get_tfid_recommendations("Becas SRE – Universidad Autónoma de Coahuila (UAdeC)")
    print(recs.shape)
    print(type(recs))
    response = createBecas(recs,ids)
    return [beca.dict() for beca in response]

@app.get('/all')
def getAll():
    becas = getAllBecas()
    print(becas.shape)
    response = dumpAllBecas(becas)
    return [beca.dict() for beca in response]

@app.get('/beca/{id}')
def getBecaById(id:int):
    id = np.array([id-1])
    df = getAllBecas()
    recommend = df[['name','url','requirements']].iloc[id]
    print(type(recommend))
    response = dumpBeca(recommend,id)
    return response.dict()

def dumpAllBecas(df):
    becas = []
    count = 0
    for index, row in df.iterrows():
        name = row['name']
        url = row['url']
        requirements = row['requirements']
        beca = Beca(id=count, name=name, requirements=requirements,url=url)   
        becas.append(beca)
        count += 1
    return becas

def createBecas(df,ids):
    becas = []
    count = 0
    for index, row in df.iterrows():
        name = row['name']
        url = row['url']
        requirements = row['requirements']
        beca = Beca(id=ids[count], name=name, requirements=requirements,url=url)   
        becas.append(beca)
        count += 1
    return becas

def dumpBeca(df,id):
    print(df.shape)
    for index, row in df.iterrows():
        name = row['name']
        url = row['url']
        requirements = row['requirements']
    return Beca(id=id,name=name,requirements=requirements,url=url)