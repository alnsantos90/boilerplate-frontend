export function Main() {
  return (
    <main className="bg-gray-900 text-white w-full h-[100vh] overflow-x-hidden overflow-y-hidden flex items-center flex-col justify-center">
      <div className="flex items-center">
        <img src="assets/logo.svg" alt="Alt Logo" className="w-[8rem] mx-5" />
        <h1 className="text-7xl my-6">Boilerplate NextJs</h1>
      </div>
      <p className="text-4xl max-w-3xl text-center leading-relaxed">
        Boilerplate utilizando NextJs, Tailwindcss, Jest, Husky, React Testing
        library
      </p>
    </main>
  )
}
