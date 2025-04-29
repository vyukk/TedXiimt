import React from 'react';
import Speaker from './Speaker';

const speakersData = [
  {
    image: "/speakers/speaker1.jpg",
    name: "Ravi Kumar",
    title: "Tech Visionary",
    description: "Founder of CodeIndia and an advocate for rural digital literacy.",
  },
  {
    image: "/speakers/speaker2.jpg",
    name: "Anjali Mehta",
    title: "Climate Activist",
    description: "Empowering youth to take action against climate change.",
  },
  {
    image: "/speakers/speaker3.jpg",
    name: "Dr. Sameer Rana",
    title: "Neuroscientist",
    description: "Researching human consciousness through technology.",
  },
];

const SpeakerSection = () => {
  return (
    <section id="speakers" className="w-full px-6 py-16 bg-black text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
        Meet Our <span className="text-red-500">Speakers</span>
      </h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {speakersData.map((speaker, index) => (
          <Speaker
            key={index}
            image={speaker.image}
            name={speaker.name}
            title={speaker.title}
            description={speaker.description}
          />
        ))}
      </div>
    </section>
  );
};

export default SpeakerSection;
