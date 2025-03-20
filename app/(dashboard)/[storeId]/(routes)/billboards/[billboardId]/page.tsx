import db from "@/lib/prismadb";
import { BillboardForm } from "./components/billboard-form";
import { ObjectId } from 'mongodb';

const BillboardPage = async ({
    params
}: {
    params: { billboardId: string }
}) => {

    let billboardId: string | undefined = params.billboardId;

    if (params.billboardId === 'new') {
      billboardId = new ObjectId().toHexString();
    }
    
    const billboard = await db.billboard.findUnique({
      where: {
        id: billboardId
      }
    });

  return ( 
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardForm initialData={billboard} />
      </div>
    </div>
  );
}

export default BillboardPage;