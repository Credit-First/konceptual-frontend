import * as React from 'react';
import Layout from '@/components/layout';
import ExhibitionItemSection from '@/components/exhibitionSection/item';

export default function ExhibitionItem() {
  return (
    <Layout main={true}>
      <ExhibitionItemSection />
    </Layout>
  );
}
