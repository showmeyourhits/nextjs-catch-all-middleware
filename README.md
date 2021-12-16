# Catch all middleware bug example

Branch with bugged behavior: `added_catch_all_middleware`. On `main` everything works fine

## how to reproduce

- Clone the repo
```
git clone git@github.com:showmeyourhits/nextjs-catch-all-middleware.git
```
- Install deps
```
npm install
```
- switch to branch with added middleware
```
git checkout added_catch_all_middleware
```

### Dev mode error
- start app in dev mode
```
npm run dev
```
- go to
```
http://localhost:3000
```
- click on `Go to catch-all subroute`. Application freezes. Other navigation attempts (click on other links/page refresh) will produce the error in console.

### Build error
- build the app
```
npm run build
```
