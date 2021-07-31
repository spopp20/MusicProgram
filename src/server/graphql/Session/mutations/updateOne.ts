import { mutationField, nonNull } from 'nexus'

export const SessionUpdateOneMutation = mutationField('updateOneSession', {
  type: nonNull('Session'),
  args: {
    where: nonNull('SessionWhereUniqueInput'),
    data: nonNull('SessionUpdateInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.session.update({
      where,
      data,
      ...select,
    })
  },
})
