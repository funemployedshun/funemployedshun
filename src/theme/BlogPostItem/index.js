import BlogPostItem from '@theme-original/BlogPostItem';
import Comment from '@site/src/components/comment';

export default function BlogPostItemWrapper(props) {
  return (
    <>
      <BlogPostItem {...props} />
      <Comment />
      {/* {props.isBlogPostPage && (
        <div style={{ marginTop: '2rem' }}>
          <Comment />
        </div>
      )} */}
    </>
  );
}
