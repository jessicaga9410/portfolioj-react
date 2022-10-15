import React from 'react'

function Navb() {
  return (
    <nav className="flex justify-center space-x-4" id="nav-header">
  <a href="/" className="font-bold px-3 py-2 text-slate-100 rounded-lg hover:bg-slate-100 hover:text-slate-900">Home</a>
  <a href="/about" className="font-bold px-3 py-2 text-slate-100 rounded-lg hover:bg-slate-100 hover:text-slate-900">About</a>
  <a href="/work" className="font-bold px-3 py-2 text-slate-100 rounded-lg hover:bg-slate-100 hover:text-slate-900">Work</a>
  <a href="/contact" className="font-bold px-3 py-2 text-slate-200 rounded-lg hover:bg-slate-100 hover:text-slate-900">Contact</a>
</nav>
  )
}

export default Navb