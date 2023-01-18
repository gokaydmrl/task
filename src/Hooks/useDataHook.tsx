import { useState, useEffect, useRef } from "react";
import * as mqtt from "mqtt/dist/mqtt.min";
import { IClientOptions, IClientSubscribeOptions } from "mqtt/dist/mqtt.min";

const useDataHook = () => {
  const clientId = "digiterra-coding-task-1";
  const hostt = "ws://138.68.8.53:8000/mqtt";
  const options = {
    
    keepalive: 60000000,
    clientId: clientId,
    protocolId: "MQTT",
    protocolVersion: 4,
    clean: true,
    reconnectPeriod: 1000,
    connectTimeout: 30 * 1000,
    will: {
      topic: "WillMsg",
      payload: "Cnnection Closed abnormally..!",
      qos: 0,
      retain: false,
    },
    rejectUnauthorized: false,
  };

  // const [client, setClient] = useState<any>(null);
  const [connectionStatus, setConnectionStatus] = useState<boolean | null>(null);
  const [payload, setPayload] = useState<any>(null);
console.log(payload);

  const subscriptionn = {
    topic: "$SYS",
    qos: 0,
  };
  // const mqttSub = (subscription: any) => {
  //   const { topic, qos } = subscription;
  //   client.subscribe(topic, qos, (error: any) => {
  //     if (error) {
  //       console.log("Subscie to topics error", error);
  //       return;
  //     }
  //     console.log("toopic", topic);
  //   });
  // };

  // const makeConnection = () => {
  //   mqtt.connect(hostt, options as IClientOptions);
  //   setClient(mqtt.connect(hostt, options as IClientOptions));
  // };

  // console.log("clieent", client);

  useEffect(() => {
    mqtt.connect(hostt, options as IClientOptions);
    const client = mqtt.connect(hostt, options);
    client.subscribe(subscriptionn.topic, 0, (err) => console.log("subscribe error", err));
    // mqttSub(subscriptionn);
    console.log(client);
    client.on("connect", () => {
      console.log("Connected");
    });
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

  interface Host {
    current: string;
  }
  interface Option {
    username: string;
    password: string;
    clientId: string;
    protocol: "ws";
  }

  const mqttOptions: Option = {
    username: "username",
    password: "password",
    clientId: "digiterra-coding-task-1",
    protocol: "ws",
  };

  const [datam, setDatam] = useState([125, 251, 196]);
  const newData = [130, 200, 190, 230, 340, 50, 100, 90];
  useEffect(() => {
    const timer = setTimeout(() => {
      setDatam([...datam, ...newData]);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);
  return { datam };
};

export default useDataHook;
