import Quiz from '../components/Quiz'

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Ms. Vargas' Function Vocabulary Quiz</h1>
        <Quiz />
      </div>
    </main>
  )
}
