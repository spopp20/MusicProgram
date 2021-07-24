import { queryField, list } from 'nexus'

export const SheetMusicFindFirstQuery = queryField('findFirstSheetMusic', {
  type: 'SheetMusic',
  args: {
    where: 'SheetMusicWhereInput',
    orderBy: list('SheetMusicOrderByInput'),
    cursor: 'SheetMusicWhereUniqueInput',
    distinct: 'SheetMusicScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.sheetMusic.findFirst({
      ...args,
      ...select,
    })
  },
})
