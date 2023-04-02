from fastapi import APIRouter
from backend.models import utility
from backend.recommendation_engine.exposeScripts import get_cosine_similarity_recommendations
import numpy as np

beca = APIRouter()

@beca.get('/dummie/recommendations')
def dummie():
    recs, ids = get_cosine_similarity_recommendations("Becas SRE – Universidad Autónoma de Coahuila (UAdeC)")
    response = utility.findRecommendedBecas(recs,ids)
    return [beca.dict() for beca in response]

@beca.get('/beca/all')
def getAllBecas():
    response = utility.findAllBecas()
    return [beca.dict() for beca in response]

@beca.get('/beca/{id}')
def getBecaById(id:int):
    id = np.array([id-1])
    response = utility.findBeca(id)
    return response.dict()

@beca.get('/recommend/{becaName}')
def recommendBecaByName(becaName:str):
    recommendations, ids = get_cosine_similarity_recommendations(becaName)
    response = utility.findRecommendedBecas(recommendations,ids)
    return [beca.dict() for beca in response]

@beca.get('/recommends/{becaId}')
def recommendBecaById(becaId:int):
    print(type(becaId))
    becaId = np.array([becaId-1])
    beca = utility.findBeca(becaId)
    recommendations,ids = get_cosine_similarity_recommendations(beca.name)
    response = utility.findRecommendedBecas(recommendations,ids)
    return [beca.dict() for beca in response]