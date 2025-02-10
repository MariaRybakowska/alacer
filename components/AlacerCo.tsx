export default function AboutSection() {
  return (
    <section className="border-t border-[#4F382B] py-6 mt-24">
      <div className="xl:grid xl:grid-cols-12 xl:gap-8">
        <h2 className="text-3xl text-[#917E6E] uppercase mb-6 xl:mb-0 xl:col-span-3">
          Alacer co.
        </h2>
        <div className="xl:col-span-9 xl:pl-8">
          <p className="text-2xl text-[#34302D] mb-6">
            W realizowanych przez nas projektach{" "}
            <strong>łączymy funkcję z estetyką</strong>. Często zdarza się, że
            design utrudnia lub wręcz uniemożliwia osiągniecie założeń
            akustycznych, wtedy wkraczamy do akcji..
          </p>
          <button className="border border-[#34302D] rounded px-8 py-4 text-lg text-[#4F382B]">
            Napisz do nas!
          </button>
          <div className="flex gap-6 mt-[73px]">
            <div className="bg-[#BFADA1] w-[33%] h-[388px]"></div>
            <div className="bg-[#BFADA1] w-[33%] h-[388px]"></div>
            <div className="bg-[#BFADA1] w-[33%] h-[388px]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
