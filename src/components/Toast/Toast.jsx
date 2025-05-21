import { useEffect, useState } from "react";
import "./toast.css";
import { CircleAlert } from "lucide-react";
import { CircleX } from "lucide-react";
import { CircleCheck } from "lucide-react";

function Toast({ type, message }) {
  return (
    <div
      className={`toast-container ${type === "success" && "success"} ${
        type === "failure" && "failure"
      } ${type === "alert" && "alert"}`}
    >
      <div className="message">{message}</div>
      <div className="img">
        {type === "success" && <CircleCheck strokeWidth={3} color="#fff" />}
        {type === "failure" && <CircleX strokeWidth={3} color="#fff" />}
        {type === "alert" && <CircleAlert strokeWidth={3} color="#fff" />}
      </div>
    </div>
  );
}

export default Toast;
