"use client";

import React from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import {Twitter, Linkedin} from "lucide-react";

const team_member = [
    {
        heading: "Director",
        people: [
            {
                name: "Satavisha Chakraborty",
                role: "Director",
                img: "/Satavisha.jpg",
                desc: "Strategic leader with 9+ years in social impact."
            },
            {
                name: "Soumen Nandy",
                role: "Director",
                img: "https://placehold.co/200x200.jpg",
                desc: "Dedicated director driving community empowerment."
            }
        ]
    },
    {
        heading: "Mentor",
        people: [
            {
                name: "Aarti Sharma",
                role: "Mentor",
                img: "/Aarti.jpg",
                desc: "Education innovator with expertise in project execution and curriculum design."
            },
        ]
    },
    {
        heading: "Advisor",
        people: [
            {
                name: "JayaKumar S",
                role: "Advisor",
                img: "/Jayakumar.jpg",
                desc: "Veteran leader with 40+ years in military, corporate, and nonprofit roles."
            },
        ]
    }
]

export default function Team() {
    const containerVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: {opacity: 0, y: 20},
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };
    return (
        <motion.div
            className="container mx-auto"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <motion.div
                className="mb-16 text-center lg:mb-28"
                variants={itemVariants}
            >
                <h6 className="md:pb-0 text-lg font-paragraph text-green-700 pt-24 pb-5 md:pt-0">
                    Meet the Team
                </h6>
                <h1 className="my-2 text-5xl md:text-5xl font-bold font-heading text-secondary-700 pb-5 dark:font-semibold">
                    Behind the Success: Our Dedicated Team
                </h1>
                <p className="mx-auto w-full text-secondary-700 max-w-4xl font-paragraph">
                    From visionary leadership to creative talent, and technical wizards,
                    each team member plays a pivotal role in delivering exceptional
                    service and innovative solutions.
                </p>
            </motion.div>

            <div className="flex flex-col items-center justify-center text-center gap-10">
                {team_member.map((team, key) => (
                    <div key={key} className="text-center flex flex-col items-center justify-center">
                        <h1 className="font-heading text-4xl font-bold my-10 uppercase">{team.heading}</h1>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-20 ">
                            {team.people.map((person, key) => (
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    whileHover={{
                                        scale: 1.05,
                                        boxShadow:
                                            "0 20px 25px -5px rgba(59, 130, 246, 0.1), 0 10px 10px -5px rgba(139, 92, 246, 0.1)",
                                    }}
                                    key={key} className="flex-col flex items-center text-center rounded-lg w-80 py-16 px-8 bg-background-200">
                                    <Image className="rounded-full mb-20 aspect-square object-cover" width={150} height={150} src={person.img} alt={person.name} />
                                    <h2 className="font-heading font-semibold text-2xl text-background-800">{person.name}</h2>
                                    <p className="font-paragraph uppercase mt-3 font-medium text-accent-700">{person.role}</p>
                                    <p className="font-paragraph font-medium text-background-800 mt-3">{person.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {users.map((user, key) => (
          <motion.div key={key} variants={itemVariants}>
            <motion.div
              className="rounded-lg bg-background-200 shadow-md overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center p-6">
                <div className="relative w-36 h-36 mx-auto mb-6">
                  <Image
                    src={user.avatar ? user.avatar : ""}
                    alt={user.name}
                    fill
                    className="rounded-full object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/150"; // Fallback image
                    }}
                  />
                </div>
                <h5 className="text-lg font-medium font-heading text-secondary-700">
                  {user.name}
                </h5>
                <p className="mb-2 text-base font-semibold font-paragraph text-green-700">
                  {user.role ? user.role : "Volunteer"}
                </p>
                <div className="flex items-center justify-center gap-1.5">
                  <a
                    href={props.twitterLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="text-purple-900 hover:text-purple-700 transition-colors h-5 w-5" />
                  </a>
                  <a
                    href={props.linkedinLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="text-purple-900 hover:text-purple-700 transition-colors h-5 w-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>*/}
        </motion.div>
    );
}
