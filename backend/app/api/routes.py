from fastapi import APIRouter, Depends, HTTPException
from app.services.weather_service import get_weather_by_city
from app.services.history_service import save_weather_history
from app.models.weather_model import WeatherResponse
from app.db.database import SessionLocal
from sqlalchemy.orm import Session
from fastapi.responses import JSONResponse
from typing import List
from app.db.models import WeatherHistory

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/weather/{city}", response_model=WeatherResponse)
def fetch_weather(city: str, db: Session = Depends(get_db)):
    weather = get_weather_by_city(city)
    if weather.get("cod") != 200:
        raise HTTPException(status_code=404, detail=weather.get("message", "City not found"))

    try:
        temp = weather.get("main", {}).get("temp")
        desc = weather.get("weather", [{}])[0].get("description")

        if temp is None or desc is None:
            raise HTTPException(status_code=422, detail="Incomplete weather data")

        save_weather_history(
            db=db,
            city=weather["name"],
            temp=temp,
            desc=desc
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

    return weather


@router.get("/history")
def get_weather_history(db: Session = Depends(get_db)):
    records = db.query(WeatherHistory).order_by(WeatherHistory.timestamp.desc()).all()
    return JSONResponse(content=[{
        "id": r.id,
        "city": r.city,
        "temperature": r.temperature,
        "description": r.description,
        "timestamp": r.timestamp.isoformat()
    } for r in records])