## Preview

![Test Image 3](/screenshot/cryptoconnect-home.png)

## Get Started

Go to [Rapidapi website](https://rapidapi.com/hub) to get different api's

The api used in this project are [Coin Ranking api](https://rapidapi.com/Coinranking/api/coinranking1) for getting the details about the coins and [Bing news api](https://rapidapi.com/microsoft-azure-org-microsoft-cognitive-services/api/bing-news-search1) to get the news of this coins.

Subscribe to the above api and get the api key and other information.

Create a .env file in your root directory of your folder and add the keys generated from the api in the below variables

```sh
VITE_RAPIDAPI_KEY =  ""

VITE_CRYPTO_API_URL = ""
VITE_CRYPTO_RAPIDAPI_HOST = ""

VITE_NEWS_API_URL = ""
VITE_NEWS_RAPIDAPI_HOST = ""
VITE_NEWS_RAPIDAPI_SDK = ""

```

## Development

To get a local copy of the code, clone it using git:

```sh
git clone https://github.com/TanmayVedpathak/CryptoConnect.git
cd CryptoConnect
```

Install dependencies:

```sh
yarn i
```

Now, you can run the app in the development mode. :

```sh
yarn dev
```

Runs the app in development mode. Open https://localhost:5173 to view it in the browser.

The page will automatically reload if you make changes to the code. You will see the build errors and lint warnings in the console.

#### Available Scripts

In this project, you can run the following scripts:

| Script        | Description                                         |
| ------------- | --------------------------------------------------- |
| npm run build | Builds the app for production to the `dist` folder. |
| npm run serve | Serves the production build from the `dist` folder. |
