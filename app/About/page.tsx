import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="text-blck">

      {/* ===== HEADER SECTION ===== */}
      <section className="px-10 py-20 max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold">About Us</h1>
        <p className="text-gray-800 mt-4 max-w-2xl">
                We can help you in the IT field, such as creating websites, social media content, and cyber security.
                We have more than 3 years of experience in this field.
        </p>

        <p className="text-sm text-gray-600 mt-6">Home &gt; About Us</p>

        <div className="flex justify-end">
          <div className="w-60 h-60 rounded-full border border-gray-700 flex items-center justify-center">
            <Image
              src="/image/ZL_New3.png"
              alt="Logo"
              width={250}
              height={250}
              className="rounded-full object-cover"
            />
          </div>
        </div>
      </section>

      {/*WHO WE ARE SECTION*/}
      <section className="px-10 py-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          <div className="overflow-hidden rounded-xl">
            <Image
              src="/image/cpy2.jpg"
              alt="Company"
              width={700}
              height={500}
              className="rounded-xl object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h3 className="text-blue-400 text-sm">Who We Are</h3>
            <h2 className="text-4xl font-bold mt-2">
              A Company Dedicated To Providing The Best IT Solutions
            </h2>

            <p className="text-gray-800 mt-6 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              euismod, nunc ut sollicitudin malesuada, nunc nisl aliquam
              mauris, eget aliquam nisl nunc euismod nunc. Sed euismod, nunc ut
              sollicitudin malesuada,
            </p>

            <ul className="grid grid-cols-2 mt-5 text-gray-700 gap-2">
              <li>✔️ Cybersecurity</li>
              <li>✔️ Web Development</li>
              <li>✔️ Ui Ux Designer</li>
              <li>✔️ AI Development</li>
            </ul>
          </div>
        </div>
      </section>

      {/*STATISTIC SECTION*/}
      <section className="px-10 py-20 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">
          Our Achievements in Numbers
        </h2>
        <p className="text-gray-800 max-w-3xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut sollicitudin malesuada, 
          nunc nisl aliquam mauris, eget aliquam nisl nunc euismod nunc. Sed euismod, nunc ut sollicitudin malesuada,
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 text-center">
          <div>
            <h3 className="text-4xl font-bold">2,950+</h3>
            <p className="text-gray-500 mt-1">Task Done</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">10</h3>
            <p className="text-gray-500 mt-1">Years of Experience</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">5</h3>
            <p className="text-gray-500 mt-1">Company Location</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">24</h3>
            <p className="text-gray-500 mt-1">Partner</p>
          </div>
        </div>
      </section>
    </div>
  );
}
