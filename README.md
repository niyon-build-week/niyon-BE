# Guidr => Backend Architects
## Chad Kidd

### BASE URL


# SIGN UP / LOG IN
### Sign Up
#### POST /api/auth/register
Client sends
```
{
    "username":"new user", // REQUIRED
    "password":"pass"  // REQUIRED
}
```

Server will return
```
{
    "id":"3",
    "username":"new user"
}
```

### Login PROVIDES TOKEN
#### POST /api/auth/login
Client sends
```
{
    "username":"new user", // REQUIRED
    "password":"pass"  // REQUIRED
}
```

Server will return
```
{
    "message":"Welcome username",
    "id":"3"
    "token":"hashed auth token"
}
```

# RESTRICTED ROUTES
## USER INFORMATION

### Display user profile
#### GET /api/profile/:id
Example: To see user1 >> POST /api/profile/1

Server will return
```
 {
  "id": 1,
  "user_id": 3,
  "first_name": "cat",
  "last_name": "woman",
  "age": "22",
  "gender": "feline",
  "location": "hell here",
  "language": "Meow", "English", "Mandarin",
  "certs": "Thievery",
  "profile_text": "Selina Kyle is Catwoman, a Gotham City expert thief who crossed paths with Batman on several occasions. Having largely left behind her villainous ways, she now operates as a frequent ally of the Batman Family.",
  "skills": "9 lives"
 }
```

### Edit user profile
#### PUT /api/profile/:id
Example: To edit user1 >> POST /api/profile/1

Client must send
```
 {
  "id": 1,
  "user_id": 3,
  "first_name": "cat",
  "last_name": "woman",
  "age": "22",
  "gender": "feline",
  "location": "hell here",
  "language": "Meow", "English", "Mandarin",
  "certs": "Thievery",
  "profile_text": "Selina Kyle is Catwoman, a Gotham City expert thief who crossed paths with Batman on several occasions. Having largely left behind her villainous ways, she now operates as a frequent ally of the Batman Family.",
  "skills": "9 lives"
  }
```

### Display ALL user profiles
#### GET /api/profile
Server will return
```
[
 {
  "id": 1,
  "user_id": 3,
  "first_name": "cat",
  "last_name": "woman",
  "age": "22",
  "gender": "feline",
  "location": "hell here",
  "language": "Meow", "English", "Mandarin",
  "certs": "Thievery",
  "profile_text": "Selina Kyle is Catwoman, a Gotham City expert thief who crossed paths with Batman on several occasions. Having largely left behind her villainous ways, she now operates as a frequent ally of the Batman Family.",
  "skills": "9 lives"
  }
{
  "id": 2,
  "user_id": 1,
  "first_name": "bat",
  "last_name": "man",
  "age": "40",
  "gender": "batman",
  "location": "gotham city",
  "language": "english",
  "certs": null,
  "profile_text": null,
  "skills": null
  },
{
  "id": 3,
  "user_id": 4,
  "first_name": "the",
  "last_name": "joker",
  "age": "45",
  "gender": "clown",
  "location": "arkham asylum",
  "language": "jokes",
  "certs": null,
  "profile_text": null,
  "skills": "killing joke"
  }
]
```

### Display all users
#### GET /api/users
Server will return
```
[
  {
    "id": 1,
    "username": "user1"
  },
  {
    "id": 2,
    "username": "user2"
  },
]
```

### Delete user account
#### DELETE /api/users/:id
Example: To delete user1 >> DELETE /api/users/1

Server will return status 204 if successful
Suggest some type of success message on FE

## QUESTIONS

### Create a new question
#### POST /api/questions/
Client must send
```
{
  "id": 2,
  "user_id": 1, //REQUIRED
  "title": "how to catch a cat",
  "question_type": "personal",
  "date": "5/21/19",
  "question": "what is the most effective way to catch an alley cat",
  "location": "gotham city",
  "professional": "false"
  },
```
Server will return status 201 if successful

### Display all questions created by user_id
#### GET /api/questions/:id
Example: To see questions created by user_id 2 >> GET /api/questions/2

Server will return
```
[
{
  "id": 2,
  "user_id": 2,
  "title": "how to catch a cat",
  "question_type": "personal",
  "date": "5/21/19",
  "question": "what is the most effective way to catch an alley cat",
  "location": "gotham city",
  "professional": "false"
  },
{
  "id": 3,
  "user_id": 2,
  "title": "riddles",
  "question_type": "business",
  "date": "5/21/19",
  "question": "how to get better at solving riddles",
  "location": "gotham city",
  "professional": "false"
  },
{
  "id": 4,
  "user_id": 2,
  "title": "eggs",
  "question_type": "cooking",
  "date": "5/21/19",
  "question": "how long do eggs last past sell by date?",
  "location": "gotham city",
  "professional": "false"
  }
]
```

### Edit question(s) 
#### PUT /api/questions/:id
Example: To edit question 2 >> PUT /api/questions/2
Use the assigned id ex: "id": 2

Client must send
```
    {
        "id": 2, //REQUIRED
        "user_id": 2,
        "title": "how to catch a rat",
        "question_type": "personal",
        "date": "5/21/19",
        "question": "what is the most effective way to catch an alley cat",
        "location": "gotham city",
        "professional": "false"
    }
```

### Delete questions
#### DELETE /api/questions/:id
Example: To delete questions 3 >> DELETE /api/trips/3
Use the assigned id ex: "id": 3 

Server will return status 204 if successful
