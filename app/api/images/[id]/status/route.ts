import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/db";
import { Image } from "@/models/image";

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect();
    const {id} = await params
    const { status } = await req.json();

    if (!["approved", "rejected", "pending"].includes(status)) {
      return NextResponse.json(
        { message: "Invalid status" },
        { status: 400 }
      );
    }

    const image = await Image.findByIdAndUpdate(
      id,
      { status },
      { returnDocument: "after" }
    );

    return NextResponse.json(image);

  } catch (error) {
    return NextResponse.json(
      { message: "Failed to update image" },
      { status: 500 }
    );
  }
}
