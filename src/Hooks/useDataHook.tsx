import { useState, useEffect, useRef } from "react";
import * as mqtt from "mqtt/dist/mqtt.min";
import { IClientOptions, IClientSubscribeOptions, QoS } from "mqtt/dist/mqtt.min";

const useDataHook = () => {
  console.log("hook worked");

  const clientId = "digiterra-coding-task-1";
  const hostt = "ws://138.68.8.53:8000/mqtt";
  const options = {
    port: 1883,
    host: "138.68.8.53:8000",
    hostname: clientId,
    username: clientId,
    protocol: "ws",
    keepalive: 60000000,
    protocolId: "MQTT",

    protocolVersion: 4,
    clean: true,
    queueQoSZero: true,

    reconnectPeriod: 1000,
    connectTimeout: 30 * 1000,

    will: {
      topic: "$SYS",
      payload: "Cnnection Closed abnormally..!",
      qos: 0,
      retain: false,
    },
    rejectUnauthorized: false,
  };

  // const [client, setClient] = useState<any>(null);
  const [payload, setPayload] = useState<any>(null);
  // console.log(payload);

  interface Sub {
    topic: string;
    qos: QoS;
  }
  const subscriptionn: Sub = {
    topic: "$SYS",
    qos: 0,
  };

  /*
  useEffect(() => {
    mqtt.connect(hostt, options as IClientOptions);
    const client = mqtt.connect(hostt, options as IClientOptions);
    client.on("connect", () => {
      console.log("Connected");
    });
    const { qos } = subscriptionn;
    client.subscribe(subscriptionn.topic, { qos }, (err) => console.log("subscribe error", err));
    // mqttSub(subscriptionn);
    console.log(client);

    client.on("error", (err: any) => {
      console.log("Connectiion errror: ", err);
    });
    client.on("reconnect", () => {
      console.log("Reconnectng");
    });
    client.on("message", (payload: any) => {
      console.log("payload", payload);
      setPayload(payload);
    });
  }, []);
*/
  const reachedAt = new Date().toLocaleTimeString("tr-TR");

  //  const [time, setTime] = useState(new Date().toLocaleTimeString("tr-TR"));
  const [times, setTimes] = useState([reachedAt]);
  const [data, setData] = useState([Math.floor(Math.random() * 100 * 5)]);
  console.log(reachedAt);
  const newData = Math.floor(Math.random() * 100 * 5);
  useEffect(() => {
    console.log("effect worked");

    const timer = setInterval(() => {
      setTimes((prev) => [...prev, reachedAt]);
      setData((prev) => [...prev, newData]);
    }, 1000);
    return () => clearTimeout(timer);
  }, [reachedAt]);
  return { times, data };
};

export default useDataHook;
