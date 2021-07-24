import { queryField, nonNull, list } from 'nexus'

export const TagFindManyQuery = queryField('findManyTag', {
  type: nonNull(list(nonNull('Tag'))),
  args: {
    where: 'TagWhereInput',
    orderBy: list('TagOrderByInput'),
    cursor: 'TagWhereUniqueInput',
    distinct: 'TagScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.tag.findMany({
      ...args,
      ...select,
    })
  },
})
