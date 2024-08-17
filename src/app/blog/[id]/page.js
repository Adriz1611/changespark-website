'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Eye, Heart } from 'lucide-react';

const BlogPage = () => {
  const [likes, setLikes] = useState(0);
  const [views, setViews] = useState(100); // Assuming a static view count for now.

  const handleLike = () => {
    setLikes(likes + 1);
    // Optionally, you can send this like count to the server.
  };

  return (
    <div className="min-h-screen py-8 px-8 lg:py-28 bg-background-100 pt-32">
      <div className="relative w-full h-96 mb-6">
        <Image
          src="/1.avif" 
          alt="Blog Image"
          fill
          className="object-cover rounded-md shadow-md"
        />
      </div>

      <div className="flex items-center justify-between mb-6 px-5">
        <button
          onClick={handleLike}
          className="text-red-600 flex gap-2 items-center"
        >
          <Heart /> <div className="text-black">{likes}</div>
        </button>
        <div className="text-lg flex gap-2 items-center">
          {views} <Eye />
        </div>
      </div>

      <div>
        <h1 className="text-3xl font-bold mb-4 text-center">Your Blog Title</h1>
        <p className="text-lg text-text-700 text-left leading-relaxed px-10 md:px-32 pt-3">
          Lorem ipsum odor amet, consectetuer adipiscing elit. Orci euismod
          aptent auctor platea pulvinar nulla phasellus, mollis aliquet. Auctor
          lacus ante enim fringilla nascetur euismod morbi metus. Netus elit ut
          maximus ultrices non lacus mollis sodales. Suscipit maecenas mauris
          pretium felis lectus accumsan felis nisl hac. Ridiculus fringilla
          commodo ullamcorper class, commodo imperdiet. Fusce tempus ante
          facilisis sollicitudin cubilia sit laoreet turpis.
          <br />
          <br />
          Litora commodo tempor tempus torquent taciti molestie lacus
          tristique. Vulputate maximus congue vel pellentesque egestas integer
          congue. Congue interdum parturient malesuada justo; nam aliquam elit.
          Facilisis adipiscing imperdiet eros euismod cursus dolor in non.
          Quisque nostra placerat lobortis libero litora senectus. Nam sagittis
          facilisis curabitur ullamcorper nisi curae imperdiet. Curae feugiat
          sem metus blandit magnis potenti taciti mauris. Potenti est pulvinar
          nisi dapibus magna nec.
          <br />
          <br />
          {/* Add more content as needed */}
        </p>
      </div>
    </div>
  );
};

export default BlogPage;
