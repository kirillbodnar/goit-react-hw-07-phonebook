import Form from 'components/Form/Form';
import Section from 'components/Section/Section';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <>
      <Section title="Phonebook">
        <Form />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
      <ToastContainer />
    </>
  );
}
