# Fake Products

Assessment front-end app project by @udimberto.

## Relevant points

#### `NextJS` as project base:

None advanced resource used, only the basics.
- [ ] SS data fetching in case of `robots` requesting
  - [ ] Product Page

#### `Redux` to manage the app local state:

- [x] `@reduxjs/toolkit` to manage multiple store/contexts
- [x] `redux-persist` to persist info at browser LocalStorage

#### `Material UI` as design system and components library:

- [x] `@emotion` helps with customizations
- [x] `swiper` to do some slides-components

## Development

Running the development server locally:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Roadmap

- [x] Home Page
  - [x] Featured Products List
  - [x] Products List by Categories
  - [ ] SS categories-data on `robots` requesting
- [x] Product Page
  - [x] Layout
  - [x] SS product-data on `robots` requesting
  - [x] SEO Schema
- [x] `AppBar` links
- [ ] Deploy on Vercel
- [ ] Relevant Unit Tests
