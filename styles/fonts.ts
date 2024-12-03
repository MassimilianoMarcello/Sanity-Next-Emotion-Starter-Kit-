// styles/fonts.ts
import  localFont  from 'next/font/local';

const zf = localFont({
  src: [
    { path: '../public/fonts/ZeitungPro-Thin.woff2', weight: '100', style: 'normal' },
    { path: '../public/fonts/ZeitungPro-Extralight.woff2', weight: '200', style: 'normal' },
    { path: '../public/fonts/ZeitungPro-Light.woff2', weight: '300', style: 'normal' },
    { path: '../public/fonts/ZeitungPro-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../public/fonts/ZeitungPro-Semibold.woff2', weight: '600', style: 'normal' },
    { path: '../public/fonts/ZeitungPro-Bold.woff2', weight: '700', style: 'normal' },
    { path: '../public/fonts/ZeitungPro-Extrabold.woff2', weight: '800', style: 'normal' },
    { path: '../public/fonts/ZeitungPro-Black.woff2', weight: '900', style: 'normal' }
  ],
  variable: '--font-zeitung-pro',
});

export { zf };
