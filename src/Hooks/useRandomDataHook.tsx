import { useState, useEffect, useRef } from "react";
import * as mqtt from "mqtt/dist/mqtt.min";
import { IClientOptions, IClientSubscribeOptions, QoS } from "mqtt/dist/mqtt.min";

const useRandomDataHook = () => {
  const reachedAt = () => new Date().toLocaleTimeString("tr-TR");
  const newRandomData = Math.floor(Math.random() * 200);
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
