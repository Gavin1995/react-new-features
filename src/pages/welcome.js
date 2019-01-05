import React, { Suspense } from 'react';

// 使用suspense + React.lazy动态加载
const Content = React.lazy(() => import('../components/content'));

export default () => (
  <div>
    <h1>Welcome</h1>
    <Suspense fallback={<div>loading...</div>}>
      <Content/>
    </Suspense>
  </div>
);
