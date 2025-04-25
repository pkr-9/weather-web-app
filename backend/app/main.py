from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from app.api.routes import router

app = FastAPI(title="Weather API")
origins = [
    "http://localhost:5173",
    # Add production URLs here later
]

# CORS configuration for frontend communication
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Replace with your frontend domain in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router, prefix="/api")
