import { NextRequest, NextResponse } from "next/server";
import fs from "fs";

export async function POST(req: NextRequest) {
  const { key, value } = await req.json();

  let data: any = {};
  data[key] = value;
  fs.writeFileSync("./file.json", JSON.stringify(data));

  return NextResponse.json({ message: "OK" });
}

export async function GET(req: NextRequest) {
  const key = await req.nextUrl.searchParams.get("key");
  if (!key) return NextResponse.json({ message: "key not given" });

  const data = JSON.parse(fs.readFileSync("./file.json", "utf8") || "{}");

  return NextResponse.json({ value: data[key] ?? null });
}
