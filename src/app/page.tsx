export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-blue-600 mb-8">
          Welcome to Next.js Application
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Your Next.js app is up and running using k8s! 🚀
        </p>
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg shadow-lg">
          <p className="text-lg">
            This is a simple Next.js application built with TypeScript and Tailwind CSS.
          </p>
        </div>
      </div>
    </main>
  )
}