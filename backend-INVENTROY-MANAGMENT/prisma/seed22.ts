import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.product.createMany({
    data: 
    [
      {
        "id": 1,
        "name": "Lemon",
        "sku": "FRU-LEMON-001",
        "expiration": "2024-12-01T00:00:00.000Z",
        "categoryId": 1,
        "price": 0.99,
        "quantity": 50,
        "supplierId": 1,
        "createdAt": "2024-11-01T00:00:00.000Z",
        "updatedAt": "2024-11-01T00:00:00.000Z",
        "picture": "https://github.com/M0N1C/FRONTEND-IMS/blob/main/ims-frontend/public/images/categories/fruits.PNG?raw=true"
      },
      {
        "id": 2,
        "name": "Orange",
        "sku": "FRU-ORANGE-002",
        "expiration": "2024-12-15T00:00:00.000Z",
        "categoryId": 1,
        "price": 1.49,
        "quantity": 40,
        "supplierId": 2,
        "createdAt": "2024-11-01T00:00:00.000Z",
        "updatedAt": "2024-11-01T00:00:00.000Z",
        "picture": "https://github.com/M0N1C/FRONTEND-IMS/blob/main/ims-frontend/public/images/categories/fruits.PNG?raw=true"
      },
      {
        "id": 3,
        "name": "Apple",
        "sku": "FRU-APPLE-003",
        "expiration": "2024-11-25T00:00:00.000Z",
        "categoryId": 1,
        "price": 1.29,
        "quantity": 30,
        "supplierId": 3,
        "createdAt": "2024-11-01T00:00:00.000Z",
        "updatedAt": "2024-11-01T00:00:00.000Z",
        "picture": "https://github.com/M0N1C/FRONTEND-IMS/blob/main/ims-frontend/public/images/categories/fruits.PNG?raw=true"
      },
      {
        "id": 4,
        "name": "Pear",
        "sku": "FRU-PEAR-004",
        "expiration": "2024-12-05T00:00:00.000Z",
        "categoryId": 1,
        "price": 1.39,
        "quantity": 25,
        "supplierId": 4,
        "createdAt": "2024-11-01T00:00:00.000Z",
        "updatedAt": "2024-11-01T00:00:00.000Z",
        "picture": "https://github.com/M0N1C/FRONTEND-IMS/blob/main/ims-frontend/public/images/categories/fruits.PNG?raw=true"
      },
      {
        "id": 5,
        "name": "Grape",
        "sku": "FRU-GRAPE-005",
        "expiration": "2024-12-20T00:00:00.000Z",
        "categoryId": 1,
        "price": 2.99,
        "quantity": 60,
        "supplierId": 5,
        "createdAt": "2024-11-01T00:00:00.000Z",
        "updatedAt": "2024-11-01T00:00:00.000Z",
        "picture": "https://github.com/M0N1C/FRONTEND-IMS/blob/main/ims-frontend/public/images/categories/fruits.PNG?raw=true"
      },
      {
        "id": 6,
        "name": "Blueberry",
        "sku": "FRU-BLUEBERRY-006",
        "expiration": "2024-11-28T00:00:00.000Z",
        "categoryId": 1,
        "price": 3.49,
        "quantity": 20,
        "supplierId": 1,
        "createdAt": "2024-11-01T00:00:00.000Z",
        "updatedAt": "2024-11-01T00:00:00.000Z",
        "picture": "https://github.com/M0N1C/FRONTEND-IMS/blob/main/ims-frontend/public/images/categories/fruits.PNG?raw=true"
      },
      {
        "id": 7,
        "name": "Pineapple",
        "sku": "FRU-PINEAPPLE-007",
        "expiration": "2024-12-12T00:00:00.000Z",
        "categoryId": 1,
        "price": 2.79,
        "quantity": 15,
        "supplierId": 2,
        "createdAt": "2024-11-01T00:00:00.000Z",
        "updatedAt": "2024-11-01T00:00:00.000Z",
        "picture": "https://github.com/M0N1C/FRONTEND-IMS/blob/main/ims-frontend/public/images/categories/fruits.PNG?raw=true"
      },
      {
        "id": 8,
        "name": "Watermelon",
        "sku": "FRU-WATERMELON-008",
        "expiration": "2024-12-25T00:00:00.000Z",
        "categoryId": 1,
        "price": 3.99,
        "quantity": 10,
        "supplierId": 3,
        "createdAt": "2024-11-01T00:00:00.000Z",
        "updatedAt": "2024-11-01T00:00:00.000Z",
        "picture": "https://github.com/M0N1C/FRONTEND-IMS/blob/main/ims-frontend/public/images/categories/fruits.PNG?raw=true"
      },
      {
        "id": 9,
        "name": "Strawberry",
        "sku": "FRU-STRAWBERRY-009",
        "expiration": "2024-12-01T00:00:00.000Z",
        "categoryId": 1,
        "price": 4.49,
        "quantity": 50,
        "supplierId": 4,
        "createdAt": "2024-11-01T00:00:00.000Z",
        "updatedAt": "2024-11-01T00:00:00.000Z",
        "picture": "https://github.com/M0N1C/FRONTEND-IMS/blob/main/ims-frontend/public/images/categories/fruits.PNG?raw=true"
      },
      {
        "id": 10,
        "name": "Peach",
        "sku": "FRU-PEACH-010",
        "expiration": "2024-11-30T00:00:00.000Z",
        "categoryId": 1,
        "price": 2.29,
        "quantity": 35,
        "supplierId": 5,
        "createdAt": "2024-11-01T00:00:00.000Z",
        "updatedAt": "2024-11-01T00:00:00.000Z",
        "picture": "https://github.com/M0N1C/FRONTEND-IMS/blob/main/ims-frontend/public/images/categories/fruits.PNG?raw=true"
      }
    ],
  });

  console.log('Seeding complete!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
