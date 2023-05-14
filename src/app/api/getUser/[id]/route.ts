import { PrismaClient } from '@prisma/client';

import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  {
    params,
  }: {
    params: { id: string };
  },
) {
  const prisma = new PrismaClient();
  request.json();
  const user = await prisma.user.findUnique({
    where: { id: Number(params.id) },
  });

  return NextResponse.json({ user });
}
