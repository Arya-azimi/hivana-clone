import { ContactUsSec } from "@/lib";
import Image from "next/image";
import Link from "next/link";

export function ContactForm() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-6 my-4">
        <div className="rounded-2xl p-4 border">
          <div className="flex flex-col lg:flex-row justify-center items-center">
            <div className="w-full lg:w-1/2 p-2 flex flex-col">
              <div className="flex flex-col">
                <Link href={ContactUsSec.topTexts.href}>
                  {ContactUsSec.topTexts.heading}
                </Link>
                <h3 className="font-semibold text-2xl md:text-3xl lg:text-4xl">
                  {ContactUsSec.topTexts.label}
                </h3>
              </div>
              <form
                action="POST"
                className="grid grid-cols-2 grid-rows-5 gap-4 my-4"
              >
                {ContactUsSec.inputs.map((input) => (
                  <input
                    key={input.name}
                    className={input.customStyle}
                    type={input.type}
                    placeholder={input.plchldr}
                  />
                ))}
              </form>
              <div className="w-full text-end">
                <button
                  type="submit"
                  className={ContactUsSec.submitButton.style}
                >
                  {ContactUsSec.submitButton.text}
                </button>
              </div>
            </div>
            <div className="w-full flex justify-center items-center lg:w-1/2 p-2">
              <Image
                src={ContactUsSec.logo.src}
                alt="contact us"
                width={250}
                height={250}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
