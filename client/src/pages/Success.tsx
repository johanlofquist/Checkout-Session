import { useEffect, useState } from "react";
import { verifySessionPost } from "../services/stripeService";

export const Success = () => {
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    if (!verified) {
      const verifySession = async () => {
        let sessionId;
        const sessionIdFromLS = localStorage.getItem("sessionId");

        if (sessionIdFromLS) {
          sessionId = JSON.parse(sessionIdFromLS);
        }

        const response = await verifySessionPost(sessionId);

        if (response.status === 200) {
          setVerified(response.data.verified);
        }
      };
      verifySession();
    }
  }, [verified]);

  return (
    <div className="bg-[--mustard] flex justify-center items-center h-[500px]">
      <div className="bg-[#f2f2f2] border border-black black-shadow w-[350px] h-[200px] flex flex-col items-center justify-around relative gap-2">
        <p>Thank you for your order!</p>
      </div>
    </div>
  );
};
