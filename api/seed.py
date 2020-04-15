####
# Seed Databases
from faker import Faker
from model import User
from server import app, configure_db, connect_to_db, db
from datetime import datetime

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


if __name__ == "__main__":
    configure_db(app)
    connect_to_db(app)

    # In case tables haven't been created, create them
    db.create_all()
    num_to_gen = 3
    load_users(num_to_gen)
