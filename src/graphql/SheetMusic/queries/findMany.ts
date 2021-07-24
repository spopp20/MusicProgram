import { queryField, nonNull, list } from 'nexus'

export const SheetMusicFindManyQuery = queryField('findManySheetMusic', {
  type: nonNull(list(nonNull('SheetMusic'))),
  args: {
    where: 'SheetMusicWhereInput',
    orderBy: list('SheetMusicOrderByInput'),
    cursor: 'SheetMusicWhereUniqueInput',
    distinct: 'SheetMusicScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.sheetMusic.findMany({
      ...args,
      ...select,
    })
  },
})
