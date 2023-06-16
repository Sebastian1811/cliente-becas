from pydantic import BaseModel

class Becas(BaseModel):
    id: int
    name: str
    requirements: str
    url: str
    study_level: str
    country_host: str