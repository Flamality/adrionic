import React from "react";
import NavBar from "../../components/core/NavBar/NavBar";
import Board from "../../components/community/Board";
import Hero from "./components/Hero/Hero";

import styles from "./Landing.module.css";

export default function Landing() {
  return (
    <div>
      <div>
        <NavBar />
        <Hero />
      </div>

      <div className='w-full flex flex-row max-md:flex-col max-md:items-center justify-evenly py-40 px-56 max-md:px-10 max-lg:px-24 relative'>
        <div className='w-full max-w-48 max-md:max-w-30 h-fit aspect-square rounded-full overflow-hidden border-2 border-zinc-700'>
          <img
            src={require("../../images/shot1.jpeg")}
            className='w-full aspect-square object-cover rounded-full'
            alt='Adrionic'
          />
        </div>
        <div className='w-fit min-w-44 max-md:min-w-32 ml-16 max-md:ml-0 max-md:mt-8'>
          <p className='text-2xl font-bold text-neutral-200 mb-1'>
            About adrionic
          </p>
          <p className='text-neutral-300 max-md:text-sm'>
            Adrian, better known as <strong>"Adrionic"</strong>, is a passionate
            and dedicated content creator with a strong focus on{" "}
            <strong>horror gaming</strong>. From spine-chilling indie horror
            titles to heart-pounding survival experiences, Adrian thrives on
            exploring the eerie and unsettling corners of the gaming world.
            <br />
            <br />
            With a deep love for engaging storytelling and immersive gameplay,
            he not only plays horror games but invites himself into every
            jumpscare and plot twist, sharing his genuine reactions and insights
            with his audience. His channel is a haven for horror enthusiasts
            seeking both entertainment and a sense of community among fellow
            fans of the genre.
            <br />
            <br />
            Beyond just gaming, Adrian values his community above all else,
            actively interacting with his audience through live streams,
            discussions, and special events. His goal is to craft the most
            thrilling and entertaining content possible, ensuring that every
            video and stream delivers a unique and unforgettable experience for
            his viewers.
          </p>
        </div>
      </div>

      <div className={styles.merch}>
        <img
          src={require("../../images/merch/hoodie.png")}
          className={styles.merch1}
        />
        <img
          src={require("../../images/merch/hoodie2.png")}
          className={styles.merch2}
        />
        <p className={styles.merchTitle}>MERCH</p>
        <p className={styles.merchDesc}>
          Adrionic offers a wide variety of merch for you to buy! From hoodies
          to socks to mousepads, there are alot of options to pick from.
        </p>
        <a
          href='https://adrionic-merch.printify.me'
          target='_blank'
          rel='noopener noreferrer'
          className={styles.shopButton}
        >
          Shop now
        </a>
      </div>
      <div className='bg-zinc-800 w-full flex flex-col items-center py-40 px-56 max-md:px-10 relative'>
        <p className='text-neutral-200 font-bold mb-8 text-lg'>
          Community wall
        </p>
        <Board />
      </div>
    </div>
  );
}
