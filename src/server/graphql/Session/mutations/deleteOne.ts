import { mutationField, nonNull } from 'nexus'

export const SessionDeleteOneMutation = mutationField('deleteOneSession', {
  type: 'Session',
  args: {
    where: nonNull('SessionWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.session.delete({
      where,
      ...select,
    })
  },
})
