import { queryField, nonNull, list } from 'nexus'

export const TagFindCountQuery = queryField('findManyTagCount', {
  type: nonNull('Int'),
  args: {
    where: 'TagWhereInput',
    orderBy: list('TagOrderByInput'),
    cursor: 'TagWhereUniqueInput',
    distinct: 'TagScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.tag.count(args as any)
  },
})
