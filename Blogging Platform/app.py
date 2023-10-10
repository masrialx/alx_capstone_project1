from flask import Flask, render_template, request, redirect, url_for, flash
from flask_sqlalchemy import SQLAlchemy
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, BooleanField, FileField
from wtforms.validators import DataRequired, Email, EqualTo

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///your_database.db'
app.config['SECRET_KEY'] = 'your_secret_key'
db = SQLAlchemy(app)


class RegistrationForm(FlaskForm):
    username = StringField('Username', validators=[DataRequired()])
    email = StringField('Email', validators=[DataRequired(), Email()])
    password = PasswordField('Password', validators=[DataRequired()])
    confirm_password = PasswordField('Confirm Password', validators=[DataRequired(), EqualTo('password')])
    name = StringField('Name', validators=[DataRequired()])
    public_id = StringField('Public ID')
    admin = BooleanField('Admin')
    uemail = StringField('UEmail')
    profilepic = FileField('Profile Picture')

@app.route('/register', methods=['GET', 'POST'])
def register():
    form = RegistrationForm()
    
    if form.validate_on_submit():
        # Check if the username or email already exists in the database
        existing_user = User.query.filter_by(username=form.username.data).first()
        existing_email = User.query.filter_by(email=form.email.data).first()
        if existing_user or existing_email:
            flash('Username or email already exists. Please choose another.', 'danger')
            return redirect(url_for('register'))

        # Create a new user instance and save it to the database
        new_user = User(
            username=form.username.data,
            email=form.email.data,
            password=form.password.data,
            name=form.name.data,
            public_id=form.public_id.data,
            admin=form.admin.data,
            uemail=form.uemail.data,
            profilepic='path_to_profile_image'  # You should handle file uploads properly
        )
        db.session.add(new_user)
        db.session.commit()
        
        flash('Registration successful. You can now log in.', 'success')
        return redirect(url_for('login'))

    return render_template('register.html', form=form)

