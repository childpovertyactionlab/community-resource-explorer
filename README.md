# Gatsby React Bootstrap Starter

A GatsbyJS starter that includes

- react-bootstrap
- react-icons
- sticky on scroll navbar
- SASS compiler
- basic layout

## Map Usage

The schools component renders a static map with a single school location using 'mapbox-gl-js'. This component will only work when supplied with a Mapbox API Token. A

1. To use it locally, add a `.env.development` file to the root of the project. 
2. Add the following: 
```
GATSBY_MAPBOX_API_KEY=[ADD TOKEN HERE]
GATSBY_MAPBOX_USER=[ADD USER HERE]
```
3. Never commit your `.env` files to a git repository.

For the map to work properly when built on Netlify, it will be necessary to add the Mapbox API token using the Netlify environment variables. 

## Explorer Component

The explorer requires the following API settings in your local `.env` file or in the Netlify build environment variables: 

```
MAPBOX_USER=[ADD USER HERE]
MAPBOX_API_TOKEN=[ADD TOKEN HERE]
```

It accepts a `toggleMenu` prop that is a function, which toggles the parent site nav menu.
