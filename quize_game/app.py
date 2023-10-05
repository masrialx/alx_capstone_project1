from flask import Flask,render_template
app = Flask(__name__)

@app.route('/')
@app.route('/home')
def home():
    return render_template('home.html')

@app.route('/catagory')
def catagory():
    return render_template('catagory.html')

@app.route('/contact')
def contact():
    return '<h1>this is contact </h1>'

@app.route('/quize')
def quize():
    return '<h1>this is quize </h1>'

@app.route('/signin')
def signin():
    return '<h1>this is signin </h1>'

@app.route('/signup')
def signup():
    return '<h1>this is signup </h1>'

if __name__=='__main__':
    app.run(debug=True)
