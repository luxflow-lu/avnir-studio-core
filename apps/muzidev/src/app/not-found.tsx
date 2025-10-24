export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b0b0d] text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#5CB9F2] mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page non trouvée</h2>
        <p className="text-[#c5ccd6] mb-8">
          La page que vous recherchez n'existe pas.
        </p>
        <a 
          href="/" 
          className="inline-flex items-center px-6 py-3 bg-[#5CB9F2] text-white font-medium rounded-lg hover:bg-[#4A9FD1] transition-colors"
        >
          Retour à l'accueil
        </a>
      </div>
    </div>
  );
}
