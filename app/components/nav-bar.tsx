import Link from 'next/link'

export default function NavBar() {
  return (
    <header className="bg-gray-800 p-4">
      <nav className="space-x-4">
        <Link
          href="/"
          className="text-white rounded bg-gray-700 px-3 py-2 hover:bg-gray-500"
        >
          Home
        </Link>

        <Link
          href="/blogs"
          className="text-white rounded bg-gray-700 px-3 py-2 hover:bg-gray-500"
        >
          Nested Layout with blogs
        </Link>
        <Link
          href="/streaming-sr"
          className="text-white rounded bg-gray-700 px-3 py-2 hover:bg-gray-500"
        >
          Streaming html
        </Link>
        <Link
          href="/auth-sr"
          className="text-white rounded bg-gray-700 px-3 py-2 hover:bg-gray-500"
        >
          Auth
        </Link>
      </nav>
    </header>
  )
}
