// components/Tabs/Events.jsx
import React from 'react';
import eventImage1 from "../../assets/Finance.png";
import eventImage2 from "../../assets/Community1.png";
import eventImage3 from "../../assets/community.png";
import eventImage4 from "../../assets/Community2.png";

const EventsContent = () => {
  const pastEvents = [
    {
      id: 1,
      title: 'Building Interactive Virtual Worlds',
      speaker: 'Dr. Maria Gonzales',
      date: '08/12/24',
      image: eventImage1,
      description: 'Explore the intricacies of developing interactive, real-time virtual environments. Join us to discuss the latest in 3D rendering and virtual experiences.'
    },
    {
      id: 2,
      title: 'Introduction to I3M Development',
      speaker: 'Samuel Thompson',
      date: '06/18/24',
      image: eventImage2,
      description: 'An introductory session for beginners in the I3M community, covering the basics of development on the I3M engine and networking with fellow developers.'
    },
    {
      id: 3,
      title: 'Advanced AI in Gaming',
      speaker: 'Emma Li',
      date: '05/10/24',
      image: eventImage3,
      description: 'A deep dive into AI-driven gaming, examining how AI enhances game logic, player experience, and world-building in I3M-powered games.'
    },
    {
      id: 4,
      title: 'The Future of Blockchain in Virtual Worlds',
      speaker: 'Alex Roe',
      date: '03/15/24',
      image: eventImage4,
      description: 'Understand the role of blockchain in creating secure, decentralized environments. Learn from pioneers about integrating blockchain with I3M.'
    },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: '2025 I3M Developers Conference',
      date: '02/20/25',
      description: 'An exclusive annual event gathering I3M developers and enthusiasts to explore future developments, new tools, and case studies.',
    },
    {
      id: 2,
      title: 'Workshop on Advanced Physics Simulations',
      date: '04/05/25',
      description: 'Hands-on workshop on the latest physics simulation techniques in I3M, featuring real-time problem-solving with experts.',
    },
  ];

  return (
    <div className="px-8 py-6">
      {/* Past Events Section */}
      <section className="mb-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Community Events</h2>
          <span className="flex-grow border-t-2 border-red-500 ml-4"></span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pastEvents.map((event) => (
            <div key={event.id} className="flex bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={event.image} alt={event.title} className="w-1/3 h-32 object-cover" />
              <div className="p-4 w-2/3">
                <h3 className="text-lg font-semibold">{event.title}</h3>
                <p className="text-gray-500">Speaker: {event.speaker}</p>
                <p className="text-gray-500">{event.date}</p>
                <p className="text-gray-600 mt-2">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="mb-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Upcoming Events</h2>
          <span className="flex-grow border-t-2 border-red-500 ml-4"></span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="bg-gray-200 rounded-lg shadow-lg overflow-hidden p-4">
              <h3 className="text-lg font-semibold text-red-600">{event.title}</h3>
              <p className="text-gray-500">{event.date}</p>
              <p className="text-gray-600 mt-2">{event.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default EventsContent;
