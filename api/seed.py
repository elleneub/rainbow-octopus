####
# Seed Databases

from faker import Faker
from sqlalchemy import func
from model import User, Address
# , Offer, Request, Offer_Requested
from model import connect_to_db, db
from server import app

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

    i =0
    user_id = 0
    for i in range(amount_to_generate):
        # Generate fake User information.
        faker = Faker()
        user_id = user_id + 1
        print(f'user_id: {user_id}')
        first_name = faker.first_name()
        print(f'first_name: {first_name}')
        last_name = faker.last_name()
        print(f'last_name: {last_name}')
        email = faker.email()
        print(f'email: {email}')
        password = faker.password(length=10, special_chars=True, digits=True, upper_case=True, lower_case=True)

        print(f'passw: {password}')

        username = first_name[0] + last_name
        print(f'username: {username}')

        phone_number=faker.phone_number()
        print(f'phonenum: {phone_number}')
        print(len(phone_number))

        created_on = faker.date()
        print(f'created_on: {created_on}')



        # insert generated User into ManageMyHoard db
        user = User(user_id=user_id,
                    first_name=first_name,
                    last_name=last_name,
                    email=email,
                    password=password,
                    created_on=created_on,
                    phone_number=phone_number
                    )
        i += 1
   
        

        # Add the User object to the session so it will be stored.
        db.session.add(user)

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


if __name__ == "__main__":
    connect_to_db(app)

    # In case tables haven't been created, create them
    db.create_all()
    num_to_gen = 3
    load_users(num_to_gen)
    
    
    set_val_user_id()