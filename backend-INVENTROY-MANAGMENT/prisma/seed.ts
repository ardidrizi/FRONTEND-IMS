import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    // Ensure categories with IDs exist
    await prisma.category.upsert({
      where: { id: 1 },
      update: {},
      create: {
        id: 1,
        name: "Category I",
      },
    });
  
    await prisma.category.upsert({
      where: { id: 2 },
      update: {},
      create: {
        id: 2,
        name: "Category II",
      },
    });


 

  //new supplier
  const suppliers = [
    { id: 1, name: "Supplier 1", email: "supplier1@example.com", phone: "123-456-7891", address: "123 Main St", contactInfo: "Contact Info 1" },
    { id: 2, name: "Supplier 2", email: "supplier2@example.com", phone: "123-456-7892", address: "456 Main St", contactInfo: "Contact Info 2" },
    { id: 3, name: "Supplier 3", email: "supplier3@example.com", phone: "123-456-7893", address: "789 Main St", contactInfo: "Contact Info 3" },
    { id: 4, name: "Supplier 4", email: "supplier4@example.com", phone: "123-456-7894", address: "101 Main St", contactInfo: "Contact Info 4" },
    { id: 5, name: "Supplier 5", email: "supplier5@example.com", phone: "123-456-7895", address: "202 Main St", contactInfo: "Contact Info 5" },
  ];

  for (const supplier of suppliers) {
    await prisma.supplier.upsert({
      where: { id: supplier.id },
      update: {},
      create: supplier,
    });
  }
  // Ensure supplier with id 1 exists
  //const supplier = await prisma.supplier.findFirst({
  //  where: { id: 1 },
  //});

  //if (!supplier) {
  //  await prisma.supplier.create({
  //    data: {
  //      id: 1,
  //      name: "Default Supplier",
  //      email: "default@supplier.com",
  //      phone: "123-456-7890",
  //      address: "123 Default St, Default City, DC 12345",
  //      contactInfo: "Contact Info",
  //    },
  //  });
 // }

  // Get the categories we just created/found (needed for later product creation)
  const category1 = await prisma.category.findFirst({
    where: { name: "Category I" },
  });
  const category2 = await prisma.category.findFirst({
    where: { name: "Category II" },
  });

  // Add Products (assuming you have a supplier with id 1 already)
  if (!category1) {
    throw new Error("Category I not found");
  }
  if (!category2) {
    throw new Error("Category II not found");
  }
  const products = [
    {
        "id": 1,
        "name": "Lemona",
        "sku": "FRU-LEMONa-001",
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
      },
  ];

  // Insert Products into the database
  for (const product of products) {
    await prisma.product.create({
      data: {
        name: product.name,
        sku: product.sku,
        expiration: product.expiration,
        price: product.price,
        picture: product.picture,
        categoryId: product.categoryId,
        supplierId: product.supplierId,
        quantity: 100, // Set an initial quantity of 100 for each product
      },
    });
  }

  console.log("Seed data has been inserted successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
