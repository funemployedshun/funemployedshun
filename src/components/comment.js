import Giscus from '@giscus/react';
import { useColorMode } from '@docusaurus/theme-common';
import { useBlogPost } from '@docusaurus/plugin-content-blog/client';

export default function Comment() {
  const { colorMode } = useColorMode();
  const { metadata } = useBlogPost();

  return (
    <div style={{ marginTop: '30px' }}>
      <Giscus
        id="comment"
        repo="funemployedshun/funemployedshun"
        repoId="R_kgDORVM4yQ"
        category="Announcements"
        categoryId="DIC_kwDORVM4yc4C3Tft"
        mapping="specific"
        term={metadata.frontMatter.slug}
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={colorMode === 'dark' ? 'dark' : 'light'}
        lang="zh-TW"
        loading="lazy"
      />
    </div>
  );
}
