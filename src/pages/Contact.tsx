import { memo } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import ContactMain from '@/sections/ContactMain';

function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactMain />
      </main>
      <Footer />
    </>
  );
}

export default memo(ContactPage);
