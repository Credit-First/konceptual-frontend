import * as React from 'react';
import Layout from '@/components/layout';
import ExhibitionMainSection from '@/components/exhibitionSection/main';

export default function ExhibitionMain() {
  return (
    <Layout main={true}>
      <ExhibitionMainSection />
    </Layout>
  );
}
