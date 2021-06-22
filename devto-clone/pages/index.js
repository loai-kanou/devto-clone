// import Link from "next/link";
import { firebaseDatabase } from "../firebase/firebase";

import Layout from "../components/layout";
import Main from "../components/main";

export default function IndexPage(props) {
  return (
    <Layout>
      <Main posts={props.posts} />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  let featurePosts = [];
  const leafRoot = "posts/features";
  if (firebaseDatabase) {
    const movieRef = firebaseDatabase.ref(`${leafRoot}`);
    movieRef.on("value", (snapshot) => {
      const posts = snapshot.val();
      if (posts && posts.length !== 0) {
        featurePosts = posts;
      }
    });
  }
  return {
    props: {
      posts: featurePosts
    } // will be passed to the page component as props
  };
}
