export default function AboutSection() {
  return (
    <section className="border-t border-[#4F382B] py-6 mt-24">
      <h2 className="text-3xl text-[#917E6E] uppercase mb-6">o nas</h2>
      <div className="max-w-[1002px]">
        <p className="text-2xl text-[#34302D] mb-6">
          W realizowanych przez nas projektach <strong>łączymy funkcję z estetyką</strong>. Często zdarza się, że design
          utrudnia lub wręcz uniemożliwia osiągniecie założeń akustycznych, wtedy wkraczamy do akcji..
        </p>
        <button className="border border-[#34302D] rounded px-8 py-4 text-lg text-[#4F382B]">Napisz do nas!</button>
        <div className="flex gap-6 mt-[73px]">
          <div className="bg-[#BFADA1] w-[254px] h-[388px]"></div>
          <div className="bg-[#BFADA1] w-[254px] h-[388px]"></div>
          <div className="bg-[#BFADA1] w-[254px] h-[388px]"></div>
        </div>
      </div>
    </section>
  )
}

