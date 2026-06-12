function MainLayout({ children }) {
  return (
    <div className="bg-[#0a192f] min-h-screen text-slate-200">

    <div className="max-w-7xl mx-auto px-6 lg:px-12">
    
        {children}

      </div>

    </div>
  )
}

export default MainLayout