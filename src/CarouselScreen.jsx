import React, { useEffect, useState } from "react";
import { AnimateSharedLayout, motion } from "framer-motion";
import useApi from "./useApi";
import { getmovies, getonair } from "./Endpoints";

export const Carousel = () => {
  const [name, Setname] = useState();

  const { data: drops, error, loading, request: loadmovies } = useApi(
    getmovies
  );

  useEffect(() => {
    loadmovies();
  }, []);

  const getposter = (path) =>
    `https://image.tmdb.org/t/p/w440_and_h660_face${path}`;

  return (
    <div>
      <AnimateSharedLayout>
        <motion.div className="Container-car">
          {React.Children.toArray(
            drops.slice(0, 8).map((drop, i) => {
              return (
                <motion.div
                  onMouseEnter={() => Setname(drop.title)}
                  onMouseLeave={() => Setname("Straming Now")}
                  animate={{
                    width: "8%"
                  }}
                  className="right"
                  whileHover={{
                    width: "30%",
                    transition: { duration: "0.2", ease: "easeIn" }
                  }}
                  style={{
                    height: "50vh",
                    border: "2px solid #fff",

                    backgroundPosition: "center",
                    background: `url(${getposter(drop.poster_path)})`,
                    overflow: "hidden",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"
                  }}
                ></motion.div>
              );
            })
          )}
        </motion.div>

        <h2 style={{ color: "#fff", top: "5px", fontFamily: "lato" }}>
          {name}
        </h2>
      </AnimateSharedLayout>
    </div>
  );
};
