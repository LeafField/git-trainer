import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  console.log("無事アクセスできてるよ");
  const pathName = req.nextUrl.pathname;
  const path = pathName.split("/")[2];
  return NextResponse.json({ title: path });
}
