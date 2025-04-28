import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import styles from "../styles/Books.module.css";

const books = [
  // ... (keep your existing books array)
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
