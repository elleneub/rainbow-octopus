from server import db, configure_db, connect_to_db
from werkzeug.security import generate_password_hash, check_password_hash

##############################################################################
# Model definitions


class User(db.Model):
    """ Data model for a user. """

    __tablename__ = "users"

    user_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    email = db.Column(db.String(64), nullable=False)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    created_on = db.Column(db.DateTime, nullable=False)
    modified_on = db.Column(db.DateTime, nullable=False)
    # need an active field to mark if a user is active or not
    active = db.Column(db.Boolean, nullable=False, default=True)
    phone_number = db.Column(db.String(60), nullable=False)
    twitter_handle = db.Column(db.String(100), nullable=True)
    facebook_handle = db.Column(db.String(100), nullable=True)

  
    addresses = db.relationship("Address", backref=db.backref("addresses", 
                                order_by=user_id))

    payment_option = db.relationship("Payment_Option", 
                                    backref=db.backref("user_payment_options"))

    # requests = db.relationship("Request", backref=db.backref("requests",
    #                            order_by=user_id))
    # offers = db.relationship("Offer", backref=db.backref("offers",
    #                           order_by=user_id))


    def __repr__(self):
        return f"""<User user_id={self.user_id}
                   email={self.email}
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


class Payment_Option(db.Model):
    __tablename__ = "user_payment_options"

    payment_option_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.user_id"))
    cash = db.Column(db.Boolean, nullable=False, default=False)
    venmo = db.Column(db.Boolean, nullable=False, default=False)
    paypal =  db.Column(db.Boolean, nullable=False, default=False)
    stripe = db.Column(db.Boolean, nullable=False, default=False)
    barter = db.Column(db.Boolean, nullable=False, default=False)
    other = db.Column(db.String(50), nullable=True)

    def __repr__(self):
        return f"""<Payment_Option payment_option_id={self.payment_option_id}
                user_id={self.user_id}"""


class Category(db.Model):
    __tablename__ = "categories"

    category_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(150), nullable=True)

    def __repr__(self):
        return f"""<Category name={self.name}"""



class Offer(db.Model):
    __tablename__ = "offers"

    offer_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    offerer_uid = db.Column(db.Integer, db.ForeignKey("users.user_id"))
    expiration_date = db.Column(db.DateTime, nullable=True)
    created_on = db.Column(db.DateTime, nullable=False)
    modified_on = db.Column(db.DateTime, nullable=False)
    recurring = db.Column(db.Boolean, nullable=False, default=False)
    description = db.Column(db.String(1000), nullable=True)

    offers_requested = db.relationship("Offer_Requested", 
                                        backref=db.backref("offers"))

    def __repr__(self):
        return f"""<Offer offer_id={self.offer_id}
                   offerer_uid={self.offerer_uid}
                   expiration_date={self.expiration_date}
                   modified_on={self.modified_on}
                   recurring={self.recurring}"""


class Offer_Requested(db.Model):
    __tablename__ = "offers_requested"

    offer_requested_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    requester_user_id = db.Column(db.Integer, db.ForeignKey("users.user_id"))
    offer_id = db.Column(db.Integer, db.ForeignKey("offers.offer_id"))
    date_requested = db.Column(db.DateTime, nullable=False)

    def __repr__(self):
        return f"""<Offer Requested offer_requested_id={self.offer_requested_id}
                   requester_user_id={self.requester_user_id}
                   date_requested={self.date_requester}>"""



class Request(db.Model):
    __tablename__ = "requests"

    request_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    requester_user_id = db.Column(db.Integer, db.ForeignKey("users.user_id"))
    volunteer_user_id = db.Column(db.Integer, db.ForeignKey("users.user_id"),
                                  nullable=True)
    notes = db.Column(db.String(1000), nullable=True)
    fulfilled = db.Column(db.Boolean, nullable=False, default=False)
    active = db.Column(db.Boolean, nullable=False, default=True)
    created_on = db.Column(db.DateTime, nullable=False)
    modified_on = db.Column(db.DateTime, nullable=False)
    service_needed_at = db.Column(db.Integer, db.ForeignKey("addresses.address_id"))

    def __repr__(self):
        return f"""<Request request_id={self.request_id}
                    requester_user_id={self.requester_user_id}
                    volunteer_user_id={self.volunteer_user_id}
                    notes={self.notes}
                    fulfilled={self.fulfilled}
                    active={self.active}
                    created_on={self.created_on}
                    service_needed_at={self.service_needed_at}>"""


class Request_Category(db.Model):
    __tablename__ = "request_categories"

    request_category_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    category_id = db.Column(db.Integer, db.ForeignKey("categories.category_id"))
    request_id = db.Column(db.Integer, db.ForeignKey("requests.request_id"))

    def __repr__(self):
        return f"""<Request_Category 
                    request_category_id={self.request_category_id}"""

class Offer_Category(db.Model):
    __tablename__ = "offer_categories"

    offer_category_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    category_id = db.Column(db.Integer, db.ForeignKey("categories.category_id"))
    offer_id = db.Column(db.Integer, db.ForeignKey("offers.offer_id"))


    def __repr__(self):
        return f"""<Offer_Category 
                    offer_category_id={self.offer_category_id}"""





##############################################################################
# Helper functions


if __name__ == "__main__":
    # As a convenience, if we run this module interactively, it will leave
    # you in a state of being able to work with the database directly.

    from server import app
    configure_db(app)
    connect_to_db(app)
    print("Connected to DB.")
