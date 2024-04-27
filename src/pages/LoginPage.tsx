const LoginPage = () => {
  return (
    <main>
      <h1 className="text-3xl">Ingresar a mi cuenta</h1>
      <form action="submit" className="flex flex-col gap-4">
        <input type="text" className="w-3/4 mx-auto" />
        <input type="text" className="w-3/4 mx-auto" />
      </form>
    </main>
  );
};

export default LoginPage;
