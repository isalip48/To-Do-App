import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate(); 

  const handleNavigate = (path) => {
    navigate(path); 
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-indigo-600/10"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 px-8 py-8 min-h-screen flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between mb-16">
          <h1 className="text-5xl font-bold tracking-tight text-blue-400">
            TODO<span className="text-white">APP</span>
          </h1>
          <div className="space-x-4">
            <button
              onClick={() => handleNavigate("/login")}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 border border-white/10 hover:border-white/20"
            >
              Login
            </button>
            <button
              onClick={() => handleNavigate("/register")}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
            >
              Register
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex flex-col items-center justify-center max-w-6xl mx-auto text-center px-4">
          <div className="mb-12">
            <h2 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent leading-tight">
              Organize your tasks,
              <br />
              <span className="text-blue-400">your way</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Your ultimate productivity companion. Transform chaos into clarity with our elegant, 
              lightning-fast task management system designed for modern workflows.
            </p>
          </div>

          {/* Call to Action */}
          <div className="space-y-4 mb-16">
            <button
              onClick={() => handleNavigate("/login")}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-12 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-2xl hover:shadow-blue-500/30 hover:scale-105 active:scale-95"
            >
              Get Started Free
            </button>
            <div className="text-sm text-gray-400">
              No credit card required • Start organizing in seconds
            </div>
          </div>

          {/* Feature highlights */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:bg-white/10">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl mb-4 mx-auto flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-300">Lightning Fast</h3>
              <p className="text-gray-400">Built for speed. Add, edit, and complete tasks in milliseconds.</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:bg-white/10">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl mb-4 mx-auto flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-300">Simple & Clean</h3>
              <p className="text-gray-400">Distraction-free interface that keeps you focused on what matters.</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:bg-white/10">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl mb-4 mx-auto flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-300">Your Way</h3>
              <p className="text-gray-400">Customize and organize tasks exactly how your brain works best.</p>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="text-center pt-16 pb-8">
          <p className="text-gray-500 text-sm">
            Join thousands of productive people who trust TodoApp
          </p>
        </footer>
      </div>
    </div>
  );
}