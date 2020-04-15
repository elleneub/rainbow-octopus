from flask import Flask, jsonify, make_response, request
from model import User
from server import app, db

@app.route('/')
def test_route():
        
    return f"hello"

@app.route('/api/users')
def get_users():

    users = User.query.all()
    resp = make_response(jsonify([user.to_dict_for_json for user in users]), 
           200)
    return resp

@app.route('/api/user/<int:user_id>')
def get_user(user_id):

    user = User.query.get(user_id)
    resp = make_response(jsonify(user.to_dict_for_json), 200)
    return resp

if __name__ == "__main__":
    app.run(port=5000,host="0.0.0.0")
