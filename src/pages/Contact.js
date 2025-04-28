import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import styles from "../styles/Contact.module.css";

const ContactUs = () => {
  return (
    <div className={styles.all}>
      <NavBar />
      <div className={styles.contactContainer}>
        <div className={styles.contactHeader}>
          <h1>للتواصل معنا</h1>
        </div>

        <div className={styles.contactMethods}>
          {/* Email Card */}
          <div className={styles.contactCard}>
            <div className={styles.contactIcon}>
              <EmailIcon />
            </div>
            <div className={styles.contactInfo}>
              <h3>اكتب لنا</h3>
              <p>info@bareeqpublishing.com</p>
            </div>
          </div>

          {/* Phone Card */}
          <div className={styles.contactCard}>
            <div className={styles.contactIcon}>
              <PhoneIcon />
            </div>
            <div className={styles.contactInfo}>
              <h3>هاتِفنا</h3>
              <p>+201281778761</p>
            </div>
          </div>
        </div>

        <div className={styles.addressContainer}>
          <h2>العنوان</h2>
          <p className={styles.addressText}>
            جمهورية مصر العربية
            <br />
            مدينة السادات، المنوفية
            <br />
            سوق الحي 11
            <br />
            مكتب المبيعات
            <br />
            المساحة، فيصل
            <br />
            الجيزة
            <br />
            صـ . بـ . 12111{" "}
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

// SVG Components
const EmailIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 7L10.94 11.337C11.5885 11.7428 12.4115 11.7428 13.06 11.337L20 7M5 18H19C20.1046 18 21 17.1046 21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18Z"
      stroke="#2d3d81"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const PhoneIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 5C3 16.046 16.046 3 5 3L5.766 3.011C7.056 3.022 8.227 3.816 8.664 5.007L9.731 7.887C10.1 8.902 9.8 10.049 9 10.8L7.8 12C7.8 12 9 14 11 16C13 18 15 19.2 15 19.2L16.2 18C16.951 17.2 18.098 16.9 19.113 17.269L21.993 18.336C23.184 18.773 23.978 19.944 23.989 21.234L24 22C24 7.954 7.954 24 22 24H19C8.507 24 0 15.493 0 5V3"
      stroke="#2d3d81"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ContactUs;
