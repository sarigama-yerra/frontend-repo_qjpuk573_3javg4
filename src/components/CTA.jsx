import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-10 md:p-14 bg-gradient-to-tr from-indigo-600 via-fuchsia-600 to-amber-500 text-white shadow-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">Give your business a voice in minutes</h3>
              <p className="mt-3 text-white/90">Start with a free workspace, connect your CRM, and deploy a voice agent that books meetings and resolves tickets 24/7.</p>
            </div>
            <div className="flex md:justify-end">
              <a href="#" className="inline-flex items-center gap-2 bg-white text-slate-900 font-semibold px-6 py-3 rounded-xl shadow hover:opacity-95 transition">
                Create your agent <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
