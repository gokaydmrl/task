import { useState, useEffect, useRef } from "react";
import * as mqtt from "mqtt/dist/mqtt.min";
import { IClientOptions } from "mqtt/dist/mqtt.min";

const useDataHook = () => {
  const clientId = "digiterra-coding-task-1";
  const hostt = "ws://138.68.8.53:8000/mqtt";
  const options = {
    keepalive: 60000000,
    clientId: clientId,
    protocolId: "MQTT",
    protocolVersion: 4,
    clean: true,
    reconnectPeriod: 5000,
    connectTimeout: 30 * 1000,
    will: {
      topic: "WillMsg",
      payload: "Connection Closed abnormally..!",
      qos: 0,
      retain: false,
    },
    rejectUnauthorized: false,
  };

  const [client, setClient] = useState<any>(null);
  const [connectionStatus, setConnectionStatus] = useState<boolean | null>(null);
  const [payload, setPayload] = useState<any>(null);

  const subscriptionn = {
    topic: "$SYS",
    qos: 1,
  };
  const mqttSub = (subscription: any) => {
    if (client) {
      const { topic, qos } = subscription;
      client.subscribe(topic, qos, (error: any) => {
        if (error) {
          console.log("Subscrie to topics error", error);
          return;
        }
        console.log("toopic", topic);
      });
    }
  };

  console.log("clieent", client);

  useEffect(() => {
    const makeConnection = () => {
      mqtt.connect(hostt, options as IClientOptions);
      setClient(mqtt.connect(hostt, options as IClientOptions));
    };
    makeConnection();
    mqttSub(subscriptionn);
    if (client) {
      console.log(client.connected);
      client.on("connect", () => {
        console.log("Connected");
      });
      client.on("error", (err: any) => {
        console.log("Connectiion errror: ", err);
      });
      client.on("reconnect", () => {
        console.log("Recconnectng");
      });
      client.on("message", (payload: any) => {
        console.log("payload", payload);
        setPayload(payload);
      });
    } else {
      console.log("no cli");
    }
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
