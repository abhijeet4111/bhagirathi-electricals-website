import HeroSection from '../components/home/HeroSection';
import CompanyIntro from '../components/home/CompanyIntro';
import ServicesOverview from '../components/home/ServicesOverview';
import StatsSection from '../components/home/StatsSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CompanyIntro />
      <ServicesOverview />
      <StatsSection />
    </div>
  );
}
