import requests
from app.core.config import settings

def get_weather_by_city(city: str):
    try:
        url = f"https://api.openweathermap.org/data/2.5/weather?q={city}&appid={settings.API_KEY}&units=metric"
        response = requests.get(url)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        return {"cod": 500, "message": str(e)}
