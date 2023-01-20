import { useState, useEffect, useRef } from "react";
import * as mqtt from "mqtt/dist/mqtt.min";
import { IClientOptions, IClientSubscribeOptions, QoS } from "mqtt/dist/mqtt.min";

const useRandomDataHook = () => {
  console.log("hook worked");

  const reachedAt = () => new Date().toLocaleTimeString("tr-TR");

  // const [times, setTimes] = useState<string[]>([new Date().toLocaleTimeString("tr-TR")]);
  const [times, setTimes] = useState<string[]>([reachedAt()]);

  const [data, setData] = useState<number[]>([Math.floor(Math.random() * 100 * 2)]);
  const newData = Math.floor(Math.random() * 200);

  useEffect(() => {
    const timer = setInterval(() => {
      //  setTimes((prev) => [...prev, new Date().toLocaleTimeString("tr-TR")]);
      setTimes((prev) => [...prev, reachedAt()]);

      setData((prev) => [...prev, newData]);
    }, 3000);
    return () => clearTimeout(timer);
  }, [newData]);
  return { times, data };
};

export default useRandomDataHook;
