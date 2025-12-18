import { buildConfig } from 'payload/config';
import path from 'path';

const Posts = {
  slug: 'posts',
  labels: {
    singular: 'Post',
    plural: 'Posts'
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true
    },
    {
      name: 'excerpt',
      type: 'textarea'
    },
    {
      name: 'content',
      type: 'richText'
    },
    {
      name: 'publishedAt',
      type: 'date'
    },
    {
      name: 'status',
      type: 'select',
      options: ['draft', 'published'],
      defaultValue: 'draft'
    }
  ]
};

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  collections: [Posts],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts')
  }
});


