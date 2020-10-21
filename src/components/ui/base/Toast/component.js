import React, { useEffect, useRef } from "react";
import T from "react-native-easy-toast";

export default function Toast({ toast }) {
  const refT = useRef(null);

  useEffect(() => {
    if (toast.length > 0) {
      refT.current.show(toast, 3000);
    }
  }, [toast]);

  return <T ref={refT} />;
}
