import React from "react";
import "./gallery.scss";

function Gallery() {
  document.addEventListener("mouseover", (e) => {
    if (e.target.closest(".gallery__right-item")) {
      e.target
        .closest(".gallery__right-item")
        .querySelector(".gallery__right-info")
        .classList.add("gallery__right-info_show");
      e.target
        .closest(".gallery__right-item")
        .addEventListener("mouseout", (e) => {
          e.target
            .closest(".gallery__right-item")
            .querySelector(".gallery__right-info")
            .classList.remove("gallery__right-info_show");
        });
    }
  });

  return (
    <div className="gallery">
      <div className="container">
        <div className="gallery__content">
          <div className="gallery__left">
            <img
              className="gallery__left-photo"
              src={require("../img/gallery/gallery_main.png")}
            />
          </div>
          <div className="gallery__right">
            <div className="gallery__right-row">
              <div className="gallery__right-item">
                <img
                  className="gallery__right-photo"
                  src={require("../img/gallery/gallery_photo_1.png")}
                />
                <div className="gallery__right-info">
                  <div className="gallery__right-full_screen">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect x="4.5" y="6.5" width="13" height="13" rx="1.5" />
                      <path d="M6.33784 6.63126L6.33784 6.49958C6.33784 5.39501 7.23327 4.49958 8.33784 4.49958L17.5 4.49959C18.6045 4.49959 19.5 5.39502 19.5 6.49959L19.5 15.9382C19.5 16.9853 18.5159 17.7537 17.5 17.4997V17.4997" />
                    </svg>
                  </div>
                  <div className="gallery__right-content">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8.75216 16.9953C8.63818 15.542 9.78674 14.2998 11.2445 14.2998H36.7555C38.2133 14.2998 39.3618 15.542 39.2478 16.9953L37.5851 38.1953C37.4831 39.4962 36.3976 40.4998 35.0927 40.4998H12.9073C11.6024 40.4998 10.5169 39.4962 10.4149 38.1953L8.75216 16.9953Z" />
                      <path d="M15.004 24.4857C15.004 24.4857 14.5437 7 23.5 7C32.4563 7 31.996 24.4857 31.996 24.4857" />
                    </svg>
                    <p>Узнай, что на мне</p>
                  </div>
                  <div className="gallery__right-count_favorite">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.4287 7.25725L13.7612 5.03654L17.1965 5.46595L18.5 7.63849V10.3206L12.0145 18.1959L5.93878 10.2507L5.05633 8.04458L6.34555 5.89588L9.35443 4.60636L11.6159 7.32009L12.0665 7.86089L12.4287 7.25725Z"
                        fill="white"
                      />
                      <path d="M11.9 7.0948C10.6998 1.47892 1.40879 5.90389 5.76035 11.6018C10.1119 17.2996 12.4 19.4908 12.4 19.4908" />
                      <path d="M11.8941 7.0948C13.0943 1.47892 22.7304 5.90389 18.3788 11.6018C14.0273 17.2996 11.7 19.5 11.7 19.5" />
                      <path d="M11.391 6.70752L12.4043 6.70757L12.3834 7.24079H11.391V6.70752Z" />
                    </svg>
                    <span>200</span>
                  </div>
                </div>
              </div>
              <div className="gallery__right-item">
                <img
                  className="gallery__right-photo"
                  src={require("../img/gallery/gallery_photo_2.png")}
                />
                <div className="gallery__right-info">
                  <div className="gallery__right-full_screen">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect x="4.5" y="6.5" width="13" height="13" rx="1.5" />
                      <path d="M6.33784 6.63126L6.33784 6.49958C6.33784 5.39501 7.23327 4.49958 8.33784 4.49958L17.5 4.49959C18.6045 4.49959 19.5 5.39502 19.5 6.49959L19.5 15.9382C19.5 16.9853 18.5159 17.7537 17.5 17.4997V17.4997" />
                    </svg>
                  </div>
                  <div className="gallery__right-content">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8.75216 16.9953C8.63818 15.542 9.78674 14.2998 11.2445 14.2998H36.7555C38.2133 14.2998 39.3618 15.542 39.2478 16.9953L37.5851 38.1953C37.4831 39.4962 36.3976 40.4998 35.0927 40.4998H12.9073C11.6024 40.4998 10.5169 39.4962 10.4149 38.1953L8.75216 16.9953Z" />
                      <path d="M15.004 24.4857C15.004 24.4857 14.5437 7 23.5 7C32.4563 7 31.996 24.4857 31.996 24.4857" />
                    </svg>
                    <p>Узнай, что на мне</p>
                  </div>
                  <div className="gallery__right-count_favorite">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.4287 7.25725L13.7612 5.03654L17.1965 5.46595L18.5 7.63849V10.3206L12.0145 18.1959L5.93878 10.2507L5.05633 8.04458L6.34555 5.89588L9.35443 4.60636L11.6159 7.32009L12.0665 7.86089L12.4287 7.25725Z"
                        fill="white"
                      />
                      <path d="M11.9 7.0948C10.6998 1.47892 1.40879 5.90389 5.76035 11.6018C10.1119 17.2996 12.4 19.4908 12.4 19.4908" />
                      <path d="M11.8941 7.0948C13.0943 1.47892 22.7304 5.90389 18.3788 11.6018C14.0273 17.2996 11.7 19.5 11.7 19.5" />
                      <path d="M11.391 6.70752L12.4043 6.70757L12.3834 7.24079H11.391V6.70752Z" />
                    </svg>
                    <span>200</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="gallery__right-row">
              <div className="gallery__right-item">
                <img
                  className="gallery__right-photo"
                  src={require("../img/gallery/gallery_photo_3.png")}
                />
                <div className="gallery__right-info">
                  <div className="gallery__right-full_screen">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect x="4.5" y="6.5" width="13" height="13" rx="1.5" />
                      <path d="M6.33784 6.63126L6.33784 6.49958C6.33784 5.39501 7.23327 4.49958 8.33784 4.49958L17.5 4.49959C18.6045 4.49959 19.5 5.39502 19.5 6.49959L19.5 15.9382C19.5 16.9853 18.5159 17.7537 17.5 17.4997V17.4997" />
                    </svg>
                  </div>
                  <div className="gallery__right-content">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8.75216 16.9953C8.63818 15.542 9.78674 14.2998 11.2445 14.2998H36.7555C38.2133 14.2998 39.3618 15.542 39.2478 16.9953L37.5851 38.1953C37.4831 39.4962 36.3976 40.4998 35.0927 40.4998H12.9073C11.6024 40.4998 10.5169 39.4962 10.4149 38.1953L8.75216 16.9953Z" />
                      <path d="M15.004 24.4857C15.004 24.4857 14.5437 7 23.5 7C32.4563 7 31.996 24.4857 31.996 24.4857" />
                    </svg>
                    <p>Узнай, что на мне</p>
                  </div>
                  <div className="gallery__right-count_favorite">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.4287 7.25725L13.7612 5.03654L17.1965 5.46595L18.5 7.63849V10.3206L12.0145 18.1959L5.93878 10.2507L5.05633 8.04458L6.34555 5.89588L9.35443 4.60636L11.6159 7.32009L12.0665 7.86089L12.4287 7.25725Z"
                        fill="white"
                      />
                      <path d="M11.9 7.0948C10.6998 1.47892 1.40879 5.90389 5.76035 11.6018C10.1119 17.2996 12.4 19.4908 12.4 19.4908" />
                      <path d="M11.8941 7.0948C13.0943 1.47892 22.7304 5.90389 18.3788 11.6018C14.0273 17.2996 11.7 19.5 11.7 19.5" />
                      <path d="M11.391 6.70752L12.4043 6.70757L12.3834 7.24079H11.391V6.70752Z" />
                    </svg>
                    <span>200</span>
                  </div>
                </div>
              </div>
              <div className="gallery__right-item">
                <img
                  className="gallery__right-photo"
                  src={require("../img/gallery/gallery_photo_4.png")}
                />
                <div className="gallery__right-info">
                  <div className="gallery__right-full_screen">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect x="4.5" y="6.5" width="13" height="13" rx="1.5" />
                      <path d="M6.33784 6.63126L6.33784 6.49958C6.33784 5.39501 7.23327 4.49958 8.33784 4.49958L17.5 4.49959C18.6045 4.49959 19.5 5.39502 19.5 6.49959L19.5 15.9382C19.5 16.9853 18.5159 17.7537 17.5 17.4997V17.4997" />
                    </svg>
                  </div>
                  <div className="gallery__right-content">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8.75216 16.9953C8.63818 15.542 9.78674 14.2998 11.2445 14.2998H36.7555C38.2133 14.2998 39.3618 15.542 39.2478 16.9953L37.5851 38.1953C37.4831 39.4962 36.3976 40.4998 35.0927 40.4998H12.9073C11.6024 40.4998 10.5169 39.4962 10.4149 38.1953L8.75216 16.9953Z" />
                      <path d="M15.004 24.4857C15.004 24.4857 14.5437 7 23.5 7C32.4563 7 31.996 24.4857 31.996 24.4857" />
                    </svg>
                    <p>Узнай, что на мне</p>
                  </div>
                  <div className="gallery__right-count_favorite">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.4287 7.25725L13.7612 5.03654L17.1965 5.46595L18.5 7.63849V10.3206L12.0145 18.1959L5.93878 10.2507L5.05633 8.04458L6.34555 5.89588L9.35443 4.60636L11.6159 7.32009L12.0665 7.86089L12.4287 7.25725Z"
                        fill="white"
                      />
                      <path d="M11.9 7.0948C10.6998 1.47892 1.40879 5.90389 5.76035 11.6018C10.1119 17.2996 12.4 19.4908 12.4 19.4908" />
                      <path d="M11.8941 7.0948C13.0943 1.47892 22.7304 5.90389 18.3788 11.6018C14.0273 17.2996 11.7 19.5 11.7 19.5" />
                      <path d="M11.391 6.70752L12.4043 6.70757L12.3834 7.24079H11.391V6.70752Z" />
                    </svg>
                    <span>200</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
