import React from 'react';
import EventCard from './EventCard';

const eventsData = [
  {
    title: "Unveiling the Future",
    date: "May 10, 2025",
    location: "IIMT Main Auditorium",
    description: "A journey through innovation and disruptive technologies shaping tomorrow.",
  },
  {
    title: "Voices of Change",
    date: "May 11, 2025",
    location: "TEDxIIMT Studio",
    description: "Speakers share personal stories that sparked movements and impact.",
  },
  {
    title: "Beyond Borders",
    date: "May 12, 2025",
    location: "Virtual",
    description: "A global collaboration session showcasing ideas that connect humanity.",
  },
];

const Events = () => {
  return (
    <section id="events" className="w-full px-6 py-16 bg-[#0f0f0f] text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
        Upcoming <span className="text-red-500">Events</span>
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {eventsData.map((event, index) => (
          <EventCard
            key={index}
            title={event.title}
            date={event.date}
            location={event.location}
            description={event.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Events;
