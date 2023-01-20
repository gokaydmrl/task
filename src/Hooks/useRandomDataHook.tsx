import { useState, useEffect, useRef } from "react";
import * as mqtt from "mqtt/dist/mqtt.min";
import { IClientOptions, IClientSubscribeOptions, QoS } from "mqtt/dist/mqtt.min";

const useRandomDataHook = () => {
/*
Since I didn't reach the mqtt metrics, i created a hook 
that returns random numbers every 3 seconds.
Then, I update the data using spread operator
since javascript treats them as ref, meaning that
the changes inside an array doesnt update the array.
*/

  const reachedAt: () => string = () => new Date().toLocaleTimeString("tr-TR");
  const newRandomData: number = Math.floor(Math.random() * 200);
  const [times, setTimes] = useState<string[]>([reachedAt()]);
  const [data, setData] = useState<number[]>([newRandomData]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimes((prev) => [...prev, reachedAt()]);
      setData((prev) => [...prev, newRandomData]);
    }, 3000);
    return () => clearTimeout(timer);
  }, [newRandomData]);
  return { times, data };
};

export default useRandomDataHook;
