'use client';

function Form({ handleSubmit }: any) {
  return (
    <form action={handleSubmit}>
      <input type="text" name="name" placeholder="name" />
      <input type="text" name="email" placeholder="email" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
