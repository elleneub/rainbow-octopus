####
# Seed Databases
from datetime import datetime
from faker import Faker
import random
from model import User, Address, Offer, Request
from server import app, configure_db, connect_to_db, db


faker = Faker()


def load_users(amount_to_generate):
    """ Use this function to generate users (integer representing the number
    of users is passed in to the function).  All of the data associated with a 
    user will be generated and inserted into the Users table.
    """
    print("Users")

    # Delete all rows in table, so if we need to run this a second time,
    # we won't be trying to add duplicate users
    User.query.delete()


    for i in range(amount_to_generate):
        # Generate fake User information.
        #faker = Faker()
        first_name = faker.first_name()
        print(f'first_name: {first_name}')
        last_name = faker.last_name()
        print(f'last_name: {last_name}')
        email = faker.email()
        print(f'email: {email}')
       
        phone_number=faker.phone_number()
        print(f'phonenum: {phone_number}')
        print(len(phone_number))

        created_on = faker.date()
        print(f'created_on: {created_on}')



        # insert generated User into ManageMyHoard db
        user = User(first_name=first_name,
                    last_name=last_name,
                    email=email,
                    created_on=datetime.today(),
                    modified_on=datetime.today(),
                    phone_number=phone_number)
        # Add the User object to the session so it will be stored.
        db.session.add(user)

    # Once we're done inserting all the users, commit the changes to the 
    # database
    db.session.commit()


def load_addresses(num_of_users):
    """ This function will generate ONE address for each of the users that were
    generated in load_users() - pass in the same number that you used to generate
    the users (i.e. num_of_users = num_to_gen)"""

    i = 0
    user_id = 0

    for i in range(num_of_users):
        user_id = user_id + 1
        print(f"user_id = {user_id}")
        
        street_1 = faker.street_address()
        street_2 = ""
        city = faker.city()
        zipcode = faker.postcode()
        # hard code USA for now 
        country = "United States"
        state = faker.state()
        print(f"street_1 = {street_1}")
        print(f"street_2 = {street_2}")
        print(f"city = {city}")
        print(f"state = {state}")
        print(f"country = {country}")
        print(f"zipcode = {zipcode}")

        address = Address(user_id=user_id,
                          street_1=street_1,
                          street_2=street_2,
                          city=city,
                          state=state,
                          country=country,
                          zipcode=zipcode                    
                          )
        i += 1

        # Add the User object to the session so it will be stored.
        db.session.add(address)

    # Once we're done inserting all the users, commit the changes to the 
    # database
    db.session.commit()


def load_requests_offers(num_of_users, num_requests):
        """ Function to load requests into the DB: arbitrary first half are 
        requesters, second half are volunteers"""
        print(f"num of users {num_of_users}")
        requesters = round(num_of_users / 2)
        volunteers = num_of_users - requesters
        print("**** CREATING REQUESTS ****")
        print(f"Requesters = {requesters}")
        print(f"Volunteers = {volunteers}")
        boolean_choice = [True,False]

        i = 0
        requester_id = 0
        volunteer_id = num_of_users
        # volunteer_index = num_of_users
        # print(f"volunteer index {volunteer_index}")
        for i in range(requesters):
            requester_id = requester_id + 1
            volunteer_id = volunteer_id -1
            print(f"Requester: {requester_id} Volunteer: {volunteer_id}")

            notes = faker.text()
            print(f"Notes: {notes}")

            fulfilled = random.choice(boolean_choice)
            print(f"fulfilled = {fulfilled}")

            created_on = faker.date()
            print(f"created_on: {created_on}")

            modified_on = created_on
            #service is being requested by the requester - which because
            # of the way we are seeding the database - the requester's address id
            # is the same as their id.
            service_needed_at = requester_id
            

            request = Request(requester_user_id=requester_id,
                              volunteer_user_id=volunteer_id,
                              notes=notes,
                              fulfilled=fulfilled,
                              created_on=created_on,
                              modified_on=modified_on,
                              service_needed_at=service_needed_at)
            print(request)
            i += 1
            # volunteer_index -+ 1

            # Add the User object to the session so it will be stored.
            db.session.add(request)

        # Once we're done inserting all the users, commit the changes to the 
        # database
        db.session.commit()

        print("**** CREATING VOLUNTEER OFFERS***")
        j = requesters
        print("######## j = ", j)
        offerer_uid = requesters
        for j in range(num_of_users):
            print("######## j = ", j)
            # create a volunteer offer for each of the second half of the users 
            # created with load_users(amount_to_generate)
            if offerer_uid != num_of_users:
                offerer_uid = offerer_uid + 1
            expiration_date = faker.date_this_month()
            print(f"expiration_date: {expiration_date}")

            create_on = faker.date_between()
            print(f"create_on: {created_on} ")

            modified_on = create_on

            recurring = random.choice(boolean_choice)
            print(f"recurring: {recurring}")

            description = faker.text()
            print(f"description: {description}")

            offer = Offer(offerer_uid=offerer_uid,
                          expiration_date=expiration_date,
                          created_on=created_on,
                          modified_on=modified_on,
                          recurring=recurring,
                          description=description)
            j += 1

            # Add the User object to the session so it will be stored.
            db.session.add(offer)

            # Once we're done inserting all the users, commit the changes to the 
            # database
        db.session.commit()


def set_val_user_id():
    """Set value for the next user_id after seeding database"""

    # Get the Max user_id in the database
    result = db.session.query(func.max(User.user_id)).one()
    max_id = int(result[0])

    # Set the value for the next user_id to be max_id + 1
    query = "SELECT setval('users_user_id_seq', :new_id)"
    db.session.execute(query, {'new_id': max_id + 1})
    db.session.commit()


# def set_val_address_id():
#     """Set value for the next address_id after seeding database"""

#     # Get the Max user_id in the database
#     result = db.session.query(func.max(Address.address_id)).one()
#     max_id = int(result[0])

#     # Set the value for the next user_id to be max_id + 1
#     query = "SELECT setval('addresses_address_id_seq', :new_id)"
#     db.session.execute(query, {'new_id': max_id + 1})
#     db.session.commit()


if __name__ == "__main__":
    configure_db(app)
    connect_to_db(app)

    # In case tables haven't been created, create them
    db.create_all()
    num_to_gen = 9
    num_requests = 1
    load_users(num_to_gen)
    load_addresses(num_to_gen)
    load_requests_offers(num_to_gen, num_requests)

    
    # set_val_user_id()
    # set_val_address_id()
    # set_val_request_id()