"use client";

import React, { useEffect, useState } from "react";
import { StaffMember } from "@/interfaces/general";
import Link from "next/link";

const Team = () => {
  const [showStaffDetails, setShowStaffDetails] = useState<boolean>(false);
  const [activeUser, setActiveUser] = useState<number>(0);
  // const [content, setContent] = useState<Content[]>([]);
  // const [activeService, setActiveService] = useState<number>(1);
  const [staff, setStaff] = useState<StaffMember[]>([]);

  useEffect(() => {
    loadStaff();
  }, []);

  const loadStaff = () => {
    setStaff([
      {
        id: 1,
        name: "Jared",
        title: "Member services / La Plata office manager",
        url: "next/next_assets/images/staff/jared.jpg",
      },
      {
        id: 2,
        name: "Florencia",
        title: "Member services",
        url: "next/next_assets/images/staff/maria_florencia.jpg",
      },
      {
        id: 3,
        name: "Lucía",
        title: "Member services",
        url: "next/next_assets/images/staff/lucia.jpg",
      },
      {
        id: 4,
        name: "Patrick",
        title: "Accounting",
        url: "next/next_assets/images/staff/patrick.jpg",
      },
      {
        id: 5,
        name: "Helen",
        title: "Training",
        url: "next/next_assets/images/staff/helen.jpg",
      },
      {
        id: 6,
        name: "Yana",
        title: "Member services",
        url: "next/next_assets/images/staff/yana.jpg",
      },
      {
        id: 7,
        name: "Karen",
        title: "Member services",
        url: "next/next_assets/images/staff/karen.jpg",
      },
      {
        id: 9,
        name: "Paul",
        title: "System Administrator",
        url: "next/next_assets/images/staff/paul_h.jpg",
      },
      // {
      //     id: 10,
      //     name: 'Mike',
      //     title: 'Vice President, External Opportunities/ProZ*Pay',
      //     url: 'next/next_assets/images/staff/mike_donlin.jpg',
      // },
      {
        id: 10,
        name: "Andrew",
        title: "ProZ Pro Bono",
        url: "next/next_assets/images/staff/andrew_morris.jpg",
      },
      {
        id: 11,
        name: "Hayjor",
        title: "Member services",
        url: "next/next_assets/images/staff/hayjor.jpg",
      },
      {
        id: 12,
        name: "Andrea",
        title: "Member services",
        url: "next/next_assets/images/staff/andrea.jpg",
      },
      {
        id: 13,
        name: "Janelle",
        title: "Project Manager",
        url: "next/next_assets/images/staff/janelle.jpg",
      },
      {
        id: 14,
        name: "Tatiana",
        title: "Member services",
        url: "next/next_assets/images/staff/tatiana_fedorenko.jpg",
      },
      {
        id: 15,
        name: "Nicolás",
        title: "Developer",
        url: "next/next_assets/images/staff/nicolas_calcagno.png",
      },
      {
        id: 16,
        name: "Lukas",
        title: "Developer",
        url: "next/next_assets/images/staff/lukas_fonseca.jpg",
      },
      {
        id: 17,
        name: "Fawad",
        title: "Developer",
        url: "next/next_assets/images/staff/fawad_aslam.jpg",
      },
      {
        id: 18,
        name: "Kevin",
        title: "Senior Developer",
        url: "next/next_assets/images/staff/kevin_kiprotich.jpg",
      },
      {
        id: 19,
        name: "Kodi",
        title: "Developer",
        url: "next/next_assets/images/staff/kodi_dotterer.jpg",
      },
      {
        id: 20,
        name: "Benedict",
        title: "Senior Developer",
        url: "next/next_assets/images/staff/benedict_ouma.jpg",
      },
      {
        id: 21,
        name: "Luana",
        title: "Member services",
        url: "next/next_assets/images/staff/luana-zalazar.png",
      },
      {
        id: 22,
        name: "Naiara",
        title: "Member services",
        url: "next/next_assets/images/staff/naiara-solano.png",
      },
      {
        id: 23,
        name: "Joseph",
        title: "Member services",
        url: "next/next_assets/images/staff/joseph-oyange.png",
      },
      {
        id: 24,
        name: "Isabella",
        title: "Member services",
        url: "next/next_assets/images/staff/isabella-capuselli.png",
      },
      {
        id: 25,
        name: "Juan",
        title: "Project Manager",
        url: "next/next_assets/images/staff/juan-ignacio-castillo.png",
      },
      {
        id: 26,
        name: "Denis",
        title: "Developer",
        url: "next/next_assets/images/staff/denis-maingi.jpg",
      },
      {
        id: 27,
        name: "Saint",
        title: "Member services",
        url: "next/next_assets/images/staff/saint_machiste.jpg",
      },
      {
        id: 28,
        name: "Ana",
        title: "Member services",
        url: "next/next_assets/images/staff/ana_moriano.png",
      },
      {
        id: 30,
        name: "Valentín",
        title: "Member services",
        url: "next/next_assets/images/staff/3762800_r6495cb9ac440b.png",
      },
      {
        id: 32,
        name: "Laura",
        title: "Member services",
        url: "next/next_assets/images/staff/laura.png",
      },
      {
        id: 33,
        name: "Erika",
        title: "Member services",
        url: "next/next_assets/images/staff/erika.png",
      },
      {
        id: 34,
        name: "Charlotte",
        title: "Member services",
        url: "next/next_assets/images/staff/charlotte.png",
      },
      {
        id: 35,
        name: "Agostina",
        title: "Member services",
        url: "next/next_assets/images/staff/agostina.png",
      },
      {
        id: 36,
        name: "Igor",
        title: "Senior Developer",
        url: "next/next_assets/images/staff/igor.jpg",
      },
      {
        id: 37,
        name: "Monica",
        title: "Operations Outsourcing",
        url: "next/next_assets/images/staff/monica_new.jpg",
      },
      {
        id: 38,
        name: "Susan",
        title: "Communications Coordinator",
        url: "next/next_assets/images/staff/susan.jpg",
      },
      {
        id: 39,
        name: "Tanya",
        title: "Program Manager",
        url: "next/next_assets/images/staff/tanya.png",
      },
      {
        id: 40,
        name: "Brian",
        title: "UI/UX Designer",
        url: "next/next_assets/images/staff/brian.png",
      },
      {
        id: 41,
        name: "David",
        title: "Developer",
        url: "next/next_assets/images/staff/david-lekopien.jpeg",
      },
      {
        id: 42,
        name: "Justin Chlebus",
        title: "Developer",
        url: "next/next_assets/images/staff/justin.jpg",
      },
    ]);
  };

  const activeStaff = (usr: StaffMember, activate: boolean) => {
    setStaff((prevStaff) =>
      prevStaff.map((s) => (s.id === usr.id ? { ...s, active: activate } : s))
    );
  };

  const getUserClasses = (usr: StaffMember) => ({
    "p-3 bg-tertiary dark:bg-slate-700": usr.id === 44,
  });

  const getDetailClasses = (usr: StaffMember) => ({
    [`user_detail_${usr.id}`]: true,
    "absolute top-0 left-0 bg-white dark:bg-slate-800 dark:text-white p-3 z-10": usr.id !== 44,
    relative: usr.id === 44,
    hidden: !(usr.active || usr.id === 44),
  });

  return (
    <div className="flex flex-wrap items-start justify-center gap-2 px-4 w-full">
      {staff.map((usr) => (
        <div
          key={usr.id}
          className={`transition-all duration-800 ease-in-out rounded-xl overflow-hidden flex items-start justify-start relative`}
          onMouseEnter={() => {
            activeStaff(usr, true);
            setShowStaffDetails(true), setActiveUser(usr.id);
          }}
          onMouseLeave={() => {
            activeStaff(usr, false);
            setShowStaffDetails(false);
          }}
        >
          <div
            title={usr.name}
            style={{ backgroundImage: `url(${usr.url})` }}
            className="bg-no-repeat bg-cover bg-center w-[170px] h-[200px] flex-grow"
          ></div>

          <div
            className={`${usr.id == 42 ? "" : "w-full absolute top-0 left-0"} ${(showStaffDetails && usr.id === activeUser) || usr.id == 42 ? " bg-accent dark:bg-slate-800 dark:text-white p-3 z-10" : "hidden"} h-[200px] flex flex-col items-start justify-start`}
          >
            <p className="font-merriweather text-2xl text-primary-700 dark:text-slate-300 font-bold mb-2">
              {usr.name}
            </p>
            <p className="text-grey-700 dark:text-slate-100 text-md mb-2 flex-grow w-full break-words whitespace-normal">
              {usr.id === 42 ? "August 28th '85 - September 2nd '07" : usr.title}
            </p>
            {usr.id === 42 && (
              <div>
                <p className="text-gray-800 dark:text-slate-100 text-sm italic mb-3">In Memoriam</p>
                <Link
                  href="/justin"
                  rel="noopener noreferrer"
                  className="text-primary dark:text-slate-300 text-sm"
                >
                  Read more
                </Link>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Team;
