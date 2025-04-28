import React from "react";
import styles from "./RecentReleases.module.css";

const ArrowRight = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 7L9 12L14 17"
      stroke="#2d3d81"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowLeft = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 17L15 12L10 7"
      stroke="#2d3d81"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const books = [
  {
    id: 1,
    title: "صياغة استراتيجيات المستقبل التكنولوجي والعلمي",
    image: "/Assets/Images/book1.png",
  },
  {
    id: 2,
    title: "الإدارة التكنولوجية للموارد البشرية بنظرية الوفرة",
    image: "/Assets/Images/book2.png",
  },
  {
    id: 3,
    title: "الثقافة السلوكية للتواصل مع الطفل",
    image: "/Assets/Images/book3.png",
  },
  { id: 4, title: "تكنولوجيا التسويق", image: "/Assets/Images/book4.png" },
  { id: 5, title: "أبناء الطلاق", image: "/Assets/Images/book5.png" },
  {
    id: 6,
    title: "مدخل إلى الاستشارة الفلسفية",
    image: "/Assets/Images/book6.png",
  },
];
const RecentReleases = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % books.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + books.length) % books.length
    );
  };

  const getVisibleBooks = () => {
    return [
      books[(currentIndex - 2 + books.length) % books.length],
      books[(currentIndex - 1 + books.length) % books.length],
      books[currentIndex],
      books[(currentIndex + 1) % books.length],
      books[(currentIndex + 2) % books.length],
    ];
  };

  return (
    <div className={styles.recentReleases}>
      <h2 className={styles.title}>أحدث الإصدارات</h2>
      <div className={styles.sliderContainer}>
        <button className={styles.arrowButton} onClick={prevSlide}>
          <ArrowRight />
        </button>
        <div className={styles.slider}>
          {getVisibleBooks().map((book, index) => {
            const position = index - 2; // -2, -1, 0, +1, +2
            const isCenter = position === 0;
            const isLeft = position === -1;
            const isRight = position === 1;
            const isFarLeft = position === -2;
            const isFarRight = position === 2;

            return (
              <div
                key={`${book.id}-${index}`}
                className={`
                  ${styles.slide} 
                  ${isCenter ? styles.center : ""} 
                  ${isLeft ? styles.left : ""} 
                  ${isRight ? styles.right : ""}
                  ${isFarLeft ? styles.farLeft : ""}
                  ${isFarRight ? styles.farRight : ""}
                `}
              >
                <img
                  src={book.image}
                  alt={book.title}
                  className={styles.bookImage}
                />
                {isCenter && <h3 className={styles.bookTitle}>{book.title}</h3>}
              </div>
            );
          })}
        </div>
        <button className={styles.arrowButton} onClick={nextSlide}>
          <ArrowLeft />
        </button>
      </div>
    </div>
  );
};

export default RecentReleases;
