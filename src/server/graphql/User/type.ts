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
    t.string('password')
    t.int('active')
    t.field('role', { type: 'Role' })
  },
})
