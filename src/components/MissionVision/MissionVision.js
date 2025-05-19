import React from "react";
import styles from "./MissionVision.module.css";

const MissionVision = () => {
  return (
    <div className={styles.missionVision}>
      <div className={styles.mission}>
        <h2 className={styles.sectionTitle}>الرسالة</h2>
        <p className={styles.sectionText}>
          <strong>
            نلتزم بنشر الكتب الأكاديمية والمعرفية التي تُواكب أحدث التطورات
            العلمية والثقافية، مع الحفاظ على الجودة والعمق في الطرح. نحرص على
            اختيار أعمالٍ تُثري المكتبة العربية وتُقدِّم رؤىً جديدةً، من خلال
            تعاوننا مع أساتذة كبار من الباحثين والكتّاب، ونسعى لجعل المعرفة في متناول كل
            باحثٍ وقارئٍ عربي
          </strong>
        </p>
      </div>
      <div className={styles.vision}>
        <h2 className={styles.sectionTitle}>الرؤية</h2>
        <p className={styles.sectionText}>
          <strong>
            أن نكون وجهةً لنشر المعرفة والأفكار الأكاديمية الرصينة في
            العالم العربي، نساهم في إثراء المحتوى العربي بكتبٍ تُلهِم العقول
            وتُعزِّز البحث العلمي، وتُقدِّم مادةً ثريةً تلبي احتياجات القارئ
            العربي وتُسهم في بناء مجتمعٍ متعلمٍ ومُبدع
          </strong>
        </p>
      </div>
    </div>
  );
};

export default MissionVision;
