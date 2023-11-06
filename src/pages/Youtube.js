import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../util/constants";
import { Link } from "react-router-dom";
export default function Youtube() {
  const [isLoading, setIsLoading] = useState(false);
  const [url, setUrl] = useState();
  const [data, setData] = useState();
  const [error, setError] = useState();
  const handleDownload = async () => {
    setIsLoading(true);
    if (url) {
      await axios({
        method: "post",
        url: `${BASE_URL}/youtube`,
        headers: { "Content-Type": "application/json" },
        data: {
          url: url,
        },
      })
        .then(function (response) {
          setData(response.data);
          setError(null);
        })
        .catch(function (err) {
          setError(err.message);
        });
    } else {
      setError("Link không được để trống");
    }
    setIsLoading(false);
  };

  const pasteText = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setUrl(text);
    } catch (error) {}
  };

  useEffect(() => {
    document.title =
      "Tải video youtube - Youtube to mp3 - Chuyển nhạc Toutube sang mp3";
  }, []);

  return (
    <div className="lg:px-0 bg-gray-100 pb-8">
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <div className="space-y-8 lg:w-1/2 drop-shadow-2xl mx-auto py-16 lg:py-32">
          <h1 className="text-white text-3xl font-bold text-center">
            Tải video Youtube
          </h1>
          <div className="border rounded bg-white p-2 space-x-2 flex">
            <input
              type="text"
              placeholder="Paste link vào đây"
              className={`p-4 w-full outline-none ${
                isLoading && "animate-pulse cursor-not-allowed"
              }`}
              onChange={(e) => setUrl(e.target.value)}
              disabled={isLoading}
              value={url}
            />
            <button
              className={`px-2 lg:px-4 rounded bg-gray-400 text-white ${
                isLoading && "cursor-not-allowed"
              }`}
              onClick={pasteText}
              disabled={isLoading}
            >
              Paste
            </button>
            <button
              className={`px-5 lg:px-8 rounded bg-sky-600 text-white ${
                isLoading && "animate-pulse cursor-not-allowed"
              }`}
              onClick={handleDownload}
              disabled={isLoading}
            >
              {isLoading ? "Đợi..." : "Tải"}
            </button>
          </div>

          {error && !isLoading && <p className="text-white">{error}</p>}

          {data && (
            <div className="border rounded bg-white p-2 grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="flex justify-center items-center">
                <img
                  className="h-64"
                  src={data.Thumbnail}
                  alt="img"
                />
              </div>
              <div className="flex justify-center items-center">
                <div className="space-y-8">
                  <Link
                    className="text-center mx-auto block p-3 rounded bg-sky-600 text-white"
                    to={data.video.Best}
                    target="_blank"
                  >
                    Tải video
                  </Link>
                  <Link
                    className="text-center mx-auto block p-3 rounded bg-sky-600 text-white"
                    to={data.Audio}
                    target="_black"
                  >
                    Tải âm thanh
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="text-blue-900 text-center space-y-4">
            <img
              src="https://ssstik.io/images/unlimited.svg"
              className="w-32 h-32 mx-auto"
              alt="TikTak"
            />
            <h2 className="text-xl font-bold">Không giới hạn</h2>
            <p className="w-1/2 mx-auto ">
              Tải bao nhiêu tùy ý bạn, không có giới hạn hay ràn buộc gì cả.
            </p>
          </div>
          <div className="text-blue-900 text-center space-y-4">
            <img
              src="https://ssstik.io/images/nowatermarc.svg"
              className="w-32 h-32 mx-auto"
              alt="TikTak"
            />
            <h2 className="text-xl font-bold">Không có logo!</h2>
            <p className="w-1/2 mx-auto ">
              Tải video Youtube không có ảnh chìm hay logo.
            </p>
          </div>
          <div className="text-blue-900 text-center space-y-4">
            <img
              src="https://ssstik.io/images/audio.svg"
              className="w-32 h-32 mx-auto"
              alt="TikTak"
            />
            <h2 className="text-xl font-bold">MP4 và MP3</h2>
            <p className="w-1/2 mx-auto ">
              Lưu video chất lượng cao, tùy chọn định dạng MP4 hoặc MP3.
            </p>
          </div>
        </div>

        <div className="lg:w-2/3 mx-auto mt-8 p-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded space-y-8">
          <h1 className="text-3xl font-bold text-white text-center">
            Hướng dẫn tải video Youtube không có logo
          </h1>
          <div className="text-white">
            <h1 className="text-2xl font-bold">1. Tìm một video Youtube</h1>
            <p className="text-lg">
              - phát một video mà bạn muốn lưu vào thiết bị của mình trên ứng
              dụng Youtube
            </p>
          </div>

          <div className="text-white">
            <h1 className="text-2xl font-bold">2. Sao chép liên kết</h1>
            <p className="text-lg">
              - copy liên kết đến video trên thanh địa chỉ đối với máy tính.
              Chọn chia sẻ và bấm vào nút Sao chép liên kết đổi với điện thoại
            </p>
          </div>

          <div className="text-white">
            <h1 className="text-2xl font-bold">3. Tải video Youtube</h1>
            <p className="text-lg">
              - quay lại taivideo.site và dán liên kết đến video TikTok vào ô
              tìm kiếm trên trang đó và chạm vào nút "Tải"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
