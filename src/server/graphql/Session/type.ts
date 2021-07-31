import { objectType } from 'nexus'

export const Session = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Session',
  definition(t) {
    t.int('id')
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.nullable.field('expiresAt', { type: 'DateTime' })
    t.string('handle')
    t.nullable.string('hashedSessionToken')
    t.nullable.string('antiCSRFToken')
    t.nullable.string('publicData')
    t.nullable.string('privateData')
    t.nullable.field('user', {
      type: 'User',
      resolve(root: any) {
        return root.user
      },
    })
    t.nullable.int('userId')
  },
})
