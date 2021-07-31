import { mutationField, nonNull } from 'nexus'

export const SessionUpsertOneMutation = mutationField('upsertOneSession', {
  type: nonNull('Session'),
  args: {
    where: nonNull('SessionWhereUniqueInput'),
    create: nonNull('SessionCreateInput'),
    update: nonNull('SessionUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.session.upsert({
      ...args,
      ...select,
    })
  },
})
