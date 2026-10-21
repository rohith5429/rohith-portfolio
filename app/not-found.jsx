export default function NotFound() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-[#c5999d] text-white">
      <h2 className="text-4xl font-bold">404 - Page Not Found</h2>
      <a
        href="/"
        className="mt-4 px-4 py-2 bg-white text-[#953949] rounded-lg font-bold hover:bg-rose-100 transition-colors"
      >
        Return Home
      </a>
    </div>
  );
}
