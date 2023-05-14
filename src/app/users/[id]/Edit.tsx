'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

function Form({ handleEdit, params, data, handleSave }: any) {
  console.log(data);
  const router = useRouter();
  return (
    <form action={handleEdit}>
      <input type="hidden" name="id" value={params.id} />
      <input
        type="text"
        name="name"
        placeholder="name"
        defaultValue={data.name}
      />
      <input
        type="text"
        name="email"
        placeholder="email"
        defaultValue={data.email}
      />
      <div className="flex space-x-2 bg-red-400">
        <button type="submit">Submit</button>
        <button formAction={handleSave}>Save</button>

        <Link prefetch={false} href="/users">
          Cancel
        </Link>
      </div>
    </form>
  );
}

export default Form;
