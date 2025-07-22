import './App.css';

function App() {
  return (
    <div className="App bg-gray-100 min-h-screen flex items-center justify-center px-4">
      <div className="max-w-2xl bg-white shadow-xl rounded-2xl p-10 text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Jenkins CI/CD Pipeline</h1>
        <p className="text-gray-700 text-lg mb-6">
          🚀 Automated frontend and backend deployment using <strong>Jenkins</strong>, <strong>Vercel</strong>, and <strong>Render</strong>.
        </p>
        <div className="flex justify-center space-x-4 mb-4">
          <a
            href="https://jenkins-automation.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full transition"
          >
            View Frontend (Vercel)
          </a>
          <a
            href="https://jenkins-automation.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full transition"
          >
            View Backend(Render)
          </a>
        </div>
        <p className="text-sm text-gray-500">Made with ❤️ by Krishna Jaiswal</p>
      </div>
    </div>
  );
}

export default App;
