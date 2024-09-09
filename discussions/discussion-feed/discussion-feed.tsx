import type { ReactNode } from 'react';
import { Card } from '@acme/design.content.card';
import { useDiscussionList } from '@raptants/discussions.hooks.use-discussion';
import styles from './discussions-feed.module.scss';

export type DiscussionFeedProps = {
  children?: ReactNode;
  className?: string;
};

export function DiscussionFeed() {
  const discussions = useDiscussionList();
  if (!discussions) return <></>;

  return (
    <div className={styles.feed}>
      {discussions.map((discussion, key) => {
        return (
          <Card key={key} className={styles.discussion}>
            <span className={styles.count}>#{key}</span>
            <span className={styles.title}>{discussion.title}</span>
            <span className={styles.by}>By {discussion.username}</span>
          </Card>
        );
      })}
    </div>
  );
}
