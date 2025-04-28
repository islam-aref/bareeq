import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import styles from "../styles/About.module.css";
import processImage from "../Assets/Icons/icon-about-2.jpg";
import createImage from "../Assets/Icons/icon-about-3.jpg";

function About() {
  return (
    <div className={styles.aboutPage}>
      <NavBar />

      <div className={styles.aboutHero}>
        <div className={styles.aboutContent}>
          <h1>من نحن</h1>
          <p>
            دار بريق للنشر مؤسسةٌ متخصصة في إصدار الكتب الأكاديمية والمعرفية
            التي تجمع بين الدقة العلمية والأسلوب الجذاب. نهدف إلى سد الفجوات في
            المحتوى العربي من خلال نشر أعمالٍ مبتكرةٍ تُعزِّز ثقافة البحث
            والقراءة، وتُسهم في تنمية الفكر النقدي والإبداعي لدى القارئ العربي
          </p>
        </div>
      </div>

      <div className={styles.whatWeDo}>
        <h2 className={styles.sectionTitle}>قيمنا</h2>
        <div className={styles.processSteps}>
          <div className={styles.processStep}>
            <svg
              className={styles.innovativeImage}
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 3L15 8L21 9L17 13L18 19L12 16L6 19L7 13L3 9L9 8L12 3Z"
                stroke="#2d3d81"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <h3 className={styles.stepTitle}>الجودة والتميز الأكاديمي</h3>
            <p className={styles.stepDescription}>
              نلتزم بأعلى معايير الجودة في انتقاء المحتوى ومراجعته، لضمان تقديم
              كتبٍ تتميز بالدقة العلمية والعمق المعرفي. نحرص على أن تكون كل
              إصداراتنا مراجع موثوقة تُسهم في تطوير المعرفة العربية
            </p>
          </div>

          <div className={styles.processStep}>
            <svg
              className={styles.innovativeImage}
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 20V4"
                stroke="#2d3d81"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M5 12L12 5L19 12"
                stroke="#62a1d6"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 16L12 12L16 16"
                stroke="#b4ceef"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <h3 className={styles.stepTitle}>الإثراء الثقافي والمعرفي</h3>
            <p className={styles.stepDescription}>
              نؤمن بدورنا في إثراء المحتوى العربي بكتبٍ تحفز التفكير النقدي
              والإبداعي، وتغطي مجالاتٍ متنوعةً تلبّي احتياجات الباحثين والقرّاء.
              نسعى لبناء جسر بين الأكاديميا والجمهور العام بلغةٍ واضحةٍ وعميقة
            </p>
          </div>

          <div className={styles.processStep}>
            <svg
              className={styles.innovativeImage}
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="5"
                y="5"
                width="14"
                height="14"
                stroke="#2d3d81"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 5V19"
                stroke="#62a1d6"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M5 12H19"
                stroke="#b4ceef"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
            <h3 className={styles.stepTitle}>الابتكار والتطوير المستمر</h3>
            <p className={styles.stepDescription}>
              نتبنى أحدث الأساليب في النشر والتوزيع، ونواكب التطورات التقنية
              لضمان وصول المعرفة بطرقٍ مبتكرة. نستثمر في الأفكار الجديدة التي
              تُحدث فرقًا في المشهد الثقافي العربي، ونعمل على تطوير أنفسنا
              ومحتوانا باستمرار.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;
