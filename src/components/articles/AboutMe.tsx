import ParticlesBackground from '../../helpers/particles/ParticlesBG';
import Header from './Header';
import './style.aboutme.css';

export default function AboutMe(): JSX.Element {
  return (
    <>
      <ParticlesBackground />
      <section className="about-me">
        <Header />

      </section>
    </>
  );
}
