import Header from '../components/header';
import ProfileCard from '../components/profilecard';
import { Skills, Projects, Contact } from '../components/sections';

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl space-y-12 px-6 py-12">
      <Header />
      <ProfileCard />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
