import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import ContactForm from './components/ContactForm/ContactForm'
import ContactList from './components/ContactList/ContactList'
import Filter from './components/Filter/Filter'
import styles from './App.module.css'

const STORAGE_KEY = 'phonebook-contacts'

const initialContacts = [
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
]

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : initialContacts
  })
  const [filter, setFilter] = useState('')

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts])

  const addContact = ({ name, number }) => {
    const exists = contacts.some(
      c => c.name.toLowerCase() === name.toLowerCase()
    )
    if (exists) {
      alert(`"${name}" is already in the phonebook.`)
      return
    }
    setContacts(prev => [...prev, { id: nanoid(), name, number }])
  }

  const deleteContact = id => {
    setContacts(prev => prev.filter(c => c.id !== id))
  }

  const filteredContacts = contacts.filter(c =>
    c.name.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div>
      <header className={styles.header}>
        <h1 className={styles.title}>Phonebook</h1>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Add New Contact</h2>
        <ContactForm onSubmit={addContact} />
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          Contacts{' '}
          <span className={styles.count}>({filteredContacts.length})</span>
        </h2>
        <Filter value={filter} onChange={e => setFilter(e.target.value)} />
        <ContactList contacts={filteredContacts} onDelete={deleteContact} />
      </section>
    </div>
  )
}
