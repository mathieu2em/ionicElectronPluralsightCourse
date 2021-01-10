# ionicElectronPluralsightCourse
 a little app created following a course on the pluralsight platform

# SETUP 

``` shell
npm install 
```

INSTALL IONIC 
``` shell
npm -g install ionic
```

# generate an API key from google

1. follow the instructions from this page to generate an API key for this project
https://developers.google.com/maps/documentation/javascript/get-api-key

2. secure your API key  : restring APIs to only google map API and restrict website to http://localhost:8100

3. create a file named .env.ts 

paste following code and change APIKEYHERE to your api key from step 2.

``` typescript
export class apikey {
    private GOOGLE_API_KEY: string = 'APIKEYHERE';

    public getKey(): string{
        return this.GOOGLE_API_KEY
    }
}
```

# Run the project

``` shell
ionic serve
```