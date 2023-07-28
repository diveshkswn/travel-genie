import Home from "@/screens/Home/Home";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    fetch('https://api.ipdata.co/?api-key=c52cc586bb4f34411b035540bf6a17ad8009a71a79aabac724bda0f0').then(async(res) => {
      const response = await res.json();
      sessionStorage.setItem('locationInfo', JSON.stringify(response));
    })
  }, [])
  return <Home />;
}
