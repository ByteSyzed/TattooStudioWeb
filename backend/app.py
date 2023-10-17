from flask import Flask, render_template

app = Flask(__name__, static_folder='../tattoo-frontend/build/static', template_folder='../tattoo-frontend/build')

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    # Runs the application on the development server
    app.run(host='0.0.0.0', port=80, debug=True)  # Running on host '0.0.0.0' allows access from any IP address, using port 80 as set in your Docker configuration
