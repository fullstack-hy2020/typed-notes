export interface Note {
  id: number,
  content: string
}

export type NewNote = Omit<Note, 'id'>