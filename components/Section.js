'use client';

import { Sprout, RabbitIcon, AtomIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const items = [
  {
    icon: <Sprout strokeWidth={0.5} className="w-16 h-16 text-[#333333]" />,
    title: 'ETHICAL PRODUCTS',
    desc: 'from ingredients to manufacture',
  },
  {
    icon: <RabbitIcon strokeWidth={0.5} className="w-16 h-16 text-[#333333]" />,
    title: 'TESTED ON HUMANS',
    desc: 'never on animals',
  },
  {
    icon: <AtomIcon strokeWidth={0.5} className="w-16 h-16 text-[#333333]" />,
    title: 'FUNCTIONAL FORMULAS',
    desc: 'made to exceed expectations',
  },
];

export default function EthicalSection() {
  return (
    <section className="py-12   text-[#333333]">
      {/* Top line */}
      <div className="h-[0.2px] bg-black mb-10" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center px-6 py-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="sectitle">{item.title}</h3>
            <p className="secP">{item.desc}</p>
          </motion.div>
        ))}

        {/* Vertical dividers on lg screens */}
        <div className="hidden lg:block absolute top-0 bottom-0 left-1/3 w-[0.2px] bg-black"></div>
        <div className="hidden lg:block absolute top-0 bottom-0 left-2/3 w-[0.2px] bg-black"></div>
      </div>

      {/* Bottom line */}
      <div className="h-[0.2px] bg-black mt-10" />
    </section>
  );
}
