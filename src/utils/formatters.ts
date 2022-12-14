import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export const formatDateWithSuffix = (date: Date) => {
  return formatDistanceToNow(new Date(date), {
    addSuffix: true,
    locale: ptBR
  })
}
export const dataFormatter = new Intl.DateTimeFormat('pt-BR', {
  timeStyle: 'short',
  dateStyle: 'short'
})
