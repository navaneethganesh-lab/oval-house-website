'use client';

import { motion } from "framer-motion";
import { Globe, Egg, Truck, ShieldCheck } from "lucide-react";

export default function OVALHouseWebsite() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-center py-24 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-semibold tracking-tight mb-4 text-white"
        >
          OVAL House
        </motion.h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-slate-300">
          Premium poultry egg exports from India.<br />
          Consistent grading. Regulatory compliance. Middle East focus.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold mb-6">Corporate Profile</h2>
        <p className="text-slate-700">
          OVAL House is an India-based poultry egg exporter serving established importers
          across the Middle East with disciplined quality control and export compliance.
        </p>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <div><Egg /> Farm-fresh graded eggs</div>
          <div><ShieldCheck /> Export compliance & certification</div>
          <div><Truck /> Cold-chain logistics</div>
        </div>
      </section>

      <section className="bg-slate-900 text-white text-center py-20">
        <h2 className="text-3xl font-semibold mb-4">Initiate Trade Discussion</h2>
        <p className="text-slate-300">
          WhatsApp / Botim: +91 97404 79169
        </p>
      </section>
    </div>
  );
}