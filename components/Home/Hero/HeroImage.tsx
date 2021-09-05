import Image from 'next/image'

export const HeroImage = () => {
  return (
    <div className="flex flex-wrap justify-center">
      <div className="px-4 w-10/20 sm:w-4/12">
        <Image
          src="https://images.unsplash.com/photo-1553484771-898ed465e931?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3900&q=80"
          alt="..."
          className="h-auto max-w-full align-middle border-none rounded-full shadow-lg"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
};
