For local development:

##1

Add ```.env``` file in the root directory with the following variables:

```bash
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NODE_ENV=development
DATABASE_URL= some postgres database url likepostgresql://postgres:postgres@localhost:5432/postgres
```

##2

Run the application:

```bash
npm run dev
```