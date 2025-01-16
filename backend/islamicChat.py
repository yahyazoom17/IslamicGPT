from openai import OpenAI
from dotenv import load_dotenv
import os

load_dotenv()

API_KEY = os.getenv("OPENAI_API_KEY")
client = OpenAI(api_key=API_KEY)

id = 0

def askIslamGPT(message : dict):
  global id
  final_message = message["message"]
  try:
    if final_message:
      requirements = [
        {"role":"system", "content":"You are an islamic scholar who has read whole quran and all the authentic hadiths and knows everything about islam and Allah. You don't know about anything apart from Quran and Hadiths."},
      ]
      requirements.append(
        {"role":"user", "content":final_message}
      )
      completion = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=requirements
      )
      response = str(completion.choices[0].message.content)
      return {"status":"success", "id":id, "name":"bot", "message":response}
    else:
      return {"status":"success", "id":id, "name":"bot", "message":"Please enter a valid message!"}
  except Exception as error:
    print(error)
    return {"status":"failure", "id":id, "name":"bot", "message":"Sorry, something went wrong!"}
  finally:
    id += 1
