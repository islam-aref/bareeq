import React, { useState, useEffect, useRef } from "react";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleScroll = () => {
      const container = scrollContainerRef.current;
      if (!container) return;

      const scrollY = window.scrollY;
      const maxScroll = isMobile
        ? container.offsetHeight - window.innerHeight * 0.7
        : container.offsetHeight - window.innerHeight;
      const progress = Math.min(scrollY / maxScroll, 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);

  // Mobile-specific animation values
  const mobileImageWidth = 100 - scrollProgress * 50;
  const mobileContentOpacity = scrollProgress * 2;
  const mobileTextOpacity = Math.min(scrollProgress * 3, 1);

  return (
    <div className={styles.scrollContainer} ref={scrollContainerRef}>
      <div className={styles.hero}>
        <div
          className={styles.heroImage}
          style={{
            width: isMobile
              ? `${mobileImageWidth}%`
              : `${100 - scrollProgress * 75}%`,
            transform: `translateY(${scrollProgress * (isMobile ? 10 : 20)}px)`,
            filter: `brightness(${
              1 - scrollProgress * (isMobile ? 0.3 : 0.5)
            })`,
          }}
        ></div>

        {/* Content Box */}
        <div
          className={styles.contentBox}
          style={{
            opacity: isMobile ? mobileContentOpacity : scrollProgress,
            width: isMobile ? "100%" : `${scrollProgress * 75}%`,
            display: isMobile
              ? scrollProgress > 0.2
                ? "flex"
                : "none"
              : "flex",
          }}
        >
          <div
            className={styles.textContent}
            style={{
              opacity: isMobile ? mobileTextOpacity : 1,
              transform: isMobile
                ? `translateY(${10 - scrollProgress * 20}px)`
                : "translateY(0)",
            }}
          >
            <h2 className={styles.heroHeadline}>
              دار بريق للنشر مؤسسةٌ متخصصة في إصدار الكتب الأكاديمية والمعرفية
              التي تجمع بين الدقة العلمية والأسلوب الجذاب
              {!isMobile && <br />}
              نهدف إلى سد الفجوات في المحتوى العربي من خلال نشر أعمالٍ مبتكرةٍ
            </h2>
            <p className={styles.heroSubscript}>
              نعمل على تطوير أنفسنا ومحتوانا باستمرار
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
