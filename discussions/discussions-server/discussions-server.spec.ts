import { DiscussionsServer } from './discussions-server.js';

describe('discussions server', () => {
  it('should return two discussions', async () => {
    const discussionsServer = DiscussionsServer.from();
    const discussions = await discussionsServer.listDiscussions();
    expect(discussions.length).toEqual(2);
  })
});
