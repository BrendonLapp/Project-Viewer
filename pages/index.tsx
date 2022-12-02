import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Home</h1>
      <Link href="/info">Info</Link>
      <Link href="/configuration">Configuration</Link>
      <Link href="/security">Security</Link>
      <Link href="/templates">Templates</Link>
      <h2>Project</h2>
      <Link href="/project/1/audit">Audit</Link>
      <Link href="/project/1/inbox">Inbox</Link>
      <Link href="/project/1/details">Details</Link>
      <Link href="/project/1/submissions">Submissions</Link>
    </div>
  );
}
