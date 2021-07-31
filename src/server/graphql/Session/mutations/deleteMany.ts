import { mutationField, nonNull } from 'nexus'

export const SessionDeleteManyMutation = mutationField('deleteManySession', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'SessionWhereInput',
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.session.deleteMany({ where } as any)
  },
})
