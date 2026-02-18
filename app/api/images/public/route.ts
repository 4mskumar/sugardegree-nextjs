import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/db";
import { Image } from "@/models/image";

export async function GET(req: Request) {
  try {
    await dbConnect();

    const { searchParams } = new URL(req.url);
    const page = Number(searchParams.get("page") || 1);
    const limit = Number(searchParams.get("limit") || 6);

    const images = await Image.find({
      status: "approved",
      visible: true,
    })
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    return NextResponse.json(images);

  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch public images" },
      { status: 500 }
    );
  }
}
