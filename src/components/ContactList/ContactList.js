import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

import * as operations from '../../redux/contacts/contacts-operations';

import s from './ContactList.module.css';
import Loader from 'Loader/Loader';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.entities);
  const filter = useSelector(state => state.filter);
  const isLoading = useSelector(state => state.contacts.isLoading);

  useEffect(() => {
    dispatch(operations.fetchContacts());
  }, [dispatch]);

  function handleContactDelete(contact) {
    dispatch(operations.deleteContact(contact.id));
    toast.success(`Contact '${contact.name}' has been deleted`);
  }

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <>
      {contacts.length !== 0 ? (
        <ul className={s.list}>
          {filteredContacts.map(contact => {
            return (
              <li key={contact.id} className={s.item}>
                <p>
                  <span className={s.name}>{contact.name}</span>:{' '}
                  {contact.number}
                </p>
                {isLoading ? (
                  <Loader />
                ) : (
                  <button
                    onClick={() => handleContactDelete(contact)}
                    className={s.button}
                  >
                    Delete
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      ) : (
        <h1>No contacts.</h1>
      )}
    </>
  );
}
