import Footer from '@/components/Footer';
import CtaSection from '@/components/sections/CtaSection';
import FaqSection from '@/components/sections/FaqSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import HeroSection from '@/components/sections/HeroSection';
import ReviewsSection from '@/components/sections/ReviewsSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ReviewsSection />

      <div className='h-[40rem]'>
        <iframe
          width='100%'
          height='100%'
          src='https://www.youtube.com/embed/dQw4w9WgXcQ'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        />
      </div>

      <FeaturesSection />
      <CtaSection />
      <FaqSection />

      <Footer />
    </main>
  );
}
