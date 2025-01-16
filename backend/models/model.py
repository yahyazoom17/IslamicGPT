from pydantic import BaseModel

class MessageModel(BaseModel):
    id: int
    name: str
    message: str
