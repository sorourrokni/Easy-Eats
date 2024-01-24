import styles from "./DashboardContent.module.css";

interface ContentProps {
  pageSrc: string;
  title: string;
}

function HomeContent({ pageSrc, title }: ContentProps) {
  return (
    <>
      <iframe className={styles.frame} src={pageSrc} title={title}></iframe>
    </>
  );
}

export default HomeContent;
