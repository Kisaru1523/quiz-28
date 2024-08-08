"use client";

export default function Reply({ ImagePath, username, replyTitle, likes }) {
  return (
    <div>
      <div className="d-flex gap-2 my-2 ps-5">
        <img
          src="/profileImages/puppy.jpg"
          width="48"
          height="48"
          className="rounded-circle"
          style={{ objectFit: "cover" }}
        />
        <div
          className="rounded rounded-3 p-2"
          style={{ backgroundColor: "#E5E7EB" }}
        >
          <span className="fw-semibold">หมาน้อย</span>
          <br />
          <span>จริงค้าบบบบบบบบ</span>
        </div>
      </div>
      <div className="d-flex gap-2 my-2 ps-5">
        <img
          src="/profileImages/popcat.png"
          width="48"
          height="48"
          className="rounded-circle"
          style={{ objectFit: "cover" }}
        />
        <div
          className="rounded rounded-3 p-2"
          style={{ backgroundColor: "#E5E7EB" }}
        >
          <span className="fw-semibold">Cat Meme</span>
          <br />
          <span>ลิซ่าาาาาาา</span>
          <div className="d-flex align-items-center gap-1">
            <img src="/like.svg" width={20}></img>
            <span className="text-muted">2 คน</span>
          </div>
        </div>
      </div>
    </div>
  );
}
