import { objectType } from 'nexus'

export const User = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'User',
  definition(t) {
    t.int('id')
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.string('email')
    t.nullable.string('name')
    t.nullable.string('hashedPassword')
    t.int('active')
    t.field('role', { type: 'Role' })
    t.list.field('tokens', {
      type: 'Token',
      args: {
        where: 'TokenWhereInput',
        orderBy: 'TokenOrderByInput',
        cursor: 'TokenWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'TokenScalarFieldEnum',
      },
      resolve(root: any) {
        return root.tokens
      },
    })
    t.list.field('sessions', {
      type: 'Session',
      args: {
        where: 'SessionWhereInput',
        orderBy: 'SessionOrderByInput',
        cursor: 'SessionWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'SessionScalarFieldEnum',
      },
      resolve(root: any) {
        return root.sessions
      },
    })
    t.nullable.field('_count', {
      type: 'UserCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
