# CPAL-Site

Repo for the Gatsby site for the CPAL Resource Explorer.

## Contributing

This repo presumes the eventual existence of multiple sites or districts presenting different datasets. At present, the only active production branch is `dallasisd`. This process will change when there are additional production branches for additional sites (subdomains).

1. Check out a new branch from `master`.
2. Merge your changes back into  `master` (or make a pull request to the same effect).
3. Changes on `master` are published by merging into `dallasisd`.

## Schools Page Map

The schools component renders a static map with a single school location using 'mapbox-gl-js'. This component will only work when supplied with a Mapbox API Token. A

1. To use it locally, add a `.env.development` file to the root of the project. 
2. Add the following: 
```
GATSBY_MAPBOX_USER=[ADD USER HERE]
GATSBY_MAPBOX_API_TOKEN=[ADD TOKEN HERE]
```
3. Never commit your `.env` files to a git repository.

For the map to work properly when built on Netlify, it will be necessary to add the Mapbox API token using the Netlify environment variables. It is also necessary for environment variables to be prefaced with `GATSBY_`, or else they are not passed to the Gatsby build process during Netlify's build.

## Explorer Component

The explorer requires the following API settings in your local `.env` file or in the Netlify build environment variables: 

```
GATSBY_MAPBOX_USER=[ADD USER HERE]
GATSBY_MAPBOX_API_TOKEN=[ADD TOKEN HERE]
```

It accepts a `toggleMenu` prop that is a function, which toggles the parent site nav menu.

## Google Analytics Tracking

This site uses the [gatsby-plugin-google-gtag](https://www.gatsbyjs.com/plugins/gatsby-plugin-google-gtag/) plugin for GA event tracking. To register a custom event, your call should look like so: 

```js
const trackingData = {
  event_category: "Any Category",
  event_action: "Any Action",
  event_label: labelString,
  value: valueNumber,
}
typeof window !== "undefined" &&
  window.gtag("event", "any_event_name", { ...trackingData })
```

This site passes the Google Analytics Tracking ID in to the site during build. Provide it in your `.env.development` and in the Environment variables for the Netlify build: 

```
GATSBY_GA_TRACKING_ID=[id]
```
