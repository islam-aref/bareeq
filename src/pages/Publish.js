import React from "react";
import styles from "../styles/Publish.module.css";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

const Publish = () => {
  return (
    <div className={styles.publishPage}>
      <NavBar />
      <div className={styles.header}>
        <h1 className={styles.title}>شروط النشر لدى دار بريق للنشر والتوزيع</h1>
        <p className={styles.subtitle}>
          تتشرف دار بريق بنشر مؤلفاتكم على أن تستوفى الشروط الآتية:
        </p>
      </div>

      <div className={styles.content}>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.number}>01</div>
            <p>
              أن يكون العمل من إنتاج المؤلف بشكل كامل، وفي حالة وجود اقتباسات
              يلزم للمؤلف الإشارة إليها بشكل واضح آخذا في الاعتبار ألّا يمثل ذلك
              انتهاكًا لحقوق الملكية الفكرية للعمل المقتبس منه.
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.number}>02</div>
            <p>يلزم أن يكون العمل مكتوبًا بلغة عربية فصحى أو انجليزية رسمية.</p>
          </div>
          <div className={styles.card}>
            <div className={styles.number}>03</div>
            <p>
              ألّا ينافي العمل المقدّم أية ثوابت أخلاقية أو يتضمن تجريحًا في
              أيٍّ من المعتقدات الدينية، وألا يحرض علة الكراهية أو العنصرية أو
              العنف.
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.number}>04</div>
            <p>أن يكون أكثر من 80% من الكتاب قد تمت كتابته ومراجعته </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Publish;
