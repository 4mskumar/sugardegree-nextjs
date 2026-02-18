import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/db";
import { Image } from "@/models/image";

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect();

    const { visible } = await req.json();
    const {id} = await params

    const image = await Image.findByIdAndUpdate(
      id,
      { visible },
      { returnDocument: "after" }
    );

    return NextResponse.json(image);

  } catch (error) {
    return NextResponse.json(
      { message: "Failed to update visibility" },
      { status: 500 }
    );
  }
}
