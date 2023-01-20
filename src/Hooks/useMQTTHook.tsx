import { useState, useEffect, useRef } from "react";
import * as mqtt from "mqtt/dist/mqtt.min";
import { IClientOptions, IClientSubscribeOptions, QoS } from "mqtt/dist/mqtt.min";

const useMQTTHook = () => {
  const clientId = "digiterra-coding-task-1";
  const hostt = "ws://138.68.8.53:8000/mqtt";
  const options: IClientOptions = {
    // port: 1883,
    // host: "138.68.8.53:8000",
    // hostname: clientId,
    // username: clientId,
    protocol: "ws",
    keepalive: 60000000,
    protocolId: "MQTT",
    clientId: clientId,
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

  const [payload, setPayload] = useState<any>(null);

  interface ISub {
    topic: string;
    qos: QoS;
  }
  const subscriptionn: ISub = {
    topic: "$SYS",
    qos: 0,
  };

  useEffect(() => {
    mqtt.connect(hostt, options);
    const client = mqtt.connect(hostt, options);
    client.on("connect", () => {
      console.log("Connected");
    });
    const { topic, qos } = subscriptionn;
    client.subscribe(topic, { qos }, (err) => console.log("subscribe error", err));

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
};
export default useMQTTHook;
