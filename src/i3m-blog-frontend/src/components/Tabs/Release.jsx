// components/Tabs/Release.jsx
import React from 'react';
import releaseImage1 from "../../assets/support1.jpg";
import releaseImage2 from "../../assets/support2.jpg";
import releaseImage3 from "../../assets/support3.jpg";
import releaseImage4 from "../../assets/community.png";
import releaseImage5 from "../../assets/Community2.png";

const Release = () => {
  const releases = [
    {
      id: 1,
      title: 'I3M v1.0: Initial Launch',
      description: 'The first stable release of I3M with core functionalities including basic physics, rendering, and initial developer tools.',
      date: '01/10/23',
      image: releaseImage1,
      features: [
        'Core physics engine',
        'Basic rendering capabilities',
        'Initial set of developer tools',
      ],
      notes: 'This release marked the foundation of I3M, establishing the core framework for future improvements.',
    },
    {
      id: 2,
      title: 'I3M v1.5: Enhanced Physics Engine',
      description: 'An update focusing on physics improvements, allowing for more realistic interactions and better performance on various devices.',
      date: '03/20/23',
      image: releaseImage2,
      features: [
        'Upgraded physics engine with collision detection',
        'Optimized for low-latency performance',
        'Improved asset loading speeds',
      ],
      notes: 'Feedback from initial users helped refine physics interactions, and support was added for real-time simulations.',
    },
    {
      id: 3,
      title: 'I3M v2.0: Multiplayer Integration',
      description: 'Major release introducing multiplayer functionality, enabling collaborative interactions in virtual environments.',
      date: '06/15/23',
      image: releaseImage3,
      features: [
        'Real-time multiplayer support',
        'Synchronous object interactions',
        'Enhanced communication protocols for low-latency',
      ],
      notes: 'The introduction of multiplayer opened up new possibilities for social and collaborative projects on the I3M platform.',
    },
    {
      id: 4,
      title: 'I3M v2.5: Expanded Platform Support',
      description: 'Broader platform compatibility, improved stability, and performance enhancements for smoother user experiences.',
      date: '09/05/23',
      image: releaseImage4,
      features: [
        'Support for mobile and tablet devices',
        'Improved cross-platform performance',
        'Stability and security enhancements',
      ],
      notes: 'This release made I3M accessible across more devices, providing a seamless experience regardless of platform.',
    },
    {
      id: 5,
      title: 'I3M v3.0: AI-Driven Asset Generation',
      description: 'Introduction of AI-driven tools for generating assets and automating complex animations and environmental effects.',
      date: '12/12/23',
      image: releaseImage5,
      features: [
        'AI-based asset generation tools',
        'Automated animations and environment effects',
        'Improved developer workflow with AI suggestions',
      ],
      notes: 'This innovative release incorporated AI tools, making it easier for developers to create immersive experiences with less manual effort.',
    },
  ];

  return (
    <div className="px-8 py-6">
      {/* Releases Section */}
      <section className="mb-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">I3M Releases</h2>
          <span className="flex-grow border-t-2 border-red-500 ml-4"></span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {releases.map((release) => (
            <div key={release.id} className="bg-white rounded-lg shadow-lg overflow-hidden p-4">
              <img src={release.image} alt={release.title} className="w-full h-48 object-cover rounded-t-lg" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-red-600">{release.title}</h3>
                <p className="text-gray-500 mb-2">{release.date}</p>
                <p className="text-gray-700">{release.description}</p>
                <ul className="mt-4 text-gray-700 list-disc list-inside">
                  {release.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <p className="mt-4 text-gray-600 italic">Release Notes: {release.notes}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Release;
