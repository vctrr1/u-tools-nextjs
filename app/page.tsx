export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen pt-10 pl-5 pr-5 md:justify-center">
      <div className="rounded-lg shadow-2xl dark:shadow-[0_0_20px_rgba(255,255,255,0.2)] p-10 max-w-xl text-center">
        <h1 className="text-7xl font-extrabold text-blue-500 mb-4">uTools</h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-2">
          O <span className="font-semibold text-blue-500">uTools</span> (Userful
          Tools) é um site que reúne diversas ferramentas úteis para o seu dia a
          dia, tudo em um só lugar.
        </p>
        <p className="text-md text-gray-600 dark:text-gray-400 text-lg">
          Simplifique tarefas, aumente sua produtividade e encontre rapidamente
          o que precisa, sem complicação.
        </p>
      </div>
    </main>
  );
}
