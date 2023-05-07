import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function BC() {
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
      <header className='mt-8 pl-8 flex justify-between'>
          <div style={{borderRadius: "50%", height: "150px", width: "150px", backgroundImage: 'url(/images/katy.jpg)', backgroundSize: "cover"}}>
          </div>
          <div className='text-white pt-12 pr-8'>
            <p>Kathy Morris</p>
            <p><b>Software Engineer</b></p>
          </div>
        </header>
      <section className="text-white  container w-full m-auto p-8">
        <div>
          <p>Founder of Emiro Labs, Partner at Morris Ventures, and Entrepreneur. </p>
        </div>
        <div className='text-center mt-6'>
          <a className='text-white bg-slate-400 rounded-sm pl-24 pr-24 border-slate-200 p-2 border-r text-lg' href="/vcards/vcard.vcf">Contact Card</a>
        </div>
        <div className='flex justify-around mt-8'>
          <a href="tel:8056657149">
            <div style={{borderRadius: "50%", backgroundColor: "#23c401", height: "50px", width: "50px", backgroundImage: 'url(/images/smartphone.png)', backgroundSize: "30px", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}></div>
          </a>
          <a href="sms:8056657149">
            <div style={{borderRadius: "50%", height: "50px", width: "50px", backgroundImage: 'url(/images/text.png)', backgroundSize: "cover"}}></div>
          </a>
          <a href="mailto:kathy@emirolabs.com">
            <div style={{borderRadius: "50%", height: "50px", width: "50px", backgroundImage: 'url(/images/mail.png)', backgroundSize: "cover"}}></div>
          </a>

        </div>
      </section>
      </div>
    </div>
  );
}
