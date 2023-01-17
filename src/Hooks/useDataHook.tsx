import { useState, useEffect, useRef } from "react";
import * as mqtt from "mqtt/dist/mqtt.min";
const useDataHook = () => {

  const ws = new WebSocket("ws://138.68.8.53:8000/mqtt");

  const clientId = "digiterra-coding-task-1"
  const host = "ws://138.68.8.53:8000/mqtt";
  const options = {
    keepalive: 60000,
    clientId: clientId,
    protocolId: 'MQTT',
    protocolVersion: 4,
    clean: true,
    reconnectPeriod: 5000,
    connectTimeout: 30 * 1000,
    will: {
      topic: 'WillMsg',
      payload: 'Connection Closed abnormally..!',
      qos: 0,
      retain: false
    },
    rejectUnauthorized: false

  }
  
  const client = mqtt.connect(host, options)
  client.on('error', (err) => {
    console.log('Connection error: ', err)
    client.end()
  })
  



 // const [client, setClient] = useState<any>(null);
  const [connectionStatus, setConnectionStatus] = useState<string | null>(null);
  const [payload, setPayload] = useState<any>(null);
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

  // useEffect(() => {
  //   client.on("error", (err: any) => {
  //     console.log("this err", err);
  //   });
  // }, []);
  //   const mqttConnect = (host: Host, mqttOptions: Option) => {
  //     setConnectionStatus("connecting");
  //     setClient(mqtt.connect(host.current, mqttOptions));
  //   };
  //   useEffect(() => {
  //     mqttConnect(host.current, mqttOptions);
  //     if (client) {
  //       console.log(client);
  //       client.on("connect", () => {
  //         setConnectionStatus("Connected");
  //       });
  //       client.on("error", (err: any) => {
  //         console.error("Connection error: ", err);
  //         client.end();
  //       });

  //       client.on("message", (topic: any, message: any) => {
  //         const payload = { topic, message: message.toString() };
  //         setPayload(payload);
  //       });
  //     }
  //   }, []);

  const [datam, setDatam] = useState([125, 251, 196]);
  const newData = [130, 200, 190, 230, 340];
  useEffect(() => {
    const timer = setTimeout(() => {
      setDatam([...datam, ...newData]);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);
  return { datam };
};

export default useDataHook;
