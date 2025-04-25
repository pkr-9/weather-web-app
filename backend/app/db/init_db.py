from app.db.database import Base, engine
from app.db.models import WeatherHistory

def create_tables():
    Base.metadata.create_all(bind=engine)

if __name__ == "__main__":
    create_tables()
