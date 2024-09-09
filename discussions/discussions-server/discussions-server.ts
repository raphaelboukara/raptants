import { Discussion, mockDiscussions } from '@raptants/discussions.entities.discussion';

/**
 * discussions server
 */
export class DiscussionsServer {
  /**
   * say hello.
   */
  async listDiscussions(): Promise<Discussion[]> {
    const discussions = mockDiscussions();
    return discussions.map((plainDiscussion) => {
      return Discussion.from(plainDiscussion);
    });
  }

  /**
   * create a new instance of a discussions server.
   */
  static from() {
    return new DiscussionsServer();
  }
}    
