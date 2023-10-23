
# Running the App
   - clone the repo
   - cd into Directory
   - pnpm install (Yarn or Npm should work as well)
   - pnpm dev (Yarn or Npm should work as well)

## Caviats
The Tommorow API has a ratelimiter on the free tier, which can easly be hit if you refresh the code to often. this can be solved with future work by making the data more Persistant as weather does not change from 1 minute to the other saving the data in Localstorage, Cookies or a SW would helt solve this issue.
