import backend.recommendation_engine.w2v as w2v

def get_cosine_similarity_recommendations(beca_name):
    recommendations,ids = w2v.recommendations(beca_name) 
    return recommendations,ids

def getBecasDataSet():
    return w2v.df