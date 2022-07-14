import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import * as operations from '../../redux/contacts/contacts-operations';

import s from './ContactList.module.css';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.entities);
  const filter = useSelector(state => state.filter);

  useEffect(() => {
    dispatch(operations.fetchContacts());
  }, [dispatch]);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().startsWith(filter.toLowerCase())
  );
  return (
    <>
      {contacts.length !== 0 && (
        <ul className={s.list}>
          {filteredContacts.map(contact => {
            return (
              <li key={contact.id} className={s.item}>
                <p>
                  <span className={s.name}>{contact.name}</span>:{' '}
                  {contact.number}
                </p>
                <button
                  onClick={() => dispatch(operations.deleteContact(contact.id))}
                  className={s.button}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
