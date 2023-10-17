from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return 'Welcome to the Tattoo Studio!'

if __name__ == '__main__':
    # Runs the application on the development server
    app.run(host='0.0.0.0', port=80, debug=True)  # Running on host '0.0.0.0' allows access from any IP address, using port 80 as set in your Docker configuration
