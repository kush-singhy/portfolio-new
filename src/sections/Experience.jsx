import ExperienceCard from '../components/ExperienceCard';
import westpacIcon from '../assets/westpac.svg';
import unswIcon from '../assets/unsw.svg';
import amexIcon from '../assets/amex.svg';

export default function Experience() {
  return (
    <section id="experience" className="flex flex-col gap-6">
      <div className="relative">
        <p className="relative z-10 text-2xl font-bold">Experience</p>
        <span className="absolute bg-[#CBE7FF] w-[125px] h-[15px] bottom-0 -left-1 rotate-1" />
      </div>
      <div className="space-y-8 relative before:absolute before:mt-7 before:ml-3 before:h-[calc(100%-28px)] before:w-[3px] before:bg-gradient-to-tl before:from-transparent before:bg-slate-300 before:to-transparent">
        <ExperienceCard
          date="Jul 2024 - Now"
          title="Westpac"
          role="UI Developer"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue sapien et odio feugiat, vitae sollicitudin quam rhoncus."
          icon={westpacIcon}
        />

        <ExperienceCard
          date="Jan 2020 - May 2024"
          title="UNSW"
          role="B. Computer Science & B. Actuarial Studies"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue sapien et odio feugiat, vitae sollicitudin quam rhoncus."
          icon={unswIcon}
        />

        <ExperienceCard
          date="Mar 2022 - Sep 2022"
          title="American Express"
          role="Global Merchant Services Risk Intern"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue sapien et odio feugiat, vitae sollicitudin quam rhoncus."
          icon={amexIcon}
        />
      </div>
    </section>
  );
}
