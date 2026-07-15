export function Footer() {
  return (
    <section className="pt-12 pb-40 flex flex-col items-center text-center">
      <div className="h-[1px] w-24 mx-auto bg-gradient-to-r from-transparent via-[#6B2D31] to-transparent" />
      
      <p className="mt-12 text-xs text-[#6B2D31]/70 font-sans uppercase tracking-[0.3em]">
        FORMAL INVITATION TO FOLLOW
      </p>

      <p className="mt-6 font-serif text-5xl md:text-6xl" style={{ color: "#6B2D31" }}>
        M <span className="font-serif italic text-[#B38B59] font-light text-4xl mx-2">&amp;</span> H
      </p>

      <a
        href="https://www.instagram.com/zylo.invites/"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-16 text-[10px] uppercase tracking-widest text-[#6B2D31]/70 hover:text-[#6B2D31] transition-colors"
      >
        Digital Experience by Zylo Invites
      </a>
    </section>
  );
}
