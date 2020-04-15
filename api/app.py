from flask import Flask, jsonify, make_response, request
from model import User, Request as App_Request, Offer
from server import app, db
from datetime import datetime


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
    
    requests = App_Request.query.all()
    offers = Offer.query.all()

    resp = make_response(jsonify(
                        {'requests': [app_request.to_dict_for_json for app_request in requests],
                         'offers': [offer.to_dict_for_json for offer in offers]
                        }))

    return resp


@app.route('/api/requests')
def get_requests():
    
    requests = App_Request.query.all()
    resp = make_response(jsonify([app_request.to_dict_for_json for app_request in requests]), 
           200)
    return resp


@app.route('/api/request/<int:request_id>')
def get_request(request_id):

    app_request = App_Request.query.get(request_id)
    resp = make_response(jsonify(app_request.to_dict_for_json), 200)
    return resp


@app.route('/api/request', methods=['POST'])
def create_update_request():

    content = request.get_json()
    request_id = content['request_id']
    requester_user_id = content['requester_user_id']
    volunteer_user_id = content['volunteer_user_id']
    notes = content['notes']
    fulfilled = content['fulfilled']

    # figure out address stuff later
    request_args = {
        'requester_user_id': requester_user_id,
        'volunteer_user_id': volunteer_user_id,
        'notes': notes,
        'fulfilled': fulfilled,
        'created_on': datetime.today(),
        'modified_on': datetime.today(),
        'active': True
    }

    if request_id is not None:
        request_args.request_id = request_id

    app_request = App_Request(**request_args)

    db.session.add(app_request)
    db.session.commit()

    resp = make_response(jsonify(
                        {'success': True, 
                         'request': app_request.to_dict_for_json
                        }), 200)

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


@app.route('/api/offer', methods=['POST'])
def create_update_offer():
    
    content = request.get_json()
    offer_id = content['offer_id']
    offerer_uid = content['offerer_user_id']
    expiration_date = content['expiration_date']
    recurring = content['recurring']
    description = content['description']

    offer_args = {
        'offerer_uid': offerer_uid,
        'created_on': datetime.today(),
        'modified_on': datetime.today(),
        'recurring': recurring,
        'description': description,
        'active': True
    }

    if offer_id is not None:
        offer_args['offer_id'] = offer_id
    if expiration_date is not None:
        offer_args['expiration_date'] = expiration_date

    offer = Offer(**offer_args)

    db.session.add(offer)
    db.session.commit()

    resp = make_response(jsonify(
                        {'success': True, 
                         'offer': offer.to_dict_for_json
                        }), 200)

    return resp


if __name__ == "__main__":
    app.run(port=5000,host="0.0.0.0")
