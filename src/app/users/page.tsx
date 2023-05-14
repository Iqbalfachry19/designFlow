import Link from 'next/link';
import Form from './Form';

import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import Delete from './Delete';

async function getData() {
  const res = await fetch('http://localhost:3000/api/getUsers/', {
    cache: 'no-store',
    next: { tags: ['user'] },
  });
  return res.json();
}
async function page() {
  async function handleSubmit(data: any) {
    'use server';

    const prisma = new PrismaClient();
    const newUser = await prisma.user.create({
      data: {
        name: data.get('name'),
        email: data.get('email'),
      },
    });

    revalidatePath('/users/');
  }

  async function handleDelete(id: any) {
    'use server';

    const prisma = new PrismaClient();
    const newUser = await prisma.user.delete({
      where: {
        id: id,
      },
    });

    revalidatePath('/users/');
  }
  const data = await getData();
  return (
    <div>
      <Form handleSubmit={handleSubmit} />

      {data.users.map((data: any, i: any) => (
        <div key={i}>
          <p>{data.email}</p>
          <p>{data.name}</p>
          <Link prefetch={false} href={`users/${data.id}`}>
            Edit
          </Link>
          <Delete data={data} handleDelete={handleDelete} />
        </div>
      ))}
    </div>
  );
}

export default page;
