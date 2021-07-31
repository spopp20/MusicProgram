import { objectType } from 'nexus'

export const Token = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Token',
  definition(t) {
    t.int('id')
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.string('hashedToken')
    t.field('type', { type: 'TokenType' })
    t.field('expiresAt', { type: 'DateTime' })
    t.string('sentTo')
    t.field('user', {
      type: 'User',
      resolve(root: any) {
        return root.user
      },
    })
    t.int('userId')
  },
})
