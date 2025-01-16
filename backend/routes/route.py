from fastapi import APIRouter
from models.model import MessageModel
from schemas.schema import SendMessage
from bson import ObjectId

router = APIRouter()

@router.get("/")
async def get_gpt():
    return {
        "status":"success",
        "name":"bot",
        "message":"Assalaamu Alaikum, Welcome to IslamicGPT."
    }

@router.post("/ask")
async def ask_gpt(data:MessageModel):
    result = SendMessage(data.dict())
    return result