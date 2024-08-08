import Image from "next/image";
import styles from "./page.module.css";
import { PostOwner } from "@/components/PostOwner";
import { comments } from "@/libs/comments";
import { Comment } from "@/components/Comment";
import { Reply } from "@/components/Reply";

export default function Home() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "ghostwhite" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm bg-white"
      >
        {/* Post Owner Example*/}
        <PostOwner />

        {/* Comment Example */}
        <Comment />

        {/* Reply Example */}
        <Reply />
        {/* map-loop render Comment component here */}
        <div className="d-flex gap-2 my-2">
          <img
            src="/profileImages/charliebrown.jpg"
            width="48"
            height="48"
            className="rounded-circle"
            style={{ objectFit: "cover" }}
          />
          <div
            className="rounded rounded-3 p-2"
            style={{ backgroundColor: "#E5E7EB" }}
          >
            <span className="fw-semibold" style={{ color: "#ff0000" }}>
              Charlie Brown
            </span>
            <br />
            <span style={{ color: "#ff4500" }}>บ้าไปแล้ว</span>
          </div>
        </div>
      </div>
    </div>
  );
}
