import { objectType } from 'nexus'

export const SongTag = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'SongTag',
  definition(t) {
    t.int('id')
    t.nullable.field('song', {
      type: 'Song',
      resolve(root: any) {
        return root.song
      },
    })
    t.nullable.field('tag', {
      type: 'Tag',
      resolve(root: any) {
        return root.tag
      },
    })
    t.nullable.int('songId')
    t.nullable.int('tagId')
  },
})
