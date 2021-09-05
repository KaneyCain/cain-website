import Image from 'next/image'

export const HeroImage = () => {
  return (
    <div className="flex flex-wrap justify-center">
      <div className="px-4 w-10/20 sm:w-4/12">
        <Image
          src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png"
          alt="..."
          className="h-auto max-w-full align-middle border-none rounded-full shadow-lg"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
};
