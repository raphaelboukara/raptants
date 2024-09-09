import { useQuery, gql } from '@apollo/client';
import { useIsMock } from '@acme/acme.testing.mock-provider';
import { Discussion, mockDiscussions } from '@raptants/discussions.entities.discussion';

export const LIST_DISCUSSIONS = gql`
query LIST_DISCUSSIONS {
  listDiscussions {
    title
    username
  }
}
`;

export function useDiscussionList(): undefined|null|Discussion[] {
  const results = useQuery(LIST_DISCUSSIONS);
  // check if apollo is mocked and if so, return mock data.
  const isMock = useIsMock();
  if (isMock) return mockDiscussions();

  if (results.loading) return undefined;
  if (!results.data?.listDiscussions) return null;

  return results.data.listDiscussions?.map((discussion) => {
    return Discussion.from(discussion);
  });
}
