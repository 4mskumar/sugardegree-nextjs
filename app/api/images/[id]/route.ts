import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/db";
import { Image } from "@/models/image";

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await dbConnect();
    const {id} = await params
    await Image.findByIdAndDelete(id);

    return NextResponse.json({ message: "Image deleted" });

  } catch (error) {
    return NextResponse.json(
      { message: "Failed to delete image" },
      { status: 500 }
    );
  }
}
