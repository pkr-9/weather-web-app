from pydantic import BaseModel
from typing import List, Dict, Any, Optional

class WeatherMain(BaseModel):
    temp: Optional[float]

class WeatherDescription(BaseModel):
    description: Optional[str]

class WeatherResponse(BaseModel):
    name: str
    main: Optional[WeatherMain]
    weather: List[WeatherDescription]