import { create } from 'zustand';
import { Person } from '@/graphql/generated/graphql';

interface PersonStore {
  data: Person[]
  actions: PersonStoreActions
}

interface PersonStoreActions {
  addPerson: (data: Person[]) => void
}

const usePersonStore = create<PersonStore>((set, get) => ({
  data: [],
  actions: {
    addPerson: (personData) => {
      set({ data: personData })
    }
  }
}));

export const usePersonData = () => usePersonStore((state) => state.data);

export const usePersonActions = () => usePersonStore((state) => state.actions);