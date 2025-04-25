from sqlalchemy import Column, Integer, String, DateTime, Float
from datetime import datetime
from app.db.database import Base

class WeatherHistory(Base):
    __tablename__ = "weather_history"

    id = Column(Integer, primary_key=True, index=True)
    city = Column(String(50), nullable=False)
    temperature = Column(Float, nullable=False)
    description = Column(String(100), nullable=False)
    timestamp = Column(DateTime, default=datetime.utcnow)
