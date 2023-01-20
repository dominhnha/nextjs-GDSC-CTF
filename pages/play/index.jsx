import React from "react";
import Link from "next/link";

const PlayPage = () => {
  return (
    <div>
      <p>
        Nhiệm vụ của bạn là sử dụng mọi kỹ năng mà bạn có để tìm ra cờ được ẩn
        giấu đâu đó trong trang web này hoặc một nơi nào đó mà trang này sẽ dẫn
        bạn tới!
      </p>
      <Link href="/play/1">
        <span style={{ backgroundColor: "#34eb98" }}>Bắt đầu chơi</span>
      </Link>
    </div>
  );
};

export default PlayPage;
