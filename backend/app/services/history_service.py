from sqlalchemy.orm import Session
from app.db.models import WeatherHistory

def save_weather_history(db: Session, city: str, temp: float, desc: str):
    record = WeatherHistory(city=city, temperature=temp, description=desc)
    db.add(record)
    db.commit()
    db.refresh(record)
    return record
