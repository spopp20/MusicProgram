import { queryField, list } from 'nexus'

export const TagFindFirstQuery = queryField('findFirstTag', {
  type: 'Tag',
  args: {
    where: 'TagWhereInput',
    orderBy: list('TagOrderByInput'),
    cursor: 'TagWhereUniqueInput',
    distinct: 'TagScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.tag.findFirst({
      ...args,
      ...select,
    })
  },
})
