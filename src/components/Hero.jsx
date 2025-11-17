import Spline from '@splinetool/react-spline'
import { PlayCircle, Headphones, ShieldCheck } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20">
      <div className="absolute inset-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[900px] w-[900px] rounded-full bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.18),rgba(59,130,246,0.08)_45%,transparent_70%)] blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full bg-white/60 border border-white/40 text-slate-700 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-amber-400 animate-pulse" />
              AI Voice for Business
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900">
              Natural conversations that convert and support at scale
            </h1>
            <p className="mt-5 text-slate-600 text-lg leading-relaxed">
              Deploy lifelike voice agents for sales, support, and booking. Real-time, multilingual, fully programmable.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a href="#" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900 text-white font-medium shadow hover:bg-slate-800 transition-colors">
                Start free trial
              </a>
              <a href="#" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-slate-200 bg-white/70 backdrop-blur text-slate-800 font-medium hover:bg-white transition-colors">
                <PlayCircle size={18} /> Hear a demo
              </a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 text-left max-w-md mx-auto lg:mx-0">
              <div className="flex items-center gap-2 text-slate-600 text-sm"><Headphones size={18} className="text-indigo-500" /> 50+ voices</div>
              <div className="flex items-center gap-2 text-slate-600 text-sm"><ShieldCheck size={18} className="text-fuchsia-500" /> SOC2 ready</div>
              <div className="flex items-center gap-2 text-slate-600 text-sm"><span className="h-4 w-4 rounded-full bg-emerald-400" /> 99.9% uptime</div>
            </div>
          </div>

          <div className="relative h-[520px] rounded-2xl border border-white/40 bg-white/60 backdrop-blur overflow-hidden shadow-lg">
            <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-white/20" />
          </div>
        </div>
      </div>
    </section>
  )
}
