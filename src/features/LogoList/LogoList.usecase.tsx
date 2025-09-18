interface LogoListBit {
  href: string;
  src: string;
  alt: string;
}

//  <Link href={'https://bmstu.ru'}>
//         <Logo src='/logo/bmstu.svg' alt='logo of university' />
//       </Link>
//       <Link href={'/404'}>
//         <Logo src='/logo/crown.svg' alt='logo of company' />
//       </Link>
//       <Link href={'/'}>
//         <Logo src='/logo/rs.svg' alt='logo of robotics center' />
//       </Link>

export const data: LogoListBit[] = [
  {
    href: 'https://bmstu.ru',
    src: '/logo/bmstu.svg',
    alt: 'logo of university',
  },
  {
    href: '/',
    src: '/logo/rs.svg',
    alt: 'logo of robotics center',
  },
];
