import { NavigationProvider } from '@bitdesign/sparks.navigation.link';
import { Header } from '@raptants/project.layout.header';
import { Footer } from '@raptants/project.footer';
import { Routes, Route } from 'react-router-dom';
import { DiscussionFeed } from '@raptants/discussions.discussion-feed';
import { AcmeTheme } from '@acme/design.acme-theme';
import { Card } from '@acme/design.content.card';

export function MyProjectWeb() {
  return (
    <AcmeTheme>
      <NavigationProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Card>Welcome to Acme.</Card>} />
          <Route path="/discussions" element={<DiscussionFeed />} />
        </Routes>
        <Footer>My Awesome App Footer</Footer>
      </NavigationProvider>
    </AcmeTheme>
  );
}
