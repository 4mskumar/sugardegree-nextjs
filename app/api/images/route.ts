import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/db";
import { Image } from "@/models/image";

// CREATE IMAGE (user upload)
export async function POST(req: Request) {
  try {
    await dbConnect();

    const { title, tags, imageUrl } = await req.json();

    const image = await Image.create({
      title,
      tags,
      imageUrl,
      status: "pending",
      visible: true,
    });

    return NextResponse.json(image, { status: 201 });

  } catch (error) {
    return NextResponse.json(
      { message: "Failed to create image" },
      { status: 500 }
    );
  }
}

// GET IMAGES BY STATUS (admin)
export async function GET(req: Request) {
  try {
    await dbConnect();

    const { searchParams } = new URL(req.url);
    const status = searchParams.get("status");

    const filter: any = {};
    if (status) filter.status = status;

    const images = await Image.find(filter).sort({ createdAt: -1 });

    return NextResponse.json(images);

  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch images" },
      { status: 500 }
    );
  }
}
