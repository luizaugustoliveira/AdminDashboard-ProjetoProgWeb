import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Populando banco de dados...");

  // Criar um usuário
  const user = await prisma.user.create({
    data: {
      email: "user@example.com",
    },
  });

  // Criar uma loja associada ao usuário
  const store = await prisma.store.create({
    data: {
      name: "Minha Loja",
      userId: user.id,
    },
  });

  // Criar um Billboard para a loja
  const billboard = await prisma.billboard.create({
    data: {
      storeId: store.id,
      label: "Promoções",
      imageUrl: "https://via.placeholder.com/150",
    },
  });

  // Criar uma Categoria associada ao Billboard
  const category = await prisma.category.create({
    data: {
      storeId: store.id,
      billboardId: billboard.id,
      name: "Eletrônicos",
    },
  });

  // Criar Tamanhos e Cores para os Produtos
  const size = await prisma.size.create({
    data: {
      storeId: store.id,
      name: "Médio",
      value: "M",
    },
  });

  const color = await prisma.color.create({
    data: {
      storeId: store.id,
      name: "Vermelho",
      value: "#FF0000",
    },
  });

  // Criar um Produto
  const product = await prisma.product.create({
    data: {
      storeId: store.id,
      categoryId: category.id,
      name: "Smartphone",
      price: 1999.99,
      sizeId: size.id,
      colorId: color.id,
    },
  });

  // Criar uma Imagem para o Produto
  await prisma.image.create({
    data: {
      productId: product.id,
      url: "https://via.placeholder.com/300",
    },
  });

  console.log("Banco de dados populado");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });