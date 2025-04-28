import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import styles from "../styles/Books.module.css";

const books = [

  {
    id: 1,
    title: "صياغة استراتيجيات المستقبل التكنولوجي والعلمي",
    author: "د. فريد النجار",
    image: "/Assets/Images/book1.png",
  },
  {
    id: 2,
    title: "الإدارة التكنولوجية للموارد البشرية بنظرية الوفرة",
    author: "د. فريد النجار",
    image: "/Assets/Images/book2.png",
  },
  {
    id: 3,
    title: "الثقافة السلوكية للتواصل مع الطفل",
    author: "د. فريد النجار",
    image: "/Assets/Images/book3.png",
  },
  {
    id: 4,
    title: "تكنولوجيا التسويق",
    author: "د. فريد النجار",
    image: "/Assets/Images/book4.png",
  },
  {
    id: 5,
    title: "أبناء الطلاق",
    author: "د. مروة عماد",
    image: "/Assets/Images/book5.png",
  },
  {
    id: 6,
    title: "مدخل إلى الاستشارة الفلسفية",
    author: "د. مصطفى النشار",
    image: "/Assets/Images/book6.png",
  },
];

const Books = () => {
  return (
    <div className={styles.booksPage}>
      <NavBar />
      <header className={styles.header}>
        <h1 className={styles.title}>إصداراتنا</h1>
      </header>
      <div className={styles.grid}>
        {books.map((book) => (
          <div className={styles.card} key={book.id}>
            <div className={styles.imageContainer}>
              <img src={book.image} alt={book.title} />
            </div>
            <div className={styles.info}>
              <h2 className={styles.bookTitle}>{book.title}</h2>
              <p className={styles.bookAuthor}>{book.author}</p>
              <button className={styles.button}>المزيد</button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Books;
