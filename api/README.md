# Rainbow-Octopus api

## Installation
Have the following installed in your machine:
 * Python (we are using version 3.6.9)
 * Pip version 20.0.2 (pip3)
 * Git
 * PostgreSQL

Start in the rainbow-octopus directory
```
cd rainbow-octopus
```
  Create the volunteers-db PostgreSQL db by running on the command line:

 ```
createdb volunteers-db
 ```

Create the tables in the db by running on the command line:

```
 python3 -i model.py
```
Then in python interactive mode run
```
Connected to DB.
>>> db.create_all()
```

 Install virtualenv if it's not available on your machine already.

 ```
 pip3 install virtualenv
 ```

 Create a virtual environment and install all the python libraries required 
 by the project.

 ```
 virtualenv env
 ```
 
 ```
 source env/bin/activate
 ```

 ```
 pip3 install -r requirements.txt
 ```

Now you can run the app locally by running on the command line:

```
python3 api/server.py
```

