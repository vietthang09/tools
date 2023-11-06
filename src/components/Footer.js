import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-white py-4">
      <div class="container mx-auto grid grid-cols-2 lg:grid-cols-4">
        <div class="basis-1/4">
          <ul>
            <li className="font-bold text-blue-900 text-xl pb-[20px]">
              TẢI VIDEO TIKTOK
            </li>
          </ul>
          <ul className="lg:pt-0">
            <li className="font-normal text-blue-700 text-lg">
              <Link to="/">Tải video tiktok không có ảnh chìm</Link>
            </li>
            <li className="font-normal text-blue-700 text-lg">
              <Link to="/chuyen-doi">Tải âm thanh tiktok</Link>
            </li>
            <li className="font-normal text-blue-700 text-lg">
              <Link to="/">Tải ảnh từ tiktok</Link>
            </li>
          </ul>
        </div>
        <div class="basis-1/4">
          <ul>
            <li className="font-bold text-blue-900 text-xl pb-[20px]">
              TẢI VIDEO YOUTUBE
            </li>
          </ul>
          <ul>
            <li className="font-normal text-blue-700 text-lg">
              <Link to="/youtube">Tải video youtube miễn phí</Link>
            </li>
            <li className="font-normal text-blue-700 text-lg">
              <Link to="/youtube">Tải âm thanh youtube</Link>
            </li>
          </ul>
        </div>
        <div class="basis-1/4">
          <ul>
            <li className="font-bold text-blue-900 text-xl pb-[20px]">
              TẢI VIDEO INSTAGRAM
            </li>
          </ul>
          <ul className="lg:pt-0">
            <li className="font-normal text-blue-700 text-lg">
              <Link to="/instagram">Tải video instagram miễn phí</Link>
            </li>
            <li className="font-normal text-blue-700 text-lg">
              <Link to="/instagram">Tải xuống story instagram</Link>
            </li>
            <li className="font-normal text-blue-700 text-lg">
              <Link to="/instagram">Tải ảnh instagram miễn phí</Link>
            </li>
          </ul>
        </div>
        <div class="basis-1/4">
          <ul>
            <li className="font-bold text-blue-900 text-xl pb-[20px]">
              TẢI VIDEO FACEBOOK
            </li>
          </ul>
          <ul className="lg:pt-0">
            <li className="font-normal text-blue-700 text-lg">
              <Link to="/facebook">Tải video facebook miễn phí</Link>
            </li>
            <li className="font-normal text-blue-700 text-lg">
              <Link to="/facebook">Tải âm thanh facebook</Link>
            </li>
          </ul>
        </div>
      </div>

      <h1 className="mt-[30px] text-center text-neutral-700 font-normal text-lg border-t-2 border-dashed">
        taivideo.site là một công cụ miễn phí để giúp bạn tải video từ các mạng
        xã hội trực tuyến không có logo.
      </h1>
    </div>
  );
}
