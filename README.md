# dressr

## Description

Get to the back of your drawer without making a mess. Rotate your closet and never forget an outfit. Keep track of your clothes and outfits and get ready easier and faster everyday.

## User Stories

-  **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault
-  **Signup:** As an anon I can sign up in the platform so that I can start using the app
-  **Login:** As a user I can login to the platform so that I can access my virtual closet
-  **Logout:** As a user I can logout from the platform so no one else can use it
-  **Add clothing** As a user I can add a piece of clothing to my virtual closet
-  **List my closet** As a user I want to see all my clothes in my virtual closet so that I can get inspired
-  **Search clothes** As a user I want to search clothes by category (pants, tops, coats, jackets, shoes)

## Backlog

-  **File upload** As a user I want to upload my clothes pictures so that I can storage my whole closet
-  **Create an outfit** As a user I want to combine different clothing and save outfits to remember in the future
-  **Add to favorites** As a user I want to add an outfit to my favorites so that I reuse it
-  **See my favorites** As a user I want to see my favorite outfits so that I can see the ones I liked the most
-  **Weather integration** As a user I want to know the weather so that I can choose the best outfit for the day
-  **Calendar** As a user I want to know when I wear an outfit so that I can keep track of what I wear the most, and diversify my outfits
-  **Plan luggage** As a user I want to know the weather of my destination so that I can prepare my bag for those days and never forget a clothing piece.
  
# Client

## Routes

- / - Landing page
- /auth/signup - Signup form
- /auth/login - Login form
- /profile/me - my personal details and favorite
- /closet - clothes list
- /clothes/create - create an outfit
- /clothes/:id -  clothes detail card with tags/categories and pic
- 404

## Pages

- Landing Page (public)
- Sign in Page (anon only)
- Log in Page (anon only)
- My Profile/home Page (user only)
- Clothes List Page (user only)
- Outfit Create (user only)
- Clothes Detail Page (user only)
- 404 Page (public)

## Components

- Clothes Card component
  - Input: restaurant: any
  - Output: favorite(restaurantId: string, on: boolean)
- Search component
  - Output: change(terms: string)

## IO


## Services

- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()
  - auth.me()
  - auth.getUser() // synchronous
- Clothes Service
  - clothes.list()
  - clothes.create(data)
  - clothes.detail(id)
  ___________________________
  - outfit.addFavorite(id)
  - outfit.removeFavorite(id)   

# Server

## Models

User model

```
username - String // required
email - String // required & unique
password - String // required
favorites - [ObjectID<outfits>]

```

Clothes model

```
picture - ObjectID<clothes> // required
category - String // required
Style - String // required
Date - Date.now

```

Outfit model

```
picture - ObjectID<clothes> // required
Style - String // required
Notes - String
Date - Date.now

```

## API Endpoints/Backend Routes

- GET /auth/me
- POST /auth/signup
  - body:
    - username
    - email
    - password
- POST /auth/login
  - body:
    - username
    - password
- POST /auth/logout
  - body: (empty)
- POST /profile/me
  - body:
    - User details
- GET /closet
- POST /clothes
  - body:
    - picture
    - category
    - style
    - date
- GET /clothes/:id

____________________________________________________
- DELETE /profile/me/favorite/:outfitId
  - body: (empty)

  

## Links

### Trello

[Trello board](https://trello.com/b/Us78PYyT/dressrhttps://trello.com)

### Git
[Client repository Link](https://github.com/MJHRhacker/dressr)
[Server repository Link](http://github.com)

[Deploy Link](http://heroku.com)

### Slides

[Slides Link](http://slides.com)
