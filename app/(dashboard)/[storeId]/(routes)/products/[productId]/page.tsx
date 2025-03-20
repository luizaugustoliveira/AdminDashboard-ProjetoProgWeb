import db from "@/lib/prismadb";

import { ProductForm } from "./components/product-form";
import { ObjectId } from "mongodb";

const ProductPage = async ({
  params
}: {
  params: { productId: string, storeId: string }
}) => {

  let productId: string | undefined = params.productId;

  if (params.productId === 'new') {
    productId = new ObjectId().toHexString();
  }
  
  const product = await db.product.findUnique({
    where: {
      id: productId, // use the generated ObjectId value
    },
    include: {
      images: true,
    }
  });

  const categories = await db.category.findMany({
    where: {
      storeId: params.storeId,
    },
  });

  const sizes = await db.size.findMany({
    where: {
      storeId: params.storeId,
    },
  });

  const colors = await db.color.findMany({
    where: {
      storeId: params.storeId,
    },
  });

  return ( 
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ProductForm 
          categories={categories} 
          colors={colors}
          sizes={sizes}
          initialData={product}
        />
      </div>
    </div>
  );
}

export default ProductPage;