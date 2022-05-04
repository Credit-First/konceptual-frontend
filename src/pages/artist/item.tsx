import * as React from 'react';
import Layout from '@/components/layout';
import ArtistItemSection from '@/components/artistSection/item';

export default function ArtistItem() {
  return (
    <Layout main={true}>
      <ArtistItemSection />
    </Layout>
  );
}
