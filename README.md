## TP Node - front-end

## About the projet

The homepage is the sign-in page.

### Register and login
- Create your account on the sign-in page with an email and a password
- The role is determined by the email : if the email contains "admin", then the role of the user will be *admin*. Otherwise, the role will be set to *user*
- Log in with your email and password

### The posts
- When logged in, you can see the posts
- Only users with the **admin role** can create new posts

---

## URL
```
localhost
```

## Launch docker
```
docker-compose up
```

## Start docker
```
docker-compose start
```

## Remove container
```
docker-compose down
```

## Show container logs
```
docker-compose logs -f
```

## Access to docker
```
docker-compose exec node /bin/sh
```

## Environment variable
- Rename .env.sample to .env
- Add a key for JWT_KEY on this file