import React from "react";
import "../../styles/Footer.css";
export function Footer() {
  return (
    <div className="footer container-fluid m-0 mt-4 p-0">
      <footer className="text-center text-dark">
        <div className="container p-4 pb-0">
          <section className="mb-4">
            <a
              className="btn btn-outline-dark btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="bi bi-facebook"></i>
            </a>
            <a
              className="btn btn-outline-dark btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="bi bi-twitter"></i>
            </a>
            <a
              className="btn btn-outline-dark btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="bi bi-google"></i>
            </a>
            <a
              className="btn btn-outline-dark btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a
              className="btn btn-outline-dark btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              className="btn btn-outline-dark btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="bi bi-github"></i>
            </a>
          </section>
        </div>
        <div className="text-center p-3">© 2023 حقوق النشر:</div>
      </footer>
    </div>
  );
}
