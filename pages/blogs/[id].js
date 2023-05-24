import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { connectToDatabase } from '../../utils/mongodb';
const ObjectId = require('mongodb').ObjectId;

const BlogDetail = ({ posts }) => {
  return (
    <div>
      {posts.map((post, i) => (
        <p key={i}>{post.title}</p>
      ))}
    </div>
  );
};

export default BlogDetail;
export async function getServerSideProps(context) {
  const _id = context.query._id;
  const { db } = await connectToDatabase();
  const data = await db
    .collection('blog')
    .find({ _id: ObjectId(_id) })
    .toArray();
  const posts = JSON.parse(JSON.stringify(data));
  console.log({ posts });
  return {
    props: {
      posts: posts,
    },
  };
}
