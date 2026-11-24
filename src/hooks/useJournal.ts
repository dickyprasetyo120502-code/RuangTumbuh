import { useState, useEffect } from 'react';
import { JournalEntry } from '../types';

const STORAGE_KEY = 'ruang_tumbuh_journal_entries';

export function useJournal() {
  const [entries, setEntries] = useState<JournalEntry[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [
        {
          id: 'sample-entry-1',
          date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
          mood: 'senang',
          prompt: 'Apa 3 hal kecil yang bikin kamu tersenyum hari ini?',
          content: 'Tadi istirahat makan bekal bareng temen sebangku sambil ketawa karena jokes receh. Nilai tugas IPA juga lumayan memuaskan!'
        }
      ];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
    } catch (e) {
      console.error('Failed to save journal to localStorage', e);
    }
  }, [entries]);

  const addEntry = (entry: Omit<JournalEntry, 'id' | 'date'>) => {
    const newEntry: JournalEntry = {
      ...entry,
      id: 'journal_' + Date.now(),
      date: new Date().toLocaleDateString('id-ID', { 
        weekday: 'long', 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric' 
      })
    };
    setEntries(prev => [newEntry, ...prev]);
    return newEntry;
  };

  const deleteEntry = (id: string) => {
    setEntries(prev => prev.filter(e => e.id !== id));
  };

  return { entries, addEntry, deleteEntry };
}
