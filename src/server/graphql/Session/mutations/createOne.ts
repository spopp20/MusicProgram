import { mutationField, nonNull } from 'nexus'

export const SessionCreateOneMutation = mutationField('createOneSession', {
  type: nonNull('Session'),
  args: {
    data: nonNull('SessionCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.session.create({
      data,
      ...select,
    })
  },
})
