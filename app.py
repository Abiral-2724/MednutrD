from langchain_groq import ChatGroq
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers  import StrOutputParser
from langchain_core.runnables import RunnablePassthrough
from flask import Flask, request, jsonify


prompt = ChatPromptTemplate.from_template(
    """
    You are Medibot, an AI Assistant with expertise in medical knowledge. You are required to provide 
    accurate, clear, and concise answers based on doctor recommendations, appropriate medications, 
    and general treatment steps for common medical concerns.

    **Capabilities:**
    - Recommending the type of doctor or specialist to consult for specific symptoms or conditions.
    - Suggesting over-the-counter (OTC) medications or general remedies when appropriate.
    - Providing general treatment steps for basic medical issues (e.g., wound care, headache management).
    
    **Examples of valid queries:**
    - What type of doctor should I see for a headache?
    - What medication should I take for a headache?
    - What are the general treatment steps for healing a basic wound?

    **Instruction:**
    1. Only answer questions directly related to doctor recommendations, medications, or general treatment steps.
    2. If the query is not related to the above topics or if it is outside the scope of general medical advice, politely inform the user: 
       "I am Medibot and can only assist with doctor recommendations, medication suggestions, or general treatment steps. For other queries, 
       please consult a medical professional or relevant medical facility."
    3. Avoid making definitive diagnoses or prescribing medications unless the context explicitly calls for OTC advice. 
       Always encourage users to seek professional medical consultation for serious or persistent conditions.
   4. you can add emoji to answer interactively.

    Question: {question}

    **Response**:
    """
)


# LLM Model
groq_api_key = 'ENTER GROQ API KEY here'
llm = ChatGroq(model='llama3-8b-8192', groq_api_key=groq_api_key)
llm


# Creating QA_CHAIN
qa_chain = (
    {"question" : RunnablePassthrough()}
    | prompt
    | llm
    | StrOutputParser()
)


# Initialize Flask app
app = Flask(__name__)

@app.route('/generate', methods=['POST'])
def generate_response():
    """API endpoint for streaming responses."""
    data = request.get_json()
    question = data.get('question', '')

    if not question:
        return jsonify({"error": "Question is required"}), 400

    response = qa_chain.invoke(question)

    return response


# Run the Flask app
def run_flask():
    app.run(port=5000, use_reloader=False, debug=True)

# run the flask app
run_flask()


'''
Instruction to run the FLASK app

FIRSTLY DOWNLOAD PYTHON VERSION - 3.11.9

1. Create a virtual environment by using this
    python -m venv myenv  # myenv is environment name

2. Activate the virtual environment by using this
    myenv\Scripts\activate    # then your environment is active

3. Download the requirements from requirements.txt file by using command 
    pip install -r requirements.txt  # TO INSTALL THE NECESSARY REQUIREMENTS

4. Run the Flask App
    python app.py   # After this your server is ready and running

5. For testing purpose, I have created this test.ipynb
    Run the only single cell present and try the responses yourself 

'''
