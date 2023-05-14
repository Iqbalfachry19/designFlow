'use client';
function Delete({ handleDelete, data }: any) {
  return (
    <button
      onClick={async () => {
        await handleDelete(data.id);
      }}
    >
      Delete
    </button>
  );
}

export default Delete;
