from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash

db = SQLAlchemy()

##############################################################################
# Model definitions



class User(db.Model):
    """User Rainbow-Octopus Volunteer App"""

    __tablename__ = "users"

    user_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    email = db.Column(db.String(64), nullable=False)
    password = db.Column(db.String, nullable=False)
    first_name = db.Column(db.String(50), nullable = False)
    last_name = db.Column(db.String(50), nullable = False)
    # python datetime is 26 chars long when converted to a string - thus 26
    created_on = db.Column(db.String(26), nullable = False)
    # malicious = db.Column(db.Boolean, default="f", nullable = True)
    # need an active field to mark if a user is active or not
    # active = db.Column(db.Boolean)
    phone_number = db.Column(db.String(20), nullable = False)
  
    addresses = db.relationship("Address", backref=db.backref("addresses", 
                                order_by=user_id))
    # requests = db.relationship("Request", backref=db.backref("requests",
    #                            order_by=user_id))
    # offers = db.relationship("Offer", backref=db.backref("offers",
    #                           order_by=user_id))


    def __repr__(self):
        return f"""<User user_id={self.user_id}
                   email={self.email}
                   password={self.password}
                   first_name={self.name}
                   last_name={self.name}>"""


class Address(db.Model):
    __tablename__ = "addresses"

    # I used the field lengths given for these type of fields in the 
    # api documentation for "smartystreets.com" us-street-api

    address_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.user_id"))
    street_1 = db.Column(db.String(50), nullable=False)
    street_2 = db.Column(db.String(50), nullable=True)
    city =  db.Column(db.String(64), nullable=False)
    state = db.Column(db.String(32), nullable=False)
    country = db.Column(db.String(50), nullable=False)
    zipcode = db.Column(db.String(16), nullable=False)

    def __repr__(self):
        return f"""<Address address_id={self.user_id}
                   user_id={self.user_id}
                   street_1={self.street_1}
                   street_2={self.street_2}
                   city={self.city}
                   state={self.state}
                   country={self.country}
                   zipcode={self.zipcode}>"""


# class Offer(db.Model):
#     __tablename__ = "offers"

#     offer_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
#     offerer_uid = db.Column(db.Integer, db.ForeignKey("users.user_id"))
#     # python datetime is 26 chars long when converted to a string - thus 26
#     expiration_date = db.Column(db.String(26), nullable=False)
#     modified_on = db.Column(db.String(26), nullable=False)
#     recurring = db.Column(db.Boolean)
#     notes = db.Column(db.String(1000), nullable=True)

#     def __repr__(self):
#         return f"""<Offer offer_id={self.offer_id}
#                    offerer_uid={self.offerer_uid}
#                    expiration_date={self.expiration_date}
#                    modified_on={self.modified_on}
#                    recurring={self.recurring}
#                    notes={self.notes}>"""

# class Offer_Requested(db.Model):
#     __tablename__ = "offer_requested"

#     # setting offreq_id as primary key for simplicty purposes (rather than 
#     # making it a composite primary of offer_requested_id and requester_user_id)

#     offer_requested_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
#     requester_user_id = db.Column(db.Integer, db.ForeignKey("users.user_id"))
#     # python datetime is 26 chars long when converted to a string - thus 26
#     date_requested = db.Column(db.String(26), nullable=False)

#     def __repr__(self):
#         return f"""<Offer Requested  offer_requested_id={self.offer_requested_id}
#                    requester_user_id={self.requester_user_id}
#                    date_requested={self.date_requester}>"""



# class Request(db.Model):
#     __tablename__ = "requests"

#     request_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
#     requester_user_id = db.Column(db.Integer, db.ForeignKey("users.user_id"))
#     volunteer_user_id = db.Column(db.Integer, db.ForeignKey("users.user_id"))
#     notes = db.Column(db.String(1000), nullable=True)
#     fulfilled = db.Column(db.Boolean)
#     active = db.Column(db.Boolean)
#     # python datetime is 26 chars long when converted to a string - thus 26
#     created_on = db.Column(db.String(26), nullable=False)
#     service_needed_at = db.Column(db.Integer, db.ForeignKey("addresses.address_id"))

#     def __repr__(self):
#         return f"""<Request request_id={self.request_id}
#                     requester_user_id={self.requester_user_id}
#                     volunteer_user_id={self.volunteer_user_id}
#                     notes={self.notes}
#                     fulfilled={self.fulfilled}
#                     active={self.active}
#                     created_on={self.created_on}
#                     service_needed_at={self.service_needed_at}>"""







##############################################################################
# Helper functions

def connect_to_db(app):
    """Connect the database to our Flask app."""

    # Configure to use our PstgreSQL database
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///rainbow_octopus'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    db.app = app
    db.init_app(app)


if __name__ == "__main__":
    # As a convenience, if we run this module interactively, it will leave
    # you in a state of being able to work with the database directly.

    from server import app
    connect_to_db(app)
    print("Connected to DB.")


