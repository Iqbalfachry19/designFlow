import React from 'react';
import Edit from './Edit';
import { PrismaClient } from '@prisma/client';
import { redirect } from 'next/navigation';

import { revalidatePath, revalidateTag } from 'next/cache';

async function getData(params: any) {
  const res = await fetch(`http://localhost:3000/api/getUser/${params.id}`, {
    cache: 'no-store',
    next: { tags: ['user'] },
  });

  return res.json();
}
async function page({ params }: any) {
  async function handleEdit(data: any) {
    'use server';

    const prisma = new PrismaClient();
    const newUser = await prisma.user.update({
      where: {
        id: Number(data.get('id')),
      },
      data: {
        name: data.get('name'),
        email: data.get('email'),
      },
    });
    console.log(newUser);
    revalidateTag('user');
  }
  async function handleSave(data: any) {
    'use server';
    const prisma = new PrismaClient();
    const newUser = await prisma.user.update({
      where: {
        id: Number(data.get('id')),
      },
      data: {
        name: data.get('name'),
        email: data.get('email'),
      },
    });
    console.log(newUser);

    revalidateTag('user');
    redirect(`/users`);
  }
  const { user } = await getData(params);

  return (
    <div>
      <div>
        <p>nama: {user.name}</p>
        <p>email: {user.email}</p>
      </div>
      <Edit
        params={params}
        data={user}
        handleEdit={handleEdit}
        handleSave={handleSave}
      />
    </div>
  );
}

export default page;
