import os

class Config:
    SECRET_KEY = os.getenv("SECRET_KEY", "")  # Change this in production your secret key
    SESSION_TYPE = "filesystem"  # Session storage type
    DATABASE_NAME = "mentora.db"  # SQLite database
    GEMINI_API_KEY = os.getenv("GEMINI_API_KEY", "Your-gemini-api-key")  # Gemini API key

class DevelopmentConfig(Config):
    DEBUG = True  # Enable debugging

class ProductionConfig(Config):
    DEBUG = False  # Disable debugging





    
