# Para desarrollo en local:

##1

Agregar archivo ```.env``` en la raíz del proyecto con las siguientes variables:

```bash
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NODE_ENV=development
DATABASE_URL= some postgres database url likepostgresql://postgres:postgres@localhost:5432/postgres
```

##2

Ejecutar la aplicación:

```bash
npm run dev
```

# Suposiciones

- Una compra puede tener cualquier número de tickets entre 1 y el stock disponible, a la cual se le asigna un solo comprador.
- Un evento se puede seguir visualizando aunque ya no tenga stock.
- Se simplificó el uso de los datos del comprador al no agregarlo como entidad a la base de datos, sino como parte de los datos del ticket.