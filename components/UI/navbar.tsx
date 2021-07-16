import Link from 'next/link';

export const Navbar = () => {
  return (
    <>
      <nav className='flex flex-wrap items-center p-3 bg-blue-500 '>
        <Link href='/'>
          <a className='inline-flex items-center p-2 mr-4 '>
            <span className='text-xl font-bold tracking-wide text-white uppercase'>
              Alex Cain
            </span>
          </a>
        </Link>
      </nav>
    </>
  );
};

// https://dev.to/andrewespejo/how-to-design-a-simple-and-beautiful-navbar-using-nextjs-and-tailwindcss-26p1