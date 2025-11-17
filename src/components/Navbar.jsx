import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItem = (label) => (
    <a href="#" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
      {label}
    </a>
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-white/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-amber-400 grid place-items-center text-white shadow-md">
              <Sparkles size={18} />
            </div>
            <span className="text-lg font-semibold tracking-tight text-slate-900">Voxa</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navItem('Product')}
            {navItem('Solutions')}
            {navItem('Pricing')}
            {navItem('Docs')}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-sm font-medium text-slate-700 hover:text-slate-900">Sign in</a>
            <a href="#" className="text-sm font-semibold px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors">Get started</a>
          </div>

          <button className="md:hidden p-2 rounded-lg border border-slate-200" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-4 animate-in">
            <div className="grid gap-3">
              {navItem('Product')}
              {navItem('Solutions')}
              {navItem('Pricing')}
              {navItem('Docs')}
            </div>
            <div className="flex items-center gap-3">
              <a href="#" className="text-sm font-medium text-slate-700 hover:text-slate-900">Sign in</a>
              <a href="#" className="text-sm font-semibold px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors">Get started</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
