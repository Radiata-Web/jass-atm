# Jass ATM — TanStack Start

Family-owned ATM sales & service site (Jacksonville, FL).

## Stack

- [TanStack Start](https://tanstack.com/start) + React 19
- Chakra UI v2
- Hugeicons
- Deployed on [Netlify](https://www.netlify.com/) (including [Netlify Forms](https://docs.netlify.com/forms/setup/) for contact)

## Develop

```bash
bun install
bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

Optional env (`.env`):

```
VITE_MEASUREMENT_ID=G-XXXXXXXX
```

## Build

```bash
bun run build
```

## Netlify

`netlify.toml` sets build/publish. Contact submissions use the `contact` form (`public/__forms.html` for detection + the React form on the home page).

After first deploy, confirm the form appears under **Forms** in the Netlify dashboard and set notification emails there.
