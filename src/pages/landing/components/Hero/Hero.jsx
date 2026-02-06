import React from "react";

import styles from "./Hero.module.css";
import { GiCorn, GiRetroController } from "react-icons/gi";
import { FaArrowDown, FaLink, FaYoutube } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Hero() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.accent} />
        <div className={styles.content}>
          {/* <h1 className={styles.title}>ADRIONIC</h1> */}
          <img
            src={require("../../../../images/branding/adrionicbannerwitheverything.png")}
            alt='Adrionic'
            className={styles.title}
          />
          <div className={styles.cta}>
            <a
              href='https://www.youtube.com/channel/UCwkFrWvPdVA3O0zHCeALiMA'
              target='_blank'
              rel='noopener noreferrer'
            >
              <button>
                <FaYoutube /> Watch on YouTube
              </button>
            </a>
          </div>
          {/* <div className={styles.links}>
            <a
              href='https://www.youtube.com/channel/UCwkFrWvPdVA3O0zHCeALiMA'
              target='_blank'
              rel='noopener noreferrer'
            >
              Channel <FaExternalLinkAlt />
            </a>
          </div> */}
        </div>

        <div className={styles.arrow}>
          <FaArrowDown />
        </div>

        <div className={styles.divider} />
      </div>
    </div>
  );
}
