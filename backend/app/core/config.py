from dotenv import load_dotenv
import os

load_dotenv()

class Settings:
    API_KEY = os.getenv("OPENWEATHER_API_KEY")
    DB_USER = os.getenv("ORACLE_USER")
    DB_PASS = os.getenv("ORACLE_PASS")
    DB_HOST = os.getenv("ORACLE_HOST", "localhost")
    DB_PORT = os.getenv("ORACLE_PORT", "1521")
    DB_SERVICE = os.getenv("ORACLE_SERVICE", "XEPDB1")

    @property
    def DATABASE_URL(self):
        return f"oracle+oracledb://{self.DB_USER}:{self.DB_PASS}@{self.DB_HOST}:{self.DB_PORT}/?service_name={self.DB_SERVICE}"

settings = Settings()
