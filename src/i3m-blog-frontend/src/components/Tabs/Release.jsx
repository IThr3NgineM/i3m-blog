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
      category: 'Launch',
    },
    {
      id: 2,
      title: 'I3M v1.5: Enhanced Physics Engine',
      description: 'An update focusing on physics improvements, allowing for more realistic interactions and better performance on various devices.',
      date: '03/20/23',
      image: releaseImage2,
      category: 'Physics',
    },
    {
      id: 3,
      title: 'I3M v2.0: Multiplayer Integration',
      description: 'Major release introducing multiplayer functionality, enabling collaborative interactions in virtual environments.',
      date: '06/15/23',
      image: releaseImage3,
      category: 'Multiplayer',
    },
    {
      id: 4,
      title: 'I3M v2.5: Expanded Platform Support',
      description: 'Broader platform compatibility, improved stability, and performance enhancements for smoother user experiences.',
      date: '09/05/23',
      image: releaseImage4,
      category: 'Platform Support',
    },
    {
      id: 5,
      title: 'I3M v3.0: AI-Driven Asset Generation',
      description: 'Introduction of AI-driven tools for generating assets and automating complex animations and environmental effects.',
      date: '12/12/23',
      image: releaseImage5,
      category: 'AI Tools',
    },
  ];

  return (
    <div className="px-8 py-6 bg-gray-50">
      {/* Releases Section */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-8 text-center">I3M Releases</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {releases.map((release) => (
            <div
              key={release.id}
              className="relative bg-cover bg-center rounded-lg shadow-lg overflow-hidden h-64"
              style={{ backgroundImage: `url(${release.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4 rounded-lg">
                <p className="text-sm uppercase font-semibold text-white mb-1">{release.category}</p>
                <h3 className="text-xl font-bold text-white mb-2">{release.title}</h3>
                <button className="text-xs text-white border border-white hover:bg-white hover:text-gray-800 font-semibold px-4 py-2 rounded-full mt-2 w-fit">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Release;
