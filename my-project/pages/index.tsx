import Image from 'next/image';
import { Inter } from 'next/font/google';
import Button from '@mui/material/Button';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className="flex relative min-h-screen flex-col items-center justify-between p-0" style={{ minHeight: '100vh' }}>
      <div style={{
        backgroundImage: `url('/background2-min.png')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '100%',
        height: '100%',
        minHeight: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
      }}>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          zIndex: 1,
        }}>
          <div className="logo">
            {/* Optional content inside the div */}
          </div>
          <Link href="/blog">
            <Button className="mt-12" variant='outlined'>My Blog</Button>
          </Link>
          <p className='mt-24 text-white text-xl'>kathy@emirolabs.com</p>
        </div> 
      </div>
    </div>
  );
}
