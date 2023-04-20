from .beca import Becas
from backend.recommendation_engine.exposeScripts import getBecasDataSet
import numpy as np

def findAllBecas():
    df = getBecasDataSet()
    becas = []
    count = 0
    for index, row in df.iterrows():
        name = row['name']
        url = row['url']
        requirements = row['requirements']
        study_level = row['study_level']
        beca = Becas(id=count, name=name, requirements=requirements,url=url,study_level=study_level)   
        becas.append(beca)
        count += 1
    return becas

def findRecommendedBecas(becas,ids):
    recommendedBecas = []
    count = 0
    for index, row in becas.iterrows():
        name = row['name']
        url = row['url']
        requirements = row['requirements']
        study_level = row['study_level']
        beca = Becas(id=ids[count], name=name, requirements=requirements,url=url,study_level=study_level)   
        recommendedBecas.append(beca)
        count += 1
    return recommendedBecas

def dumpBeca(beca,id):
    print(beca.shape)
    for index, row in beca.iterrows():
        name = row['name']
        url = row['url']
        requirements = row['requirements']
        study_level = row['study_level']
    return Becas(id=id,name=name,requirements=requirements,url=url,study_level=study_level)

def findBeca(id):
    df = getBecasDataSet()
    beca = df[['name','url','requirements','study_level']].iloc[id]
    return dumpBeca(beca,id)