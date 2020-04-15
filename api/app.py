from flask import Flask, jsonify, make_response, request
from model import User, Request, Offer
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


@app.route('/api/opportunities')
def get_opportunities():
    """ get offers and requests """
    
    requests = Request.query.all()
    offers = Offer.query.all()

    resp = make_response(jsonify(
                        {'requests': [request.to_dict_for_json for request in requests],
                         'offers': [offer.to_dict_for_json for offer in offers]
                        }))

    return resp


@app.route('/api/requests')
def get_requests():
    
    requests = Request.query.all()
    resp = make_response(jsonify([request.to_dict_for_json for request in requests]), 
           200)
    return resp


@app.route('/api/request/<int:request_id>')
def get_request(request_id):

    request = Request.query.get(request_id)
    resp = make_response(jsonify(request.to_dict_for_json), 200)
    return resp


@app.route('/api/offers')
def get_offers():
    
    offers = Offer.query.all()
    resp = make_response(jsonify([offer.to_dict_for_json for offer in offers]), 
           200)
    return resp


@app.route('/api/offer/<int:offer_id>')
def get_offer(offer_id):

    offer = Offer.quer.get(offer_id)
    resp = make_response(jsonify(offer.to_dict_for_json), 200)
    return resp


if __name__ == "__main__":
    app.run(port=5000,host="0.0.0.0")
