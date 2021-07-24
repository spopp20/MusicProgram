import { queryField, nonNull } from 'nexus'

export const SheetMusicFindUniqueQuery = queryField('findUniqueSheetMusic', {
  type: 'SheetMusic',
  args: {
    where: nonNull('SheetMusicWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.sheetMusic.findUnique({
      where,
      ...select,
    })
  },
})
